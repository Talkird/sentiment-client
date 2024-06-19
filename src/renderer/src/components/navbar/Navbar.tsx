import { faCog, faArrowRightFromBracket, faPieChart } from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem'
import { faJs } from '@fortawesome/free-brands-svg-icons'

const { exec } = require('child_process')

function runScraper() {
  exec('python src/util/scraper.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stderr: ${stderr}`)
  })
}

function Navbar(): JSX.Element {
  return (
    <nav className="flex flex-col h-screen bg-white shadow-md justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-3xl text-hover p-8">Sentiment</h1>
        <div className="flex flex-col items-center gap-8">
          <NavItem icon={faJs} text="Home" />
          <NavItem icon={faPieChart} text="Analytics" />
          <NavItem icon={faCog} text="Settings" />
          <button
            onClick={runScraper}
            className="bg-emerald-500 hover:bg-emerald-600 transition text-white p-3 rounded-lg"
          >
            Run Scraper
          </button>
        </div>
      </div>
      <div className="">
        <NavItem icon={faArrowRightFromBracket} text="Logout" />
      </div>
    </nav>
  )
}

export default Navbar
