import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import SearchSettingsPopup from './SearchSettingsPopup'
const { exec } = require('child_process')

interface NewSearchProps {
  searchList: string[]
  addSearch: (search: string) => void
}

function NewSearch({ searchList, addSearch }: NewSearchProps) {
  const [spamFilter, setSpamFilter] = useState(true)
  const [amount, setAmount] = useState('10')
  const [search, setSearch] = useState('')

  const runScraper = () => {
    if (!search) {
      toast.error('Search cannot be empty')
      return
    }

    if (searchList.includes(search)) {
      toast.error('Search already exists')
      return
    }

    toast('Searching comments', {
      icon: '⚠️'
    })

    exec(
      `python3.9 src/util/scraper.py "${search}" "${amount}" ${spamFilter}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`)
          toast.error('Failed to run scraper')
          return
        }

        console.log('Scraper ran successfully')
        addSearch(search)
        setSearch('')
        toast.success('Search added')

        console.log(`stdout: ${stdout}`)
        console.error(`stderr: ${stderr}`)
      }
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="flex flex-row items-center bg-graybg rounded-lg px-4 py-2 mx-4 shadow-sm justify-between">
      <input
        type="text"
        className="bg-graybg outline-none flex-grow px-2 py-1 text-gray-800 rounded-md"
        placeholder="Search"
        onChange={handleChange}
        value={search}
        aria-label="Search"
      />
      <div className="flex flex-row gap-3 items-center">
        <SearchSettingsPopup
          amount={amount}
          setAmount={setAmount}
          spamFilter={spamFilter}
          setSpamFilter={setSpamFilter}
        />
        <button
          onClick={runScraper}
          className="flex items-center focus:outline-dashed justify-center p-2 bg-primary/65 text-white rounded-full hover:bg-primary transition focus:outline-none"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
        </button>
      </div>
    </div>
  )
}

export default NewSearch
