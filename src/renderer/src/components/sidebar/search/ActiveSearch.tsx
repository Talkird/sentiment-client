import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faComments, faUser } from '@fortawesome/free-solid-svg-icons'
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
    <div className="p-3 hover:cursor-pointer w-full bg-primary/30 hover:bg-hover/30">
      <div className="flex flex-row justify-between items-center gap-10" onClick={toggleRetracted}>
        <h1>{props.search}</h1>
        <FontAwesomeIcon icon={icon} />
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
