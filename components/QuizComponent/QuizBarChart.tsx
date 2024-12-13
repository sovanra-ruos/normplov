import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


type BarProps = {
  dataKey: string;
  fill: string;
  activeBar?: boolean;
}

type ChartData = {
  name: string;
  [key: string]: number | string; // Allow for dynamic data keys
}

type CustomBarChartProps = {
  data: ChartData[];
  bars: BarProps[];
  width?: number;
  height?: number;
}

const CustomBarChart = ({ data, bars, width, height } : CustomBarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={width || 500}
        height={height || 300}
        data={data}
        
      
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        
        <Legend />
        <Tooltip />
        {bars.map((bar : BarProps, index : number) => (
          <Bar
            key={index}
            dataKey={bar.dataKey}
            fill={bar.fill}
            activeBar={bar.activeBar || undefined}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
