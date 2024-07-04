import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

interface ActiveSearchSubItemProps {
  title: string
  icon: IconDefinition
  search: string
}

function ActiveSearchSubItem(props: ActiveSearchSubItemProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/dashboard/${props.search}/${props.title.toLowerCase()}`)
  }
  return (
    <div className="w-full">
      <div
        className="flex flex-row transition gap-3 hover:bg-primary/30 rounded-lg p-2.5 items-center"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={props.icon} className="text-primary/65" />
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default ActiveSearchSubItem
