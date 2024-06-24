import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const { exec } = require('child_process')

function NewSearch() {
  const [search, setSearch] = useState('')

  function runScraper() {
    exec('python src/util/scraper.py ' + search, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`)
        return
      }
      console.log(`stdout: ${stdout}`)
      console.error(`stderr: ${stderr}`)
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="flex flex-row m-3 gap-3">
      <div className="flex flex-row items-center gap-3 bg-gray-200 rounded-md p-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500" />
        <input
          type="text"
          className="bg-gray-200 outline-none"
          placeholder="Search tag, brand"
          onChange={handleChange}
        />
      </div>
      <button
        className="px-4 py-2 rounded-lg bg-primary hover:bg-hover transition text-white"
        onClick={runScraper}
      >
        Analyze
      </button>
    </div>
  )
}

export default NewSearch
