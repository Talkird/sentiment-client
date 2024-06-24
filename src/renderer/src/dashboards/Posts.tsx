import React from 'react'
import { useParams } from 'react-router-dom'

function Posts() {
  const { search } = useParams<{ search: string }>()
  return <div className="text-4xl"></div>
}

export default Posts
