import { Fragment } from "react";
import { ArrowDown, ArrowUp, Box, PlusCircle, User } from "lucide-react";

import { Card } from "@components/internal";

export const Summary = () => {
  return (
    <Fragment>
      <section className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-8">
        <Card.Root>
          <Card.Text>Total do Mês</Card.Text>
          <div className="flex justify-between items-end mt-2">
            <Card.BigText className="text-primary">R$ 123.456,78</Card.BigText>

            <Card.Badge>
              <ArrowUp className="text-primary" size={12} />

              <span>12,5%</span>
            </Card.Badge>
          </div>
        </Card.Root>

        <Card.Root>
          <Card.Text>Total de Clientes</Card.Text>

          <div className="flex justify-between items-end  mt-2">
            <Card.BigText>12</Card.BigText>

            <Card.Badge>
              <ArrowDown className="text-destructive" size={12} />

              <span>12,5%</span>
            </Card.Badge>
          </div>
        </Card.Root>

        <Card.Root>
          <Card.Text>Total de Produtos</Card.Text>
          <Card.BigText className="mt-2">12</Card.BigText>
        </Card.Root>
      </section>

      <section className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-8">
        <Card.Root className="flex gap-3 items-center cursor-pointer">
          <Card.Icon className="bg-green-100">
            <Box className="text-primary" />
          </Card.Icon>

          <div>
            <Card.Title>Adicionar Cliente</Card.Title>
            <Card.Text>Criar uma nova caixa com produtos</Card.Text>
          </div>
        </Card.Root>

        <Card.Root className="flex gap-3 items-center cursor-pointer">
          <Card.Icon className="bg-blue-100">
            <PlusCircle className="text-blue-900" />
          </Card.Icon>

          <div>
            <Card.Title>Adicionar Produto</Card.Title>
            <Card.Text>Criar um novo produto para estoque</Card.Text>
          </div>
        </Card.Root>

        <Card.Root className="flex gap-3 items-center cursor-pointer">
          <Card.Icon className="bg-gray-100">
            <User />
          </Card.Icon>

          <div>
            <Card.Title>Perfil</Card.Title>
            <Card.Text>Configurações e dados de acesso.</Card.Text>
          </div>
        </Card.Root>
      </section>
    </Fragment>
  );
};
