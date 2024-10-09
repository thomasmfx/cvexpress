import { Plus } from "lucide-react"
import { useState } from "react"
import { newExperience } from "../../models/helpers/experience";
import Input from "../Input";
import ExperienceList from "./ExperienceList";

export default function ExperienceForm({data, onSave, onEdit, onDelete}){
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState(newExperience());
  const [isEditing, setIsEditing] = useState(false);
 
  function toggleIsFormVisible() {
    setIsFormVisible(!isFormVisible)
    if (!isFormVisible) {
      setIsEditing(false)
      setFormData(newExperience());
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
    toggleIsFormVisible();
    if (isEditing) {
      onEdit('experienceList', formData.id, formData);
    } else {
      onSave('experienceList', formData);
    }
    setIsEditing(false);
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
      Add Experience
    </button>
    )}
    </form>
    <ExperienceList
      data={data}
      onEdit={handleEditing}
      onDelete={onDelete}
    />
    </>
  )
}