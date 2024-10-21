import { Plus, PencilLine } from "lucide-react"
import Input from "./Input"
import { getTranslation } from '../models/translations';

export default function Form({data, dataName, language, isOpened, openFormButtonText, onClose, onOpen, onChange, onSubmit}) {
  return (
    <div className={`form-container ${isOpened ? 'is-opened' : 'not-opened'}`}>
      <form className="form" onSubmit={(e) => onSubmit(e, data)}>
        {Object.entries(data.data).map(([key, data]) => (
          <Input
            key={key}
            label={getTranslation(dataName, key, language)}
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
            {language === 'en' ? 'Cancel' : 'Cancelar'}
          </button>
          <button 
            className="button-one" 
            type="submit"
          >
            {language === 'en' ? 'Save' : 'Salvar'}
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
            {language === 'en' ? 'Edit info' : 'Editar informações'}
          </>
        ) : (
          <>
            <Plus />
            {language === 'en' ? 'Add' : 'Adicionar'} {openFormButtonText}
          </>
        )}
      </button>
  </div>
  )
}
