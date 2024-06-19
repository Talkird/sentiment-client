import { PureComponent } from 'react'
import { AreaChart, Area, YAxis } from 'recharts'

const data = [
  {
    month: '2015.01',
    a: 4000,
    b: 2400,
    c: 2400
  },
  {
    month: '2015.02',
    a: 3000,
    b: 1398,
    c: 2210
  },
  {
    month: '2015.03',
    a: 2000,
    b: 9800,
    c: 2290
  },
  {
    month: '2015.04',
    a: 2780,
    b: 3908,
    c: 2000
  },
  {
    month: '2015.05',
    a: 1890,
    b: 4800,
    c: 2181
  },
  {
    month: '2015.06',
    a: 2390,
    b: 3800,
    c: 2500
  },
  {
    month: '2015.07',
    a: 3490,
    b: 4300,
    c: 2100
  }
]

export default class SentimentPercentChart extends PureComponent {
  render() {
    return (
      <AreaChart
        width={400}
        height={200}
        data={data}
        stackOffset="expand"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <YAxis />
        <Area type="monotone" dataKey="a" stackId="1" stroke="#EF8B8B" fill="#EF8B8B" />
        <Area type="monotone" dataKey="b" stackId="1" stroke="#F3D573" fill="#F3D573" />
        <Area type="monotone" dataKey="c" stackId="1" stroke="#B2F8AC" fill="#B2F8AC" />
      </AreaChart>
    )
  }
}
