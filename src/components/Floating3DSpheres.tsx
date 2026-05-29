import * as React from "react";
import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Floating3DSpheresProps {
  theme: "dark" | "light";
}

interface SphereData {
  position: [number, number, number];
  size: number;
  speed: number;
  driftAmplitude: number;
  phaseOffset: number;
  color1: string;
  color2: string;
}

const VERTEX_SHADER = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT_SHADER = `
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform vec3 uLightDirection;
  uniform float uTime;
  uniform float uOpacity;

  varying vec3 vNormal;
  varying vec3 vViewPosition;
  varying vec2 vUv;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    
    // Smooth time-based modulation of the gradient flow
    float angleShift = sin(uTime * 0.3) * 0.1;
    vec3 orientedNormal = normal + vec3(angleShift, -angleShift, 0.0);
    
    // Create soft mixed-lighting linear gradient across the sphere surface
    float gradSlope = dot(normalize(orientedNormal), vec3(0.6, 0.8, 0.4)) * 0.5 + 0.5;
    vec3 baseColor = mix(uColor1, uColor2, gradSlope);
    
    // Animated wave perturbation for organic fluid depth visual
    float wave = sin(vUv.x * 3.1415 + uTime * 0.4) * cos(vUv.y * 3.1415 - uTime * 0.2);
    baseColor = mix(baseColor, vec3(1.0, 1.0, 1.0), clamp(wave * 0.08, -0.05, 0.05));

    // Fresnel reflection highlight to mimic expensive curved glass
    float fresnelFactor = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.5);
    
    // Soft specular spotlight reflection coordinates
    vec3 lightDir = normalize(uLightDirection);
    vec3 halfVec = normalize(lightDir + viewDir);
    float specAmount = pow(max(dot(normal, halfVec), 0.0), 32.0);
    
    // Merge final components
    vec3 finalColor = mix(baseColor, vec3(1.0, 1.0, 1.0), fresnelFactor * 0.35);
    finalColor += vec3(1.0, 1.0, 1.0) * specAmount * 0.4; // spec sheen helper node

    // Delicate translucent alpha tapering near rim edges
    float alpha = uOpacity * (1.1 - fresnelFactor * 0.35);

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

function DynamicSphere({ 
  position, 
  size, 
  speed, 
  driftAmplitude, 
  phaseOffset, 
  color1, 
  color2, 
  mouse, 
  theme 
}: SphereData & { mouse: React.MutableRefObject<THREE.Vector2>; theme: "dark" | "light" }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const initialPosition = useRef(new THREE.Vector3(...position));

  // Build unique material uniforms to avoid cross-instance override leakage
  const uniforms = useMemo(() => ({
    uColor1: { value: new THREE.Color(color1) },
    uColor2: { value: new THREE.Color(color2) },
    uLightDirection: { value: new THREE.Vector3(1.0, 1.5, 1.0).normalize() },
    uTime: { value: 0 },
    uOpacity: { value: theme === "dark" ? 0.35 : 0.28 }
  }), [color1, color2, theme]);

  // Handle subtle individual animation loops and mouse physics integration
  useFrame((state) => {
    if (!meshRef.current || !materialRef.current) return;

    const time = state.clock.getElapsedTime();
    
    // Clock uniforms syncing
    materialRef.current.uniforms.uTime.value = time;

    // Fluid organic drifting coordinates
    const driftX = Math.sin(time * speed + phaseOffset) * driftAmplitude;
    const driftY = Math.cos(time * speed * 0.9 + phaseOffset) * driftAmplitude;

    // Reacting directly to normalized mouse event states
    // The coefficients scale positioning within a tight perspective bounding safe zone
    const targetX = initialPosition.current.x + driftX + (mouse.current.x * 2.2);
    const targetY = initialPosition.current.y + driftY + (mouse.current.y * 1.5);

    // Elastic smooth motion using linear interpolation
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.04);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.04);

    // Minor slow rotation to keep the custom shader grid textures alive
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.0015;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        blending={THREE.NormalBlending}
      />
    </mesh>
  );
}

export default function Floating3DSpheres({ theme }: Floating3DSpheresProps) {
  const mouse = useRef(new THREE.Vector2(0, 0));

  // Secure window hook capturing screen-wide cursor motions (works flawlessly with overlap)
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize values directly into [-1, 1] Cartesian coordinates
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mouse.current.set(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Premium, curated sphere profiles with high-end designer color schemes matching peerlynk labs branding
  const spheres: SphereData[] = useMemo(() => [
    {
      position: [-2.6, 1.4, -0.8],
      size: 1.35,
      speed: 0.28,
      driftAmplitude: 0.35,
      phaseOffset: 0.0,
      color1: "#06b6d4", // premium cyan
      color2: "#4f46e5"  // royal-purple
    },
    {
      position: [2.8, -1.2, -1.5],
      size: 1.65,
      speed: 0.22,
      driftAmplitude: 0.30,
      phaseOffset: 2.2,
      color1: "#6366f1", // deep indigo
      color2: "#ec4899"  // hot pink-magenta
    },
    {
      position: [0.8, 2.0, -2.4],
      size: 0.95,
      speed: 0.36,
      driftAmplitude: 0.45,
      phaseOffset: 4.1,
      color1: "#c084fc", // soft orchid-purple
      color2: "#06b6d4"  // cyan
    },
    {
      position: [-2.2, -1.8, -2.0],
      size: 0.70,
      speed: 0.40,
      driftAmplitude: 0.25,
      phaseOffset: 1.5,
      color1: "#14b8a6", // premium teal
      color2: "#2563eb"  // electric blue
    }
  ], []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
      >
        {spheres.map((sphere, index) => (
          <DynamicSphere
            key={index}
            {...sphere}
            mouse={mouse}
            theme={theme}
          />
        ))}
      </Canvas>
    </div>
  );
}
