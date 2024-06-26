import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
const { exec } = require('child_process')

interface NewSearchProps {
  searchList: string[]
  addSearch: (search: string) => void
}

function NewSearch(props: NewSearchProps) {
  const [search, setSearch] = useState('')

  function runScraper() {
    toast('Searching comments', {
      icon: '⚠️'
    })
    if (!props.searchList.includes(search)) {
      exec('python3.9 src/util/scraper.py ' + search, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`)
          return
        } else {
          console.log('Scraper ran successfully')
          props.addSearch(search)
          setSearch('')
          toast.success('Search added')
        }
        console.log(`stdout: ${stdout}`)
        console.error(`stderr: ${stderr}`)
      })
    } else {
      toast.error('Search already exists')
    }
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
          value={search}
        />
      </div>
      <button
        className="px-4 py-2 rounded-lg bg-primary hover:bg-hover transition text-white"
        onClick={runScraper}
      >
        Search
      </button>
    </div>
  )
}

export default NewSearch
