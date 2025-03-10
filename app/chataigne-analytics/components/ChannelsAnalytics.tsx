"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Filter, Bike, MessageSquare, ArrowUpRight } from "lucide-react";
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

const channelsChartConfig = {
  value: {
    label: "Commandes",
    color: "hsl(142, 76%, 36%)",
  },
};

const hourlyChartConfig = {
  "Uber Eats": {
    label: "Uber Eats",
    color: "hsl(142, 76%, 36%)",
  },
  WhatsApp: {
    label: "WhatsApp",
    color: "hsl(25, 95%, 53%)",
  },
  Deliveroo: {
    label: "Deliveroo",
    color: "hsl(43, 96%, 56%)",
  },
};

const channelData = [
  { name: "Uber Eats", value: 380, color: "hsl(142, 76%, 36%)" },
  { name: "WhatsApp", value: 190, color: "hsl(25, 95%, 53%)" },
  { name: "Deliveroo", value: 95, color: "hsl(43, 96%, 56%)" },
];

const hourlyData = Array.from({ length: 24 }, (_, i) => ({
  date: `${i}h`,
  "Uber Eats": Math.floor(Math.random() * 50),
  WhatsApp: Math.floor(Math.random() * 30),
  Deliveroo: Math.floor(Math.random() * 20),
}));

export default function ChannelsAnalytics() {
  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Total des commandes
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                12%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">716</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Temps de préparation moyen
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                5%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">18 min</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500">
                Taux d'annulation
              </span>
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs">
                <ArrowUpRight className="h-3 w-3" />
                2%
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-semibold">1.2%</div>
              <div className="text-sm text-gray-500">30 derniers jours</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Orders by Channel */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Répartition des commandes</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer config={channelsChartConfig} className="h-[300px]">
              <BarChart data={channelData} layout="vertical">
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
              {channelData.map((channel) => (
                <div
                  key={channel.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {channel.name === "Uber Eats" && (
                      <Bike
                        className="h-4 w-4"
                        style={{ color: channel.color }}
                      />
                    )}
                    {channel.name === "WhatsApp" && (
                      <MessageSquare
                        className="h-4 w-4"
                        style={{ color: channel.color }}
                      />
                    )}
                    {channel.name === "Deliveroo" && (
                      <Bike
                        className="h-4 w-4"
                        style={{ color: channel.color }}
                      />
                    )}
                    <span className="text-sm text-gray-600">
                      {channel.name}
                    </span>
                  </div>
                  <div className="text-sm font-medium">
                    {channel.value} commandes
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Orders by Hour and Channel */}
        <Card className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium">Commandes par heure et canal</h3>
              <Button variant="outline" size="sm" className="h-8">
                <Filter className="h-3.5 w-3.5 mr-2" />
                Filtrer
              </Button>
            </div>
            <ChartContainer config={hourlyChartConfig} className="h-[300px]">
              <LineChart data={hourlyData}>
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
                  dataKey="Uber Eats"
                  stroke="var(--color-Uber\\ Eats)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="WhatsApp"
                  stroke="var(--color-WhatsApp)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="Deliveroo"
                  stroke="var(--color-Deliveroo)"
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
