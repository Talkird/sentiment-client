import { PieChart, Pie, Cell } from 'recharts'

interface SentimentPieChartProps {
  data: { name: string; value: number }[]
}

const COLORS = ['#B2F8AC', '#EF8B8B', '#F3D573']

function SentimentPieChart(props: SentimentPieChartProps) {
  return (
    <div className="">
      <PieChart width={180} height={200}>
        <Pie
          data={props.data}
          cx={80}
          cy={100}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {props.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  )
}

export default SentimentPieChart
