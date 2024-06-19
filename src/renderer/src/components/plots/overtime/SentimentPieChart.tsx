import { PureComponent } from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const data = [
  { name: 'Positive', value: 400 },
  { name: 'Negative', value: 50 },
  { name: 'Neutro', value: 300 }
]

const COLORS = ['#B2F8AC', '#EF8B8B', '#F3D573']

export default class SentimentPieChart extends PureComponent {
  render() {
    return (
      <div className="">
        <PieChart width={180} height={200}>
          <Pie
            data={data}
            cx={80}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    )
  }
}
