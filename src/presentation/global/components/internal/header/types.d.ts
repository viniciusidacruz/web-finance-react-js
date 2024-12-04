import { ElementType, ReactNode } from "react";

export interface HeaderProps {
  children: ReactNode;
  className?: string;
}

export type HeaderIconProps = Pick<HeaderProps, "className"> & {
  icon: ElementType;
};
