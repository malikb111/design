"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Users,
  UserPlus,
  Repeat,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Line,
  LineChart,
  CartesianGrid,
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

const satisfactionChartConfig = {
  value: {
    label: "Avis",
    color: "hsl(142, 76%, 36%)",
  },
};

const retentionChartConfig = {
  "Nouveaux clients": {
    label: "Nouveaux clients",
    color: "hsl(142, 76%, 36%)",
  },
  "Clients fidèles": {
    label: "Clients fidèles",
    color: "hsl(25, 95%, 53%)",
  },
};

const satisfactionData = [
  { name: "5 étoiles", value: 450, color: "hsl(142, 76%, 36%)" },
  { name: "4 étoiles", value: 200, color: "hsl(25, 95%, 53%)" },
  { name: "3 étoiles", value: 50, color: "hsl(43, 96%, 56%)" },
  { name: "2 étoiles", value: 15, color: "hsl(0, 84%, 60%)" },
  { name: "1 étoile", value: 5, color: "hsl(280, 67%, 69%)" },
];

const retentionData = Array.from({ length: 30 }, (_, i) => ({
  date: `${i + 1}/03`,
  "Nouveaux clients": Math.floor(Math.random() * 20) + 10,
  "Clients fidèles": Math.floor(Math.random() * 30) + 20,
}));

export default function CustomersAnalytics() {
  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-4 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Clients actifs
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
                Nouveaux clients
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                12%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">324</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Taux de fidélité
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                5%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">68%</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Satisfaction client
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                2%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">4.8/5</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Customer Satisfaction */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Répartition des avis clients</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer
              config={satisfactionChartConfig}
              className="h-[300px]"
            >
              <PieChart>
                <Pie
                  data={satisfactionData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                >
                  {satisfactionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="mt-6 space-y-3">
              {satisfactionData.map((rating) => (
                <div
                  key={rating.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" style={{ color: rating.color }} />
                    <span className="text-sm text-gray-600">{rating.name}</span>
                  </div>
                  <div className="text-sm font-medium">{rating.value} avis</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Retention */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Nouveaux vs. Clients fidèles</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer config={retentionChartConfig} className="h-[300px]">
              <LineChart data={retentionData}>
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
                  dataKey="Nouveaux clients"
                  stroke="var(--color-Nouveaux\\ clients)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Clients fidèles"
                  stroke="var(--color-Clients\\ fidèles)"
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
