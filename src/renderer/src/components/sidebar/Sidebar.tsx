import { useState } from 'react'
import NewSearch from './NewSearch'
import ActiveSearch from './search/ActiveSearch'

function Sidebar(): JSX.Element {
  const [searchList, setSearchList] = useState<string[]>([])

  const addSearch = (search: string) => {
    setSearchList([...searchList, search])
  }

  return (
    <nav className="flex flex-col h-screen bg-white shadow-md justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-3xl text-hover mt-6 text-center">Sentiment</h1>
        <NewSearch searchList={searchList} addSearch={addSearch} />
        <div className="flex flex-col items-center">
          {searchList.map((search) => (
            <ActiveSearch key={search} search={search} />
          ))}
          <ActiveSearch search={'Samsung'} />
          <ActiveSearch search={'Apple'} />
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
