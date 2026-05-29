"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type PremiumCardProps = HTMLMotionProps<"div"> & {
  intensity?: "quiet" | "live" | "command";
};

export function PremiumCard({
  className,
  intensity = "quiet",
  children,
  ...props
}: PremiumCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.25 } }}
      className={cn(
        "glass-panel neural-surface rounded-[8px] p-5",
        intensity === "live" && "shadow-neural",
        intensity === "command" && "border-ivory/18 bg-white/[0.055]",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
