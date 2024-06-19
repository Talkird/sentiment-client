import Navbar from '@renderer/components/navbar/Navbar'
import CommentOverview from '@renderer/components/plots/overview/CommentOverview'
import KeywordCloud from '@renderer/components/plots/keywordcloud/KeywordCloud'
import SentimentOverTime from '@renderer/components/plots/overtime/SentimentOverTime'

function Dashboard(): JSX.Element {
  return (
    <div className="flex h-screen bg-graybg">
      <Navbar />
      <div className="flex-col gap-9 bg-gray m-7 rounded-lg p-5 flex justify-center items-center">
        <SentimentOverTime />
        <div className="flex flex-row gap-10">
          <KeywordCloud />
          <CommentOverview total={100} positive={67} negative={33} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
