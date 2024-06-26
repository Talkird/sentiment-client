import { useParams } from 'react-router-dom'
import KeywordCloud from '@renderer/components/plots/keywordcloud/KeywordCloud'
import SentimentOverTime from '@renderer/components/plots/overtime/SentimentOverTime'
import CommentOverview from '@renderer/components/plots/overview/CommentOverview'
import { useEffect, useState } from 'react'
import apple from '../../../../apple.json'

function Comments() {
  const { search } = useParams<{ search: string }>()
  const [data, setData] = useState<{ total: number; positive: number; negative: number }>({
    total: 0,
    positive: 0,
    negative: 0
  })

  useEffect(() => {
    let positiveCount = 0
    let negativeCount = 0

    apple.forEach((comment) => {
      if (comment.assessment === 'Positive') {
        positiveCount++
      } else if (comment.assessment === 'Negative') {
        negativeCount++
      }
    })

    setData({
      total: apple.length,
      positive: positiveCount,
      negative: negativeCount
    })
  }, [])

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5">
        <SentimentOverTime />
        <KeywordCloud />
      </div>
      <CommentOverview total={data.total} positive={data.positive} negative={data.negative} />
    </div>
  )
}

export default Comments
