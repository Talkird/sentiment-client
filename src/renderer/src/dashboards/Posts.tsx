import { useParams } from 'react-router-dom'

function Posts() {
  const { search } = useParams<{ search: string }>()
  return (
    <div className="h-screen">
      <h1 className="text-4xl text-center"></h1>
    </div>
  )
}

export default Posts
