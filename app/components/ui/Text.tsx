import { cn } from "@/app/lib/utils";
import { HTMLAttributes } from "react";
import { textVariants } from "../shared/variant";

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "normal" | "medium" | "semibold" | "bold";
  color?: "default" | "muted" | "primary" | "danger" | "success";
  align?: "left" | "center" | "right";
}

export const Text = ({
  as: Component = "p",
  children,
  className,
  size,
  weight,
  color,
  align,
  ...props
}: TextProps) => {
  return (
    <Component
      className={cn(textVariants({ size, weight, color, align }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};