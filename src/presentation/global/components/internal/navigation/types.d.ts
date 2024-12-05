import { ReactNode } from "react";

export interface NavigationProps {
  className?: string;
  children: ReactNode;
}

export type NavigationItemProps = NavigationProps & {
  path: string;
};

export type NavigationTabProps = NavigationProps & {
  param: string;
};
