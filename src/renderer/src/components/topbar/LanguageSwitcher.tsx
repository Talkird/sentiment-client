import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import usflag from '../../assets/usflag.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LanguageSwitcher() {
  return (
    <div className="flex flex-row gap-2 items-center">
      <img src={usflag} className="w-6 h-6 relative"></img>
      <p className="text-md text-indigo-950 font-semibold">Eng (US)</p>
      <FontAwesomeIcon icon={faChevronDown} className="text-indigo-950" />
    </div>
  )
}

export default LanguageSwitcher
