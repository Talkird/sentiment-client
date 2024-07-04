import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronDown,
  faChevronUp,
  faComments,
  faSliders,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import ActiveSearchSubItem from './ActiveSearchSubItem'

interface ActiveSearchProps {
  search: string
}

function ActiveSearch(props: ActiveSearchProps) {
  const [selected, setSelected] = useState(false)
  const [retracted, setRetracted] = useState(true)
  const [icon, setIcon] = useState(faChevronDown)

  const toggleRetracted = () => {
    setRetracted(!retracted)
    if (retracted) {
      setIcon(faChevronUp)
    } else {
      setIcon(faChevronDown)
    }
  }

  return (
    <div className="p-3 hover:cursor-pointer w-full">
      <div
        className="flex flex-row justify-between hover:bg-primary/30 items-center rounded-lg p-3 gap-10 transition"
        onClick={toggleRetracted}
      >
        <h1>{props.search}</h1>
        <div className="flex flex-row gap-0 items-center">
          <FontAwesomeIcon
            icon={faSliders}
            className="text-black/70 hover:bg-primary/30 rounded-full transition p-2"
          />
          <FontAwesomeIcon
            icon={icon}
            className="hover:bg-primary/30 rounded-full transition p-2"
          />
        </div>
      </div>
      {!retracted && (
        <div className="w-full flex flex-col gap-3 mt-3 px-3">
          <ActiveSearchSubItem title="Comments" icon={faComments} search={props.search} />
          <ActiveSearchSubItem title="Posts" icon={faTwitter} search={props.search} />
          <ActiveSearchSubItem title="Users" icon={faUser} search={props.search} />
        </div>
      )}
    </div>
  )
}

export default ActiveSearch
