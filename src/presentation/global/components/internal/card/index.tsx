import { cn } from "@lib/tw-merge";
import {
  CardBaseProps,
  CardBigText,
  CardIconProps,
  CardProps,
  CardTextProps,
  CardTitleProps,
} from "./types";
import { Skeleton } from "../../external";

const Root = ({
  children,
  className = "",
  onClick,
  isLoading = false,
}: CardProps) => {
  if (isLoading)
    return <Skeleton className="bg-gray-300 shadow w-full min-h-32" />;

  return (
    <div
      data-testid="@card_root"
      onClick={onClick}
      className={cn(
        className,
        "rounded-xl bg-white border border-gray-100 p-6 shadow w-full"
      )}
    >
      {children}
    </div>
  );
};

const Text = ({ children, className = "" }: CardTextProps) => (
  <h3 className={cn(className, "text-sm font-medium text-gray-600 leading-5")}>
    {children}
  </h3>
);

const Title = ({ children, className = "" }: CardTitleProps) => (
  <h3
    className={cn(className, "text-base font-semibold text-gray-900 leading-6")}
  >
    {children}
  </h3>
);

const BigText = ({ children, className = "" }: CardBigText) => (
  <p
    className={cn(
      className,
      "text-4xl font-semibold leading-[44px] tracking-[-2%]"
    )}
  >
    {children}
  </p>
);

const Icon = ({ children, className = "" }: CardIconProps) => (
  <div
    className={cn(
      className,
      "flex items-center justify-center w-12 h-12 rounded-lg text-gray-600"
    )}
  >
    {children}
  </div>
);

const Badge = ({ children, className = "" }: CardBaseProps) => (
  <div
    className={cn(
      className,
      "px-2 border font-medium text-sm leading-5 text-gray-950 border-gray-200 bg-white rounded-md flex items-center gap-1"
    )}
  >
    {children}
  </div>
);

export default { Root, Text, BigText, Title, Icon, Badge };

export const Card = {
  Root: Root,
  Text: Text,
  Icon: Icon,
  Badge: Badge,
  Title: Title,
  BigText: BigText,
};
