import { Bar, BarChart, XAxis } from "recharts";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

import {
  Skeleton,
  ChartConfig,
  ChartTooltip,
  ChartContainer,
  ChartTooltipContent,
} from "@components/external";

export const Analytics = () => {
  const chartData = [
    { month: "Janeiro", value: 186, customers: 80 },
    { month: "Fevereiro", value: 305, customers: 200 },
    { month: "Março", value: 237, customers: 120 },
    { month: "Abril", value: 73, customers: 190 },
    { month: "Maio", value: 209, customers: 130 },
    { month: "Junho", value: 214, customers: 140 },
    { month: "Julho", value: 214, customers: 140 },
    { month: "Agosto", value: 214, customers: 140 },
    { month: "Setembro", value: 214, customers: 140 },
    { month: "Outubro", value: 214, customers: 140 },
    { month: "Novembro", value: 214, customers: 140 },
    { month: "Dezembro", value: 214, customers: 140 },
  ];

  const chartConfig = {
    value: {
      label: "Valor",
      color: "#14532d",
    },
    customers: {
      label: "Clientes",
      color: "#4ade80",
    },
  } satisfies ChartConfig;

  const isLoading = false;

  if (isLoading) {
    return (
      <Skeleton className="bg-gray-300 rounded-xl max-w-[32%] min-h-96 w-full mt-4 sm:mt-8 shadow" />
    );
  }

  return (
    <aside className="bg-white p-5 rounded-xl shadow border border-gray-100 sm:max-w-[32%] w-full mt-4 sm:mt-8">
      <h3 className="font-semibold text-base leading-6 text-gray-900 flex items-center gap-2">
        Estatísticas <ChartNoAxesColumnIncreasing className="text-gray-900" />
      </h3>

      <ChartContainer
        config={chartConfig}
        className="min-h-[200px] w-full my-10"
      >
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="value" fill="var(--color-value)" radius={4} />
          <Bar dataKey="customers" fill="var(--color-customers)" radius={4} />
        </BarChart>
      </ChartContainer>

      <ul className="space-y-4">
        <li className="flex items-center justify-between bg-[#14532d]/10 p-2">
          <div className="w-5 h-5 rounded-full bg-[#14532d]" />

          <span className="font-medium text-sm">Valor</span>
        </li>

        <li className="flex items-center justify-between bg-[#4ade80]/10 p-2">
          <div className="w-5 h-5 rounded-full bg-[#4ade80]" />

          <span className="font-medium text-sm">Clientes</span>
        </li>
      </ul>
    </aside>
  );
};
