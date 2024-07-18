import React, { useState } from 'react'
import twitter from './twitter.jpg'
import toast from 'react-hot-toast'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Accounts: React.FC = () => {
  const [email, setEmail] = useState('sentiment1984')
  const [password, setPassword] = useState('sentimentscraping1984')
  const [hidden, setHidden] = useState(true)
  const [text, setText] = useState('Hidden')
  const [icon, setIcon] = useState(faEyeSlash)

  const handleUpdate = () => {
    setTimeout(() => {
      toast.success('Account updated successfully')
    }, 500)
  }

  const handleHide = () => {
    setHidden(!hidden)

    if (hidden) {
      setText('Shown')
      setIcon(faEye)
    } else {
      setText('Hidden')
      setIcon(faEyeSlash)
    }
  }

  const handleUnlink = () => {
    setTimeout(() => {
      toast.success('Account unlinked successfully')
      setEmail('')
      setPassword('')
    }, 400)
  }

  return (
    <div className="flex flex-row my-10 mx-20 rounded-lg gap-10 items-center bg-white p-5 justify-between">
      <div className="flex flex-row gap-10 items-center">
        <img className="w-24 h-24" src={twitter} alt="twitter" />
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <p className="text-left text-cobble text-base font-normal">Email or Username</p>
          </div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="p-3 rounded-xl w-full h-10 relative border text-neutral-900 border-cobble border-opacity-30 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="text-left text-cobble text-base font-normal">Password</p>
            <div
              className="flex flex-row items-center justify-center hover:cursor-pointer gap-2"
              onClick={handleHide}
            >
              <p className="text-cobble text-lg font-normal text-opacity-80">{text}</p>
              <FontAwesomeIcon icon={icon} className="text-cobble" />
            </div>
          </div>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={hidden ? 'password' : 'text'}
            className="p-3 rounded-xl w-full h-10 relative border text-neutral-900 border-cobble border-opacity-30 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <button
          onClick={handleUpdate}
          className="bg-primary/50 rounded-lg px-4 py-2 transition font-medium hover:bg-primary/80 hover:cursor-pointer outline-none"
        >
          Update
        </button>
        <button
          onClick={handleUnlink}
          className="bg-primary/50 rounded-lg px-4 py-2 transition font-medium hover:bg-primary/80 hover:cursor-pointer outline-none"
        >
          Unlink
        </button>
      </div>
    </div>
  )
}

export default Accounts
