import { Link, useLocation } from "react-router-dom";

import { cn } from "@lib/tw-merge";

import { NavigationItemProps, NavigationProps } from "./types";

const Root = ({ children, className = "" }: NavigationProps) => (
  <nav className={cn(className)}>{children}</nav>
);

const Item = ({ children, className, path }: NavigationItemProps) => {
  const { pathname } = useLocation();
  const isActive = path === pathname;

  return (
    <Link
      to={path}
      className={cn(
        className,
        isActive ? "text-primary bg-primary bg-green-50" : "text-gray-600",
        "font-semibold text-base leading-6 py-2 px-3 hover:text-primary"
      )}
    >
      {children}
    </Link>
  );
};

export default { Root, Item };

export const Navigation = {
  Root: Root,
  Item: Item,
};
