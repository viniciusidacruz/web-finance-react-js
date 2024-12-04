import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Menu, Settings } from "lucide-react";

import {
  Sheet,
  Avatar,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent,
  AvatarFallback,
} from "@components/external";
import { Header, Logo, Navigation } from "@components/internal";

export const LayoutDashboard = () => (
  <Fragment>
    <Header.Root>
      <Header.Container>
        <Logo />

        <Navigation.Root className="hidden sm:flex sm:gap-1">
          <Navigation.Item path="/">Visão geral</Navigation.Item>
          <Navigation.Item path="/pedidos">Pedidos</Navigation.Item>
          <Navigation.Item path="/produtos">Produtos</Navigation.Item>
        </Navigation.Root>

        <div className="flex items-center gap-2">
          <Header.Icon icon={Settings} className="cursor-pointer" />

          <Avatar>
            <AvatarFallback>V</AvatarFallback>
          </Avatar>

          <Sheet>
            <SheetTrigger className="block sm:hidden">
              <Header.Icon icon={Menu} className="ml-8" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu principal</SheetTitle>

                <Navigation.Root className="flex flex-col gap-2">
                  <Navigation.Item path="/">Visão geral</Navigation.Item>
                  <Navigation.Item path="/pedidos">Pedidos</Navigation.Item>
                  <Navigation.Item path="/produtos">Produtos</Navigation.Item>
                </Navigation.Root>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </Header.Container>
    </Header.Root>

    <main className="container mx-auto px-2 sm:px-0 mt-12">
      <Outlet />
    </main>
  </Fragment>
);
