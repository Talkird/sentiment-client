import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

function UserSettingsPopup() {
  const navigate = useNavigate()

  return (
    <Popup
      trigger={<p className="text-slate-500 text-sm underline hover:cursor-pointer">Settings</p>}
      position={['bottom center', 'bottom right', 'bottom left']}
      offsetX={10}
      offsetY={10}
      arrow={false}
    >
      <div className="flex flex-col p-2">
        <div className="flex flex-row px-2 py-1 gap-3 items-center cursor-pointer hover:bg-primary/30 rounded-lg">
          <FontAwesomeIcon icon={faUser} />
          <p
            onClick={() => {
              navigate('/dashboard/accounts')
            }}
          >
            Accounts
          </p>
        </div>
        <div className="flex flex-row px-2 py-1 gap-3 items-center cursor-pointer hover:bg-primary/30 rounded-lg">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <p className="">Logout</p>
        </div>
      </div>
    </Popup>
  )
}

export default UserSettingsPopup
