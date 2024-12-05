import { MouseEvent, ReactNode } from "react";

export interface CardProps {
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
}
