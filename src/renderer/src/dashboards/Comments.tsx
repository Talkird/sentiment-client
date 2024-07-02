import { useParams } from 'react-router-dom'
import KeywordCloud from '@renderer/components/plots/keywordcloud/KeywordCloud'
import SentimentOverTime from '@renderer/components/plots/overtime/SentimentOverTime'
import CommentOverview from '@renderer/components/plots/overview/CommentOverview'
import { useEffect, useState } from 'react'

function Comments() {
  const { search } = useParams<{ search: string }>()
  const [data, setData] = useState<{ total: number; positive: number; negative: number }>({
    total: 0,
    positive: 0,
    negative: 0
  })

  useEffect(() => {
    let total = 0
    let positiveCount = 0
    let negativeCount = 0

    import(`@renderer/data/${search}.json`)
      .then((jsonData) => {
        jsonData.default.forEach((comment: { assessment: string }) => {
          total++
          if (comment.assessment === 'Positive') {
            positiveCount++
          } else if (comment.assessment === 'Negative') {
            negativeCount++
          }
        })

        setData({
          total: total,
          positive: positiveCount,
          negative: negativeCount
        })
      })
      .catch((error) => {
        console.error('Error loading JSON file:', error)
      })
  }, [search])

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
