import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Deshboard = () => {
    const data = [
        {
          name: 'Jan',
          price: 4000,
          Sales: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          price: 3000,
          Sales: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          price: 2000,
          Sales: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          price: 2780,
          Sales: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          price: 1890,
          Sales: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          price: 2390,
          Sales: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          price: 3490,
          Sales: 4300,
          amt: 2100,
        },
      ];
    return (
        <div className='container'>
            <h3 className='text-center m-5'>Deshboard</h3>
            <LineChart width={800} height={500} data={data}>
                <Line dataKey={'price'}></Line>
                <Line dataKey={'Sales'}></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis dataKey={'amt'}></YAxis>
            </LineChart>
        </div>
        
    );
};

export default Deshboard;