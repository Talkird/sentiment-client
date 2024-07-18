import { useParams } from 'react-router-dom'

function Users() {
  const { search } = useParams<{ search: string }>()
  return (
    <div className="flex flex-col gap-5">
      <h1 className="h-screen items-center text-xl text-">Coming soon...</h1>
    </div>
  )
}

export default Users
