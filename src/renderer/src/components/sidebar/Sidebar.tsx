import { useState } from 'react'
import NewSearch from './NewSearch'
import ActiveSearch from './search/ActiveSearch'
import logo from '../../assets/logo.png'

function Sidebar(): JSX.Element {
  const [searchList, setSearchList] = useState<string[]>([])

  const addSearch = (search: string) => {
    setSearchList([...searchList, search])
  }

  return (
    <nav className="flex flex-col h-screen bg-white shadow-md justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-4 items-center justify-start mt-5 ml-4">
          <img className="w-20 h-15 mt-" src={logo} alt="logo" />
          <h1 className="font-semibold text-primary text-xl text-center mb-3">Sentiment</h1>
        </div>
        <NewSearch searchList={searchList} addSearch={addSearch} />
        <div className="flex flex-col items-center">
          {searchList.map((search) => (
            <ActiveSearch key={search} search={search} />
          ))}
          <ActiveSearch search={'apple'} />
          <ActiveSearch search={'Sony'} />
          <ActiveSearch search={'Nvidia'} />
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
