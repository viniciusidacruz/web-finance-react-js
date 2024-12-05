import { MouseEvent, ReactNode } from "react";

export interface BaseProps {
  className?: string;
  children: ReactNode;
}

export type CardProps = BaseProps & {
  isLoading?: boolean;
  onClick?: (event: MouseEvent) => void;
};

export type CardTextProps = BaseProps;

export type CardTitleProps = BaseProps;

export type CardBigText = BaseProps;

export type CardIconProps = BaseProps;

export type CardBaseProps = BaseProps;
