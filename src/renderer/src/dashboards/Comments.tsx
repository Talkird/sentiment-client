import React from 'react'
import { useParams } from 'react-router-dom'

function Comments() {
  const { search } = useParams<{ search: string }>()
  return <div className="text-4xl">Comments</div>
}

export default Comments
