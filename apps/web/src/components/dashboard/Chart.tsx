'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ revenue }: any) => {
  const data = [
    { name: 'Week', total: revenue?.filterByweek._sum.total },
    { name: 'Month', total: revenue?.filterByMonth._sum.total },
    { name: 'Year', total: revenue?.filterByYear._sum.total },
  ];
  return (
    <div className="h-[450px] bg-[#182237] p-[20px] rounded-[10px]">
      <h2 className="font-[200] text-[#b7bac1] mb-[20px] text-xl">
        Income summary
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={730}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: '#151c2c', border: 'none' }} />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
