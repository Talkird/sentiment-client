import { PieChart, Pie, Cell, Tooltip } from 'recharts'

interface SentimentPieChartProps {
  data: { name: string; value: number }[]
}

const COLORS = ['#B2F8AC', '#EF8B8B', '#F3D573']

function SentimentPieChart(props: SentimentPieChartProps) {
  return (
    <div className="flex flex-col gap-2 bg-white p-5 rounded-xl ">
      <h1 className="text-indigo-950 text-xl mb-5 font-semibold">Sentiment Distribution</h1>
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
        <Tooltip />
      </PieChart>
      <div className="flex flex-col p-2 text-indigo-950">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-3 h-3 bg-[#B2F8AC] border border-black/50"></div>
          <p>Positive</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-3 h-3 bg-[#EF8B8B] border border-black/50"></div>
          <p>Negative</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="w-3 h-3 bg-[#F3D573] border border-black/50"></div>
          <p>Neutral</p>
        </div>
      </div>
    </div>
  )
}

export default SentimentPieChart
