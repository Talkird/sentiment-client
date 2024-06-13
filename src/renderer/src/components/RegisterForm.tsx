import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { faCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function RegisterForm(): JSX.Element {
  const [name, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [hidden, setHidden] = useState(true)
  const [text, setText] = useState('Hidden')
  const [icon, setIcon] = useState(faEyeSlash)

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

  const navigate = useNavigate()

  const handleRegister = async () => {
    const requestBody = { email, name, password }

    toast.error('Error al registrar usario')

    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })

    if (response.ok) {
      navigate('/dashboard')
    }
  }

  return (
    <div className="m-5 w-full max-w-lg rounded-2xl bg-white p-12 text-center shadow-lg">
      <div className="flex flex-col justify-center items-center gap-6 mb-10">
        <FontAwesomeIcon icon={faCircle} className="text-primary text-5xl" />

        <div className="flex flex-col justify-center items-center gap-0.5">
          <h1 className="font-medium text-3xl text-zinc-800"> Sign Up </h1>

          <div className="flex flex-row w-full justify-center gap-1 text-center">
            <p className="text-zinc-800 text-base font-normal"> Already have an account? </p>
            <Link to="/" className="text-neutral-900 text-base font-normal underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-10 flex flex-col">
        <p className="text-left text-cobble text-base font-normal">Username</p>
        <input
          type="text"
          className="p-3 rounded-xl w-full h-10 relative border text-neutral-900 border-cobble border-opacity-30 focus:outline-none"
        />
      </div>

      <div className="mb-10 flex flex-col">
        <p className="text-left text-cobble text-base font-normal">Email adress</p>
        <input
          type="text"
          className="p-3 rounded-xl w-full h-10 relative border text-neutral-900 border-cobble border-opacity-30 focus:outline-none"
        />
      </div>

      <div className="mb-10 flex flex-col">
        <div className="flex flex-row justify-between">
          <p className="text-left text-cobble text-base font-normal">Password</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="text-cobble text-lg font-normal text-opacity-80">{text}</p>
            <FontAwesomeIcon
              icon={icon}
              className="text-cobble hover:cursor-pointer"
              onClick={handleHide}
            />
          </div>
        </div>
        <input
          type={hidden ? 'password' : 'text'}
          className="p-3 rounded-xl w-full h-10 relative border text-neutral-900 border-cobble border-opacity-30 focus:outline-none"
        />
        <p className="text-left text-cobble text-sm font-normal">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </p>
      </div>

      <button
        className="w-full py-3 text-white rounded-full bg-primary hover:bg-hover transition"
        onClick={() => {
          navigate('/')
        }}
      >
        Join Now
      </button>
    </div>
  )
}

export default RegisterForm
