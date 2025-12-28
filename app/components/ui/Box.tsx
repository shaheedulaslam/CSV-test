import { cn } from "@/app/lib/utils";
import { HTMLAttributes } from "react";
import { boxVariants } from "../shared/variant";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg";
  border?: "none" | "default" | "strong";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  background?: "default" | "muted" | "primary";
}

export const Box = ({
  children,
  className,
  padding,
  border,
  rounded,
  background,
  ...props
}: BoxProps) => {
  return (
    <div
      className={cn(
        boxVariants({ padding, border, rounded, background }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};