interface RawDataProps {
  rawData: { comment: string; sentiment: string }[]
}

function RawData(props: RawDataProps) {
  return (
    <div className="flex flex-col bg-white gap-2 p-5 rounded-xl w-full max-h-96">
      <h1 className="text-indigo-950 text-xl font-semibold">Raw Data</h1>
      <div className="flex flex-col gap-2 overflow-y-auto">
        {props.rawData.map((data, index) => (
          <div
            key={index}
            className="flex flex-row gap-2 items-center border border-black/20 rounded-xl justify-between px-3 p-2"
          >
            <p className="text-indigo-950 font-medium">{data.comment}</p>

            {data.sentiment.toLowerCase() === 'positive' && (
              <p className="bg-green-100 rounded-2xl text-green-600 px-4 py-1 font-medium shadow">
                {data.sentiment}
              </p>
            )}

            {data.sentiment.toLowerCase() === 'negative' && (
              <p className="bg-red-100 rounded-2xl text-red-600 px-4 py-1 font-medium shadow">
                {data.sentiment}
              </p>
            )}

            {data.sentiment.toLowerCase() === 'neutral' && (
              <p className="bg-yellow-100 rounded-2xl text-yellow-600 px-4 py-1 font-medium shadow">
                {data.sentiment}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RawData
