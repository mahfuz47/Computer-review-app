import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis, Legend, CartesianGrid, Line, LineChart, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";



const Dashboard = () => {
    const [charts, setCharts] = useState([]);
    

    useEffect(()=>{
      axios.get("data.json")
      .then(data => {
        const loadedData = data.data
       const totalData =  loadedData.map(chart => {
         
          const cd = {
            month: chart.month,
            sell: parseInt(chart.sell),
            investment: parseInt(chart.investment),
            revenue: parseInt(chart.revenue)
          };
          return cd;
        })
        setCharts(totalData)
        
        
        
      })
     
    },[])

  
   
    
    
   

    return (
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 items-center justify-items-center my-8">
        <div className="border rounded-xl">
          <h1 className="py-2 text-center font-bold font-mono text-3xl">
            Bar Chart
          </h1>
          <BarChart width={730} height={450} data={charts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" fill="#82ca9d"></Bar>
            <Bar dataKey="revenue" fill="#10559A"></Bar>
            <Bar dataKey="investment" fill="#DB4C77"></Bar>
          </BarChart>
        </div>
        <div className="border rounded-xl">
          <h1 className="py-2 text-center font-bold font-mono text-3xl">
            Line Chart
          </h1>
          <LineChart
            width={730}
            height={450}
            data={charts}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#10559A" />
            <Line type="monotone" dataKey="investment" stroke="#DB4C77" />
          </LineChart>
        </div>
        <div className="border rounded-xl">
          <h1 className="py-2 text-center font-bold font-mono text-3xl">
            Area Chart
          </h1>
          <AreaChart
            width={730}
            height={450}
            data={charts}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={1} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10559A" stopOpacity={1} />
                <stop offset="95%" stopColor="#10559A" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DB4C77" stopOpacity={1} />
                <stop offset="95%" stopColor="#DB4C77" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#color1)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#10559A"
              fillOpacity={1}
              fill="url(#color2)"
            />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#DB4C77"
              fillOpacity={1}
              fill="url(#color3)"
            />
          </AreaChart>
        </div>
        <div className="border rounded-xl">
          <h1 className="py-2 text-center font-bold font-mono text-3xl">
            Total data pie Chart
          </h1>
          <RadarChart outerRadius={180} width={730} height={450} data={charts}>
            <PolarGrid />
            <PolarAngleAxis dataKey="month" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Tooltip />
            <Radar
              name="Sales"
              dataKey="sell"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.9}
            />
            <Radar
              name="Revenue"
              dataKey="revenue"
              stroke="#10559A"
              fill="#10559A"
              fillOpacity={0.9}
            />
            <Radar
              name="investment"
              dataKey="investment"
              stroke="#DB4C77"
              fill="#DB4C77"
              fillOpacity={0.3}
            />
            <Legend />
          </RadarChart>
        </div>
      </div>
    );
};

export default Dashboard;