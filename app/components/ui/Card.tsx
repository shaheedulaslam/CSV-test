import { cn } from "@/app/lib/utils";
import { Box } from "./Box";
import { Text } from "./Text";
import { ReactNode } from "react";
import { Stack } from "./Stack";

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  border?: "none" | "default" | "strong";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  background?: "default" | "muted" | "primary" | "secondary";
}

export const Card = ({ 
  children, 
  className, 
  title, 
  description,
  padding = "md",
  border = "default",
  rounded = "md",
  background = "default"
}: CardProps) => {
  
  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-5",
    lg: "p-7",
    xl: "p-9",
  }[padding];

  const borderClasses = {
    none: "border-0",
    default: "border border-gray-200",
    strong: "border-2 border-gray-300",
  }[border];

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }[rounded];

  const backgroundClasses = {
    default: "bg-white",
    muted: "bg-gray-50",
    primary: "bg-blue-50",
    secondary: "bg-gray-100",
  }[background];

  return (
    <Box 
      className={cn(
        "relative transition-all-smooth",
        paddingClasses,
        borderClasses,
        roundedClasses,
        backgroundClasses,
        className
      )}
    >
      {(title || description) && (
        <Stack gap="sm" className="mb-4">
          {title && <Text as="h3" size="lg" weight="semibold">{title}</Text>}
          {description && <Text color="muted">{description}</Text>}
        </Stack>
      )}
      {children}
    </Box>
  );
};