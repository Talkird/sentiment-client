import NewSearch from './NewSearch'
import ActiveSearch from './search/ActiveSearch'

function Sidebar(): JSX.Element {
  return (
    <nav className="flex flex-col h-screen bg-white shadow-md justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-3xl text-hover mt-6 text-center">Sentiment</h1>
        <NewSearch />
        <div className="flex flex-col items-center">
          <ActiveSearch search="Nvidia" />
          <ActiveSearch search="Nvidia" />
          <ActiveSearch search="Nvidia" />
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
