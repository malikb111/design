"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Filter, Bike, MessageSquare } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// Mock data
const dailyOrdersData = [
  { date: "01/03", orders: 25 },
  { date: "02/03", orders: 32 },
  { date: "03/03", orders: 28 },
  { date: "04/03", orders: 35 },
  { date: "05/03", orders: 40 },
  { date: "06/03", orders: 38 },
  { date: "07/03", orders: 42 },
  { date: "08/03", orders: 45 },
  { date: "09/03", orders: 48 },
  { date: "10/03", orders: 50 },
];

const channelData = [
  { name: "Uber Eats", value: 380, color: "#3b82f6" },
  { name: "WhatsApp", value: 190, color: "#25D366" },
  { name: "Deliveroo", value: 95, color: "#f97316" },
];

export default function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Daily Orders Trend */}
      <Card className="bg-white col-span-2">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-medium">Tendance des commandes</h3>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="h-3.5 w-3.5 mr-2" />
              Filtrer
            </Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyOrdersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#25D366"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Orders by Channel */}
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-medium">Commandes par canal</h3>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="h-3.5 w-3.5 mr-2" />
              Filtrer
            </Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={channelData} layout="vertical">
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f1f1f1"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis type="number" stroke="#9CA3AF" />
                <YAxis dataKey="name" type="category" stroke="#9CA3AF" />
                <Tooltip />
                <Bar dataKey="value" fill="#25D366" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 space-y-3">
            {channelData.map((channel) => (
              <div
                key={channel.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  {channel.name === "Uber Eats" && (
                    <Bike className="h-4 w-4 text-blue-500" />
                  )}
                  {channel.name === "WhatsApp" && (
                    <MessageSquare className="h-4 w-4 text-[#25D366]" />
                  )}
                  {channel.name === "Deliveroo" && (
                    <Bike className="h-4 w-4 text-orange-500" />
                  )}
                  <span className="text-sm text-gray-600">{channel.name}</span>
                </div>
                <div className="text-sm font-medium">
                  {channel.value} commandes
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Hours */}
      <Card className="bg-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-medium">Heures populaires</h3>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="h-3.5 w-3.5 mr-2" />
              Filtrer
            </Button>
          </div>
          <div className="h-[300px]">
            {/* Add a heatmap or bar chart here for popular hours */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
