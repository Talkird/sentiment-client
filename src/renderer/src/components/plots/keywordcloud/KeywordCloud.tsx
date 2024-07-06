import { TagCloud } from 'react-tagcloud'

interface KeywordCloudProps {
  data: { name: string; value: number }[]
}

function KeywordCloud({ data }: KeywordCloudProps) {
  return (
    <div className="flex flex-col gap-2 bg-white p-5 justify-start rounded-xl shadow">
      <h1 className="text-indigo-950 text-xl font-semibold">Keywords Cloud</h1>
      <TagCloud minSize={12} maxSize={12} tags={data} className="simple-cloud" />
    </div>
  )
}

export default KeywordCloud
