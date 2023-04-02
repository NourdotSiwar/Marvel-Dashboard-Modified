import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import {
      LineChart,
      Line,
      CartesianGrid,
      XAxis,
      YAxis,
      Tooltip,
} from 'recharts';
import { Scatter } from 'react-chartjs-2';

// this is the api key and hash from the marvel developer portal
const API_KEY = import.meta.env.VITE_API_KEY;
const HASH = import.meta.env.VITE_HASH;

const charts = () => {
      const [data, setData] = useState(null);

      useEffect(() => {
            const fetchData = async () => {
                  const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?&apikey=${API_KEY}&ts=1&hash=${HASH}`)
                  setData(response.data)

            }
            fetchData().catch(console.error)
      }, [])

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
                                    labelFormatter={(label) => ['Character Name: ' + label]}
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
                        </div>
                  ) : null}

            </div>
      )

}

export default charts;