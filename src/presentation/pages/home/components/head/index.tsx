import { Navigation } from "@components/internal";

export const Head = () => (
  <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4">
    <h1 className="font-semibold leading-[38px] text-3xl text-gray-950">
      Olá, Admin<strong className="text-primary">!</strong>
    </h1>

    <Navigation.Root>
      <Navigation.Tab param="Nesse mês">Nesse mês</Navigation.Tab>
      <Navigation.Tab param="Último mês">Último mês</Navigation.Tab>
      <Navigation.Tab param="Nesse ano">Nesse ano</Navigation.Tab>
    </Navigation.Root>
  </section>
);
