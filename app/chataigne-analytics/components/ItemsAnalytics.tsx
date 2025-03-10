"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  ShoppingBag,
  Package,
  Utensils,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const productsChartConfig = {
  value: {
    label: "Quantité",
    color: "hsl(142, 76%, 36%)",
  },
};

const categoriesChartConfig = {
  value: {
    label: "Produits",
    color: "hsl(142, 76%, 36%)",
  },
};

const trendsChartConfig = {
  "Big Mac": {
    label: "Big Mac",
    color: "hsl(142, 76%, 36%)",
  },
  McChicken: {
    label: "McChicken",
    color: "hsl(25, 95%, 53%)",
  },
  "Royal Deluxe": {
    label: "Royal Deluxe",
    color: "hsl(43, 96%, 56%)",
  },
};

const topProducts = [
  { name: "Big Mac", value: 245, revenue: 2205, color: "hsl(142, 76%, 36%)" },
  { name: "McChicken", value: 180, revenue: 1440, color: "hsl(25, 95%, 53%)" },
  {
    name: "Royal Deluxe",
    value: 156,
    revenue: 1404,
    color: "hsl(43, 96%, 56%)",
  },
  { name: "McNuggets", value: 134, revenue: 938, color: "hsl(0, 84%, 60%)" },
  { name: "McFlurry", value: 98, revenue: 490, color: "hsl(280, 67%, 69%)" },
];

const categoriesData = [
  { name: "Burgers", value: 580, color: "hsl(142, 76%, 36%)" },
  { name: "Boissons", value: 320, color: "hsl(25, 95%, 53%)" },
  { name: "Desserts", value: 180, color: "hsl(43, 96%, 56%)" },
  { name: "Sides", value: 150, color: "hsl(0, 84%, 60%)" },
];

const productTrendData = Array.from({ length: 30 }, (_, i) => ({
  date: `${i + 1}/03`,
  "Big Mac": Math.floor(Math.random() * 20) + 10,
  McChicken: Math.floor(Math.random() * 15) + 8,
  "Royal Deluxe": Math.floor(Math.random() * 12) + 5,
}));

export default function ItemsAnalytics() {
  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Produits vendus
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                8%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">1,245</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Produits par commande
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                3%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">2.8</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Ruptures de stock
              </span>
              <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                5%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">3</div>
              <div className="text-sm text-gray-500">Cette semaine</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Taux de personnalisation
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                12%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">45%</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top Products */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Produits les plus vendus</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer config={productsChartConfig} className="h-[300px]">
              <BarChart data={topProducts} layout="vertical">
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
            <div className="mt-6 space-y-3">
              {topProducts.map((product) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Utensils
                      className="h-4 w-4"
                      style={{ color: product.color }}
                    />
                    <span className="text-sm text-gray-600">
                      {product.name}
                    </span>
                  </div>
                  <div className="text-sm font-medium">
                    {product.value} vendus • {product.revenue} CHF
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Categories Distribution */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Répartition par catégorie</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer
              config={categoriesChartConfig}
              className="h-[300px]"
            >
              <PieChart>
                <Pie
                  data={categoriesData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                >
                  {categoriesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="mt-6 space-y-3">
              {categoriesData.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Package
                      className="h-4 w-4"
                      style={{ color: category.color }}
                    />
                    <span className="text-sm text-gray-600">
                      {category.name}
                    </span>
                  </div>
                  <div className="text-sm font-medium">
                    {category.value} produits
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Product Trends */}
        <Card className="bg-white col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Tendances des produits</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer config={trendsChartConfig} className="h-[300px]">
              <LineChart data={productTrendData}>
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
                  dataKey="Big Mac"
                  stroke="var(--color-Big\\ Mac)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="McChicken"
                  stroke="var(--color-McChicken)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Royal Deluxe"
                  stroke="var(--color-Royal\\ Deluxe)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
