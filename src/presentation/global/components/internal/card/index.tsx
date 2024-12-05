import { cn } from "@lib/tw-merge";
import { CardProps } from "./types";

const Root = ({ children, className = "", onClick }: CardProps) => (
  <div
    onClick={onClick}
    className={cn(
      className,
      "rounded-xl bg-white border border-gray-100 p-6 shadow w-full"
    )}
  >
    {children}
  </div>
);

const Text = ({ children, className = "" }: CardProps) => (
  <h3 className={cn(className, "text-sm font-medium text-gray-600 leading-5")}>
    {children}
  </h3>
);

const Title = ({ children, className = "" }: CardProps) => (
  <h3
    className={cn(className, "text-base font-semibold text-gray-900 leading-6")}
  >
    {children}
  </h3>
);

const BigText = ({ children, className = "" }: CardProps) => (
  <p
    className={cn(
      className,
      "text-4xl font-semibold leading-[44px] tracking-[-2%]"
    )}
  >
    {children}
  </p>
);

const Icon = ({ children, className = "" }: CardProps) => (
  <div
    className={cn(
      className,
      "flex items-center justify-center w-12 h-12 rounded-lg text-gray-600"
    )}
  >
    {children}
  </div>
);

export default { Root, Text, BigText, Title, Icon };

export const Card = {
  Root: Root,
  Text: Text,
  Icon: Icon,
  Title: Title,
  BigText: BigText,
};
