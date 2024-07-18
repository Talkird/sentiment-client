import SentimentPercentChart from './SentimentPercentChart'

interface SentimentOverTimeProps {
  pieData: { name: string; value: number }[]
}

function SentimentOverTime(props: SentimentOverTimeProps) {
  return (
    <div className="bg-white p-5 rounded-xl">
      <h1 className="text-indigo-950 text-xl mb-5 font-semibold">
        Sentiment Over Time (Coming soon)
      </h1>
      <div className="flex flex-col items-center">
        <SentimentPercentChart />
        <div className="flex flex-row gap-8 p-2 text-indigo-950">
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
    </div>
  )
}

export default SentimentOverTime
