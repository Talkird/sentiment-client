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
        <p
          className="py-1 cursor-pointer hover:bg-primary/30 rounded-lg p-2"
          onClick={() => {
            navigate('/dashboard/accounts')
          }}
        >
          Manage accounts
        </p>
        <p className="py-1 cursor-pointer hover:bg-primary/30 rounded-lg p-2">Logout</p>
      </div>
    </Popup>
  )
}

export default UserSettingsPopup
