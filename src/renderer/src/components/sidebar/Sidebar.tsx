import { useEffect, useState } from 'react'
import NewSearch from './NewSearch'
import ActiveSearch from './search/ActiveSearch'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

function Sidebar(): JSX.Element {
  const [searchList, setSearchList] = useState<string[]>([])

  const navigate = useNavigate()
  const fs = window.require('fs')
  const path = window.require('path')

  const addSearch = (search: string) => {
    setSearchList((prevList) => [...prevList, search])
  }

  const removeSearch = (searchToRemove: string) => {
    setSearchList((prevList) => prevList.filter((search) => search !== searchToRemove))

    if (searchToRemove[0] === '#') {
      searchToRemove = 'hashtag_' + searchToRemove.slice(1)
    } else if (searchToRemove[0] === '@') {
      searchToRemove = 'user_' + searchToRemove.slice(1)
    }

    const filePath = path.join(
      __dirname,
      '../../../../../../src/renderer/src/data/',
      searchToRemove + '.json'
    )
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err)
      } else {
        console.log('File deleted:', filePath)
      }
    })
  }

  const getSearchFiles = () => {
    const directoryPath = path.join(__dirname, '../../../../../../src/renderer/src/data/')

    return new Promise<string[]>((resolve, reject) => {
      fs.readdir(directoryPath, (err, files) => {
        if (err) {
          reject('Unable to scan directory: ' + err)
        } else {
          console.log('Files read from directory:', files) // Log files read
          // Remove the file extensions
          const fileNamesWithoutExtensions = files.map((file) => path.parse(file).name)
          resolve(fileNamesWithoutExtensions)
        }
      })
    })
  }

  useEffect(() => {
    const loadSearchFiles = async () => {
      try {
        const files = await getSearchFiles()
        console.log('Files without extensions:', files)

        for (let file of files) {
          if (file.startsWith('hashtag_')) {
            file = file.replace('hashtag_', '#')
          } else if (file.startsWith('user_')) {
            file = file.replace('user_', '@')
          }
        }

        setSearchList(files)
      } catch (error) {
        console.error('Error loading search files:', error)
      }
    }

    loadSearchFiles()
  }, [])

  return (
    <nav className="flex flex-col h-screen bg-white shadow-md justify-between overflow-y-auto min-w-96">
      <div className="flex flex-col gap-2">
        <div
          className="flex flex-row gap-4 items-center justify-start mt-5 ml-4 hover:cursor-pointer"
          onClick={() => {
            navigate('/dashboard')
          }}
        >
          <img className="w-20 h-15 mt-" src={logo} alt="logo" />
          <h1 className="font-semibold text-primary text-xl text-center mb-3">Sentiment</h1>
        </div>
        <NewSearch searchList={searchList} addSearch={addSearch} />
        <div className="flex flex-col items-center">
          {searchList.map((search) => (
            <ActiveSearch key={search} search={search} removeSearch={removeSearch} />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
