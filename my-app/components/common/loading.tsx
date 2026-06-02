import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
} as const;

export function Loading({ size = "md", className }: LoadingProps) {
  return (
    <div
      role="status"
      aria-label="로딩 중"
      className={cn("flex items-center justify-center")}
    >
      <Loader2 className={cn("animate-spin", sizeMap[size], className)} />
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loading size="lg" />
    </div>
  );
}
