import { useEffect, useState } from "react";

import { cn } from "@lib/tw-merge";

import { HeaderIconProps, HeaderProps } from "./types";

const Root = ({ children, className = "" }: HeaderProps) => {
  const [hasScroll, setHasScroll] = useState(false);

  const handleScroll = () => {
    setHasScroll(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        className,
        "w-full py-2 md:py-5 bg-white border-b border-gray-100",
        hasScroll && "sticky top-0 shadow"
      )}
    >
      {children}
    </header>
  );
};

const Container = ({ children, className = "" }: HeaderProps) => (
  <div
    className={cn(
      className,
      "container mx-auto flex items-center justify-between px-2 sm:px-0"
    )}
  >
    {children}
  </div>
);

const Icon = ({ icon: IconElement, className = "" }: HeaderIconProps) => (
  <IconElement
    className={cn(className, "w-6 h-6 text-gray-600")}
    data-testid="@header-icon"
  />
);

export default { Root, Icon, Container };

export const Header = {
  Root: Root,
  Icon: Icon,
  Container: Container,
};
