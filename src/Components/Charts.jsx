import React, { Component, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import {
      LineChart,
      Line,
      CartesianGrid,
      XAxis,
      YAxis,
      Tooltip,
      BarChart,
      Bar,
      Legend,
      ScatterChart,
      Scatter,
      ZAxis,
      PieChart,
      Pie,
      Cell,
} from 'recharts';


// this is the api key and hash from the marvel developer portal
const API_KEY = import.meta.env.VITE_API_KEY;
const HASH = import.meta.env.VITE_HASH;

const charts = () => {
      const [data, setData] = useState(null);
      // make 20 colors with palettes of gray, white, red, black
      const COLORS = ['#808080', '#FFFFFF', '#FF0000', '#000000', '#C0C0C0', '#808080', '#FFFFFF', '#FF0000', '#000000', '#C0C0C0', '#808080', '#FFFFFF', '#FF0000', '#000000', '#C0C0C0', '#808080', '#FFFFFF', '#FF0000', '#000000', '#C0C0C0']
      

      useEffect(() => {
            const fetchData = async () => {
                  const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&apikey=${API_KEY}&ts=1&hash=${HASH}`)
                  setData(response.data)
            }
            fetchData().catch(console.error)
      }, [])

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * RADIAN);

}


      return (
            <div>
                  <h1>Chart 1: Comics</h1>
                  <p className='chartDivSummary'> 
                        This chart shows some of the characters in the Marvel universe and the number of comics they have appeared in.
                  </p>
                  {data ? (
                        <div className='chartDiv'>
                              <LineChart width={1000} height={500} data={data.data.results} 
                              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                    <Line type="monotone" dataKey="comics.available" stroke="white" />
                                    <CartesianGrid stroke="#ccc" strokeDasharray={"5 5"} />
                                    <XAxis dataKey="name" axisLine={{ stroke: 'white' }} tickLine={{ stroke: 'white'}}
                                    label={{ value: 'Character Name', position: 'insideBottom', offset: -5, fill: 'white' , fontWeight: 'bold'}} tick={{ fill: 'white' , }} />
                                    <YAxis axisLine={{ stroke: 'white' }} tickLine={{ stroke: 'white' }} label={{ value: 'Number of Comics', angle: -90, position: 'insideLeft', fill: 'white', fontWeight: 'bold'}}
                                    tick={{ fill: 'white' }} />
                                   <Tooltip formatter=
                                    {(value, name, props) => [value, 'Comics']}
                                    labelFormatter={(label) => ['Name: ' + label]}
                                    labelStyle={{ color: 'white' }}
                                    itemStyle={{ color: 'white' }}
                                    contentStyle={{ backgroundColor: 'black' }}
                                    cursor={{ stroke: 'white', strokeWidth: 1 }}
                                    />
                              </LineChart>
                        </div>
                        
                        ) : null}

                  <h1>Chart 2: Series</h1>
                  <h3 className='chartDivSummary'>
                        This chart shows the number of series that each character has appeared in.
                  </h3>
                  {data ? (
                        <div className='chartDiv'>
                              <BarChart
                              width={1000}
                              height={500}
                              data={data.data.results}
                              margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5
                              }}
                              >
                              <CartesianGrid strokeDasharray="5 5" stroke="#ccc" />
                              <XAxis dataKey="name" axisLine={{ stroke: 'white' }} tickLine={{ stroke: 'white'}} label={{ value: 'Character Name', position: 'insideBottom', offset: -5, fill: 'white' , fontWeight: 'bold'}} tick={{ fill: 'white' }}
                              />
                              <YAxis axisLine={{ stroke: 'white' }} tickLine={{ stroke: 'white' }} label={{ value: 'Number of Series', angle: -90, position: 'insideLeft', fill: 'white', fontWeight: 'bold'}}
                              tick={{ fill: 'white' }} />
                              <Tooltip 
                              formatter={(value, name, props) => [value, 'Series']}
                              labelFormatter={(label) => ['Name: ' + label]}
                              labelStyle={{ color: 'black' }}
                              itemStyle={{ color: 'black' }}
                              cursor={{ stroke: 'black', strokeWidth: 1 }}
                              />
                              <Bar dataKey="series.available" fill="black" />
                              </BarChart>
                        </div>
                  ) : null}

                  <h1>Chart 3: Events</h1>
                  <h3 className='chartDivSummary'>
                        This chart shows the number of events that each character has appeared in.
                  </h3>
                  {data ? (
                        <div className='chartDiv'>
                              <ScatterChart
                              width={1000}
                              height={500}
                              margin={{
                              top: 20,
                              right: 20,
                              bottom: 20,
                              left: 20
                              }}
                              >
                              <CartesianGrid strokeDasharray="5 5" />
                              <XAxis dataKey="name" type="category" name="Name" axisLine={{ stroke: 'white' }} tickLine={{ stroke: 'white'}} label={{ value: 'Character Name', position: 'insideBottom', offset: -5, fill: 'white' , fontWeight: 'bold'}} tick={{ fill: 'white' }} />
                              <YAxis type="number" dataKey="events.available" name="Events" axisLine={{ stroke: 'white' }} tickLine={{ stroke: 'white' }} label={{ value: 'Number of Events', angle: -90, position: 'insideLeft', fill: 'white', fontWeight: 'bold'}}
                              tick={{ fill: 'white' }} />
                              <Tooltip
                              formatter={(value, name, props) => [`${value}`,`${name}`, ]}
                              labelStyle={{ color: 'white' }}
                              itemStyle={{ color: 'white' }}
                              contentStyle={{ backgroundColor: 'black' }}
                              cursor={{ stroke: 'white', strokeWidth: 1 }}
                              />
                              <Scatter data={data.data.results} fill="white"   
                              line
                              shape="star"
                              />
                              </ScatterChart>
                        </div>
                  ) : null}


                  <h1>Chart 4: Stories</h1>
                  <h3 className='chartDivSummary'>
                        This chart shows the number of stories that each character has appeared in.
                  </h3>
                  {data ? (
                        <div className='chartDiv'>
                              <PieChart width={1000} height={500}>
                              <Pie
                                    data={data.data.results}
                                    cx={500}
                                    cy={230}
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={200}
                                    fill="#8884d8"
                                    dataKey="stories.available"       
                              >
                                    {data.data.results.map((entry, index) => (
                                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                              </Pie>
                              <Tooltip
                                  formatter={(value, name, props) => [`Stories: ${value}`, `Name: ${name}`]}
                              labelStyle={{ color: 'black' }}
                              itemStyle={{ color: 'black' }}
                              cursor={{ stroke: 'black', strokeWidth: 1 }}
                              />
                              </PieChart>
                        </div>
                  ) : null}
            </div>
      )

}

export default charts;