import { faSliders, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

interface DeleteSearchPopupProps {
  search: string
  removeSearch: (search: string) => void
}

function DeleteSearchPopup(props: DeleteSearchPopupProps) {
  return (
    <Popup
      offsetX={10}
      offsetY={10}
      arrow={false}
      trigger={
        <FontAwesomeIcon
          icon={faSliders}
          className="text-black/70 hover:bg-primary/30 rounded-full transition p-2"
        />
      }
    >
      <div className="flex flex-col p-2">
        <div
          className="flex flex-row px-2 py-1 gap-3 items-center cursor-pointer hover:bg-red-200/30 rounded-lg"
          onClick={() => props.removeSearch(props.search)}
        >
          <FontAwesomeIcon icon={faTrash} className="text-red-600/65" />
          <p>Delete search</p>
        </div>
      </div>
    </Popup>
  )
}

export default DeleteSearchPopup
