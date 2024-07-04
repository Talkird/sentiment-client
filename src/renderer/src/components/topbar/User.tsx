import { useEffect, useState } from 'react'
import { auth } from '@renderer/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import UserSettingsPopup from './UserSettingsPopup'

function User() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [])

  const trimmedEmail = user?.email?.split('@')[0].trim()

  return (
    <div className="flex flex-row items-center gap-3">
      <div className="bg-primary rounded-full flex items-center justify-center  h-12 w-12">
        <p className="text-center text-xl text-white">{trimmedEmail?.charAt(0).toUpperCase()}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-primary font-medium ">{trimmedEmail}</p>
        <UserSettingsPopup />
      </div>
    </div>
  )
}

export default User
