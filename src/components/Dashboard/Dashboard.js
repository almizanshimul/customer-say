import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [car, setCar] = useState([])
    useEffect(() => {
        fetch('chart-data.json')
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])
    return (
        <div className='dashboard-container'>
            <h2>Dashboard Chart</h2>
            <div className="row">
                <div className="col">
                    <LineChart width={550} height={400} data={car}>
                        <Line type="monotone" dataKey="investment" stroke="#3B5C20" />
                        <Line type="monotone" dataKey="sell" stroke="#1B73E7" />
                        <Line type="monotone" dataKey="revenue" stroke="#26A69A" />
                        <XAxis dataKey="month"></XAxis>
                        <YAxis></YAxis>
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>
                <div className="col" >
                    <BarChart width={550} height={400} data={car}>
                        <Bar dataKey="investment" fill="#3B5C20" />
                        <Bar dataKey="sell" fill="#1B73E7" />
                        <Bar dataKey="revenue" fill="#26A69A" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </BarChart>
                </div>
            </div>
            <div className="row">
                <div className="col" >
                    <AreaChart width={550} height={400} data={car}>
                        <Area type="monotone" dataKey="investment" fill="#3B5C20" />
                        <Area type="monotone" dataKey="sell" fill="#1B73E7" />
                        <Area type="monotone" dataKey="revenue" fill="#26A69A" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </AreaChart>
                </div>
                <div className="col" >
                    <AreaChart width={550} height={400} data={car}>
                        <Area type="monotone" dataKey="investment" fill="#3B5C20" />
                        <Area type="monotone" dataKey="sell" fill="#1B73E7" />
                        <Area type="monotone" dataKey="revenue" fill="#26A69A" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </AreaChart>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;