import { TagCloud } from 'react-tagcloud'

interface KeywordCloudProps {
  data: { value: string; count: number }[]
}

const colors = { luminosity: 'dark' }

function KeywordCloud({ data }: KeywordCloudProps) {
  return (
    <div className="flex flex-col gap-2 bg-white p-5 rounded-xl shadow">
      <h1 className="text-indigo-950 text-xl font-semibold">Keywords Cloud</h1>
      <TagCloud minSize={20} maxSize={50} tags={data} colorOptions={colors} />
    </div>
  )
}

export default KeywordCloud
