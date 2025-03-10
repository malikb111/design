"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Wallet,
  TrendingUp,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartConfig = {
  revenue: {
    label: "Revenu",
    color: "hsl(var(--chart-1))",
  },
  target: {
    label: "Objectif",
    color: "hsl(var(--chart-2))",
  },
};

const paymentChartConfig = {
  value: {
    label: "Montant",
    color: "hsl(var(--chart-1))",
  },
};

const hourlyChartConfig = {
  value: {
    label: "Revenu",
    color: "hsl(var(--chart-3))",
  },
};

const revenueData = Array.from({ length: 30 }, (_, i) => ({
  date: `${i + 1}/03`,
  revenue: Math.floor(Math.random() * 2000) + 500,
  target: 1500,
}));

const paymentMethodsData = [
  { name: "Carte bancaire", value: 15420, color: "hsl(var(--chart-1))" },
  { name: "Espèces", value: 5230, color: "hsl(var(--chart-2))" },
  { name: "Tickets restaurant", value: 3890, color: "hsl(var(--chart-3))" },
  { name: "Apple Pay", value: 2368, color: "hsl(var(--chart-4))" },
];

const hourlyRevenueData = Array.from({ length: 24 }, (_, i) => ({
  name: `${i}h`,
  value: Math.floor(Math.random() * 1000) + 200,
}));

export default function RevenueAnalytics() {
  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Revenu total
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                15%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">26,908 CHF</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Panier moyen
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                5%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">37.50 CHF</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Marge brute
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                3%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">72%</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Objectif mensuel
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                89%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">89%</div>
              <div className="text-sm text-gray-500">30,000 CHF</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card className="bg-white col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Évolution du revenu</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <LineChart data={revenueData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <YAxis tickLine={false} tickMargin={10} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-revenue)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="var(--color-target)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Moyens de paiement</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer config={paymentChartConfig} className="h-[300px]">
              <BarChart data={paymentMethodsData} layout="vertical">
                <CartesianGrid
                  horizontal={true}
                  vertical={false}
                  strokeDasharray="3 3"
                />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="value"
                  fill="var(--color-value)"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Revenue by Hour */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Revenu par heure</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer config={hourlyChartConfig} className="h-[300px]">
              <BarChart data={hourlyRevenueData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                />
                <YAxis tickLine={false} axisLine={false} tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="value"
                  fill="var(--color-value)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
