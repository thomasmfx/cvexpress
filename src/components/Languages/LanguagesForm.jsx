import { Plus } from "lucide-react"
import { useState } from "react"
import { newLanguage } from "../../models/helpers/languages";
import Input from "../Input";
import LanguagesList from "./LanguagesList";

export default function LanguagesForm({data, onSave, onEdit, onDelete}){
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState(newLanguage());
  const [isEditing, setIsEditing] = useState(false);
 
  function toggleIsFormVisible() {
    setIsFormVisible(!isFormVisible)
    if (!isFormVisible) {
      setIsEditing(false)
      setFormData(newLanguage());
    }
  }

  function handleFormChange(e, key) {
    const copy = {
      ...formData,
      data: {
        ...formData.data,
        [key]: {
          ...formData.data[key],
          value: e.target.value
        }
      }
    }
    setFormData(copy);
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      onEdit('spokenLanguages', formData.id, formData);
    } else {
      onSave('spokenLanguages', formData);
    }
    setIsEditing(false);
    setFormData(newLanguage());
  }

  function handleEditing(e, editingEntry) {
    e.preventDefault();
    toggleIsFormVisible();
    setIsEditing(true);
    setFormData(editingEntry);
  }

  return (
    <>
    <form className="form" onSubmit={handleFormSubmit}>
    {isFormVisible ? (
      <>
        {Object.entries(formData.data).map(([key, data]) => (
          <Input
            key={key}
            label={data.title}
            type={data.inputType}
            value={data.value}
            onChange={(e) => handleFormChange(e, key)}
          />
        ))}
        <div className="typing">
          <button 
            className="button-two" 
            onClick={() => {
              toggleIsFormVisible()
              setIsEditing(false);
            }}
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
      </>
    ) : (
      <button 
        className="button-one add" 
        onClick={toggleIsFormVisible}
      >
      <Plus />
      Add Language
    </button>
    )}
    </form>
    <LanguagesList
      data={data}
      onDelete={onDelete}
    />
    </>
  )
}