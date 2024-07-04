interface KeywordCloudProps {
  data: { name: string; value: number }[]
}

function KeywordCloud({ data }: KeywordCloudProps) {
  return (
    <div className="flex flex-col gap-2 bg-white p-5 justify-start rounded-xl shadow">
      <h1 className="text-indigo-950 text-xl font-semibold">Keywords Cloud</h1>
      <ul className="text-indigo-950 text-lg">
        {data.map((item, index) => (
          <li key={index}>
            <span className="font-medium">{item.name}</span>: {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default KeywordCloud
