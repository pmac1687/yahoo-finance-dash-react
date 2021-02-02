import React from "react";
import Chart from "chart.js";
import {
  BarChart,ComposedChart, Line, Bar,Area, AreaChart, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function CardBarChart(props) {
  
  return (
    <div style={{ backgroundColor: 'white', zIndex: 0, marginTop: '0px'}}>
       <ComposedChart
        width={500}
        height={400}
        data={props.data1}
        style={{ backgroundColor: 'white'}}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="open" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="close" barSize={20} fill="#413ea0" />
        {/* <Scatter dataKey="cnt" fill="red" /> */}
      </ComposedChart>
    </div>
  );
}