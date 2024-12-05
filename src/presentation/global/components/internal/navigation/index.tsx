import { Link, useLocation, useSearchParams } from "react-router-dom";

import { cn } from "@lib/tw-merge";

import {
  NavigationItemProps,
  NavigationProps,
  NavigationTabProps,
} from "./types";
import { toUrlFriendly } from "@/helpers/utils";

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

const Tab = ({ children, param, className = "" }: NavigationTabProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const formattedParam = toUrlFriendly(param);

  const isActive = searchParams.get("currentTab") === formattedParam;

  const handleClick = () =>
    setSearchParams({ ...searchParams, currentTab: formattedParam });

  return (
    <button
      className={cn(
        className,
        isActive ? "text-primary bg-primary bg-green-50" : "text-gray-600",
        "font-semibold text-base leading-6 py-2 px-3 hover:text-primary"
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default { Root, Item, Tab };

export const Navigation = {
  Tab: Tab,
  Root: Root,
  Item: Item,
};
