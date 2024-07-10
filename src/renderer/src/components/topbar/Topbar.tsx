import { useLocation, useParams } from 'react-router-dom'
import User from './User'
import LanguageSwitcher from './LanguageSwitcher'
import Selenium from './Selenium'

function Topbar() {
  const { search } = useParams<{ search: string }>()
  const location = useLocation()

  const getPathSegments = () => {
    const pathParts = location.pathname.split('/').slice(2)
    return pathParts.map((part, index) => ({
      name: part.charAt(0).toUpperCase() + part.slice(1),
      path: pathParts.slice(0, index + 1).join('/')
    }))
  }

  return (
    <div className="flex justify-between items-center bg-white p-4">
      <div className="text-2xl font-semibold">
        {getPathSegments().map((segment, index) => (
          <span className="font-normal" key={segment.path}>
            {index > 0 && ' > '}
            {segment.name}
          </span>
        ))}
      </div>

      <div className="flex flex-row items-center gap-12">
        <LanguageSwitcher />
        <User />
      </div>
    </div>
  )
}

export default Topbar
