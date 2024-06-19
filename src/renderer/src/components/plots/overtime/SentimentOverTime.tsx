import SentimentPercentChart from './SentimentPercentChart'
import SentimentPieChart from './SentimentPieChart'

function SentimentOverTime() {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h1 className="text-indigo-950 text-xl mb-5 font-semibold">Sentiment Over Time</h1>
      <div className="flex flex-row items-center">
        <SentimentPercentChart />
        <SentimentPieChart />
      </div>
    </div>
  )
}

export default SentimentOverTime
