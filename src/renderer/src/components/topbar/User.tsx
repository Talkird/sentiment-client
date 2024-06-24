import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function User() {
  return (
    <div className="flex flex-row items-center gap-3">
      <FontAwesomeIcon className="text-primary text-4xl" icon={faUser} />
      <div className="flex flex-col">
        <p className="text-primary font-medium ">User</p>
        <p className="text-slate-500 text-sm underline">Settings</p>
      </div>
    </div>
  )
}

export default User
