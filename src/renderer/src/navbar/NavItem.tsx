import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface NavItemProps {
  icon: IconDefinition
  text: string
}

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <div className="flex flex-row p-4 justify-left items-center gap-4 hover:bg-primary/20 transition w-full cursor-pointer">
      <FontAwesomeIcon icon={props.icon} className="text-hover text-3xl" />
      <p className="text-hover text-xl font-medium">{props.text}</p>
    </div>
  )
}

export default NavItem
