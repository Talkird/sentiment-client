import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

interface SearchSettingsPopupProps {
  amount: string
  setAmount: (amount: string) => void
  spamFilter: boolean
  setSpamFilter: (spamFilter: boolean) => void
}

function SearchSettingsPopup(props: SearchSettingsPopupProps) {
  return (
    <Popup
      trigger={
        <button className="flex items-center justify-center p-2  text-white rounded-full hover:bg-gray-300 transition focus:outline-none">
          <FontAwesomeIcon icon={faCog} className="text-xl text-gray-500" />
        </button>
      }
      position={['bottom center', 'bottom right', 'bottom left']}
      offsetX={10}
      offsetY={10}
      arrow={false}
    >
      <div className="flex flex-col p-2">
        <div className="flex flex-row px-2 py-1 gap-3 items-center rounded-lg">
          <p>Comment amount</p>
          <input
            type="text"
            value={props.amount}
            onChange={(e) => props.setAmount(e.target.value)}
            className="w-full outline-none bg-gray-200 px-4 py-2 rounded-lg"
          />
        </div>
      </div>
    </Popup>
  )
}

export default SearchSettingsPopup
