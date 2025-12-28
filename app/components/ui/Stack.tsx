
import { cn } from "@/app/lib/utils";
import { HTMLAttributes } from "react";
import { stackVariants } from "../shared/variant";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  gap?: "none" | "xs" | "sm" | "md" | "lg";
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "between";
}

export const Stack = ({
  children,
  className,
  direction = "vertical",
  gap = "none",
  align = "start",
  justify = "start",
  ...props
}: StackProps) => {
  return (
    <div
      className={cn(stackVariants({ direction, gap, align, justify }), className)}
      {...props}
    >
      {children}
    </div>
  );
};