import SentimentPercentChart from './SentimentPercentChart'
import SentimentPieChart from './SentimentPieChart'

interface SentimentOverTimeProps {
  pieData: { name: string; value: number }[]
}

function SentimentOverTime(props: SentimentOverTimeProps) {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h1 className="text-indigo-950 text-xl mb-5 font-semibold">Sentiment Over Time</h1>
      <div className="flex flex-row items-center">
        <SentimentPercentChart />
        <SentimentPieChart data={props.pieData} />
      </div>
    </div>
  )
}

export default SentimentOverTime
