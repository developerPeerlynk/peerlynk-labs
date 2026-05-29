import React from "react";
import {
  Globe,
  Smartphone,
  Layers,
  Cpu,
  Rocket,
  LayoutDashboard,
  Paintbrush,
  Sparkles,
  PlusCircle,
  Wrench,
  Zap,
  Lock,
  Code2,
  MessageSquareText,
  BrainCircuit,
  Cloud,
  Database,
  Compass,
  Eye,
  Clock,
  TrendingUp,
  Sliders,
  Tv,
  CheckCircle2,
  Atom,
  Server,
  Grid,
  Flame,
  Activity,
  ArrowUpRight,
  Briefcase,
  LucideProps
} from "lucide-react";

const iconsMap: Record<string, React.ComponentType<LucideProps>> = {
  Globe,
  Smartphone,
  Layers,
  Cpu,
  Rocket,
  LayoutDashboard,
  Paintbrush,
  Sparkles,
  PlusCircle,
  Wrench,
  Zap,
  Lock,
  Code2,
  MessageSquareText,
  BrainCircuit,
  Cloud,
  Database,
  Compass,
  Eye,
  Clock,
  TrendingUp,
  Sliders,
  Tv,
  CheckCircle2,
  Atom,
  Server,
  Grid,
  Flame,
  Activity,
  ArrowUpRight,
  Briefcase
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className, size }: LucideIconProps) {
  const IconComponent = iconsMap[name];
  const renderedClass = className || "w-5 h-5";
  const renderedSize = size || 20;

  if (!IconComponent) {
    return <Globe className={renderedClass} size={renderedSize} />;
  }
  return <IconComponent className={renderedClass} size={renderedSize} />;
}

