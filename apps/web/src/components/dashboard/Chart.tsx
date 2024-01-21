"use client"
import React from 'react'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const Chart = ({range ,data}: any) => {
  return (
    <div className='h-[450px] bg-[#182237] p-[20px] rounded-[10px]'>
      <h2 className='font-[200] text-[#b7bac1] mb-[20px] text-xl'>{range} Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top:5,
            right: 30,
            left: 20,
            bottom: 5
          }}
          >
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
            <Legend/>
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="sales" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart