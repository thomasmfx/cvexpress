import { Plus, PencilLine } from "lucide-react"
import Input from "./Input"

export default function Form({data, isOpened, openFormButtonText, onClose, onOpen, onChange, onSubmit}) {
  return (
    <div className={`form-container ${isOpened ? 'is-opened' : 'not-opened'}`}>
      <form className="form" onSubmit={(e) => onSubmit(e, data)}>
        {Object.entries(data.data).map(([key, data]) => (
          <Input
            key={key}
            label={data.title}
            type={data.inputType}
            value={data.value}
            onChange={(e) => onChange(e, key)}
          />
        ))}
        <div className="form-actions">
          <button 
            className="button-two" 
            onClick={() => onClose()}
            type="button"
          >
            Cancel
          </button>
          <button 
            className="button-one" 
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
      <button 
        className="button-one button-open-form" 
        onClick={() => onOpen()}
      >
        {/* Only the contactInformation entry has this property */}
        {Object.hasOwn(data.data, 'fullName') ? (
          <>
            <PencilLine />
            Edit info
          </>
        ) : (
          <>
            <Plus />
            Add {openFormButtonText}
          </>
        )}
      </button>
  </div>
  )
}
