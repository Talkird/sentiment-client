import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ActiveSearchSubItemProps {
  title: string
  icon: IconDefinition
  search: string
}

//todo link

function ActiveSearchSubItem(props: ActiveSearchSubItemProps) {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-3 hover:bg-hover/20 rounded-lg p-2 items-center">
        <FontAwesomeIcon icon={props.icon} className="text-primary" />
        <p>{props.title}</p>
      </div>
    </div>
  )
}

export default ActiveSearchSubItem
