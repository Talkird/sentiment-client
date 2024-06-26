import photo from './user.jpg'

interface UserProps {
  photo: string
  username: string
}

function User(props: UserProps) {
  return (
    <div className="flex flex-row items-center gap-3">
      <img className="h-12 mx-auto object-cover rounded-full w-12" src={photo} alt="user" />
      <div className="flex flex-col">
        <p className="text-primary font-medium ">{props.username}</p>
        <p className="text-slate-500 text-sm underline hover:cursor-pointer">Settings</p>
      </div>
    </div>
  )
}

export default User
