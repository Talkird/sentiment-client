import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

interface ActiveSearchSubItemProps {
  title: string
  icon: IconDefinition
  search: string
}

//todo link

function ActiveSearchSubItem(props: ActiveSearchSubItemProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/dashboard/${props.search}/${props.title.toLowerCase()}`)
  }
  return (
    <div className="w-full">
      <div
        className="flex flex-row gap-3 hover:bg-hover/20 rounded-lg p-2 items-center"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={props.icon} className="text-primary" />
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default ActiveSearchSubItem
