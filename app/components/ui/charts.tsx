"use client";

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from "recharts";

interface ChartProps {
  data: any[];
}

export function SimpleBarChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <Bar dataKey="value" fill="#25D366" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function VerticalBarChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} layout="vertical">
        <Bar dataKey="value" fill="#25D366" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function SimpleLineChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#25D366"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function MultiLineChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        {Object.keys(data[0])
          .filter((key) => key !== "date")
          .map((key, index, arr) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={
                key === "target"
                  ? "#9CA3AF"
                  : index === 0
                  ? "#25D366"
                  : index === 1
                  ? "#3b82f6"
                  : "#f97316"
              }
              strokeWidth={2}
              strokeDasharray={key === "target" ? "5 5" : "0"}
              dot={false}
            />
          ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function DonutChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          fill="#25D366"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
