import CommentNumberCard from './CommentNumberCard'

interface CommentOverviewProps {
  total: number
  positive: number
  negative: number
}

function CommentOverview(props: CommentOverviewProps) {
  return (
    <div className="flex flex-row items-center gap-10">
      <CommentNumberCard title="Total" number={props.total} />
      <CommentNumberCard title="Positive" number={props.positive} />
      <CommentNumberCard title="Negative" number={props.negative} />
    </div>
  )
}

export default CommentOverview
