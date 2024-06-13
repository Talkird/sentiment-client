import { faCog, faArrowRightFromBracket, faPieChart } from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem'
import { faJs } from '@fortawesome/free-brands-svg-icons'

function Navbar(): JSX.Element {
  return (
    <nav className="flex flex-col h-screen bg-white shadow-md justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-3xl text-hover p-8">Sentiment</h1>
        <div className="flex flex-col items-center gap-8">
          <NavItem icon={faJs} text="Home" />
          <NavItem icon={faPieChart} text="Analytics" />
          <NavItem icon={faCog} text="Settings" />
        </div>
      </div>
      <div className="">
        <NavItem icon={faArrowRightFromBracket} text="Logout" />
      </div>
    </nav>
  )
}

export default Navbar
