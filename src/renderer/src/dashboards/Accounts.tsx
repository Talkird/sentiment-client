import { useState } from 'react'
import twitter from './twitter.jpg'

function Accounts() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex flex-row my-10 mx-20 rounded-lg gap-10 items-center bg-white p-5 justify-between">
      <div className="flex flex-row gap-10 items-center">
        <img className="w-24 h-24" src={twitter} alt="twitter" />
        <div className="flex flex-col">
          <p className="text-left text-cobble text-base font-normal">Email adress</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type={'text'}
            className="p-3 rounded-xl w-full h-10 relative border text-neutral-900 border-cobble border-opacity-30 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-left text-cobble text-base font-normal">Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={'text'}
            className="p-3 rounded-xl w-full h-10 relative border text-neutral-900 border-cobble border-opacity-30 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <button className="bg-primary/50 rounded-lg px-4 py-2 font-medium hover:bg-primary/80 hover:cursor-pointer">
          Edit
        </button>
        <button className="bg-primary/50 rounded-lg px-4 py-2 font-medium hover:bg-primary/80 hover:cursor-pointer">
          Clear
        </button>
      </div>
    </div>
  )
}

export default Accounts
