interface CommentNumberCardProps {
  title: string
  number: number
}

function CommentNumberCard(props: CommentNumberCardProps) {
  return (
    <div className="py-5 px-10 flex flex-col bg-white items-center justify-center shadow rounded-xl">
      <h1 className="font-medium text-black">{props.title}</h1>
      <p className="font-medium text-black text-4xl"> {props.number} </p>
    </div>
  )
}

export default CommentNumberCard
