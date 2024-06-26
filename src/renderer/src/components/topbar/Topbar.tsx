import { useLocation, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import User from './User'

function Topbar() {
  const { search } = useParams<{ search: string }>()
  const location = useLocation()

  const getPathSegments = () => {
    const pathParts = location.pathname.split('/').slice(2) // Remove empty string and 'dashboard' from the path
    return pathParts.map((part, index) => ({
      name: part.charAt(0).toUpperCase() + part.slice(1), // Capitalize the first letter
      path: pathParts.slice(0, index + 1).join('/') // Construct the path up to this segment
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
      <User username="Amanda" photo="" />
    </div>
  )
}

export default Topbar
