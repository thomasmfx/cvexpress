import { Plus } from "lucide-react"
import { useState } from "react"
import { newSkill } from "../../models/helpers/skills";
import Input from "../Input";
import SkillsList from "./SkillsList";

export default function SkillsForm({data, onSave, onEdit, onDelete}){
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState(newSkill());
  const [isEditing, setIsEditing] = useState(false);

  function toggleIsFormVisible() {
    setIsFormVisible(!isFormVisible)
    if (!isFormVisible) {
      setIsEditing(false)
      setFormData(newSkill());
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
      onEdit('skillSet', formData.id, formData);
    } else {
      onSave('skillSet', formData);
    }
    setIsEditing(false);
    setFormData(newSkill())
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
      Add Skill
    </button>
    )}
    </form>
    <SkillsList
      data={data}
      onDelete={onDelete}
    />
    </>
  )
}