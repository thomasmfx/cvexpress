import { Plus } from "lucide-react"
import { useState } from "react"
import Data from "../models/Data"
import Input from "./Input";
import ExperienceList from "./ExperienceList";
import SkillsList from "./SkillsList";
import EducationList from "./EducationList";
import LanguagesList from "./LanguagesList";

function verifyChildren(listName, data, onEdit, onDelete) {
  switch (listName) {
    case 'experience':
      return (
        <ExperienceList
          data={data}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )
    case 'skill':
      return (
        <SkillsList
          data={data}
          onDelete={onDelete}
        />
      )
    case 'education':
      return (
        <EducationList
          data={data}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )
    case 'language':
      return (
        <LanguagesList
          data={data}
          onDelete={onDelete}
        />
      )
    default:
      return null;
  }
}

export default function Form({data, defaultData, listName}) {
  const [currentData, setCurrentData] = useState(() => Data.getDataList(data));
  const [formData, setFormData] = useState(defaultData);
  const [displayForm, setDisplayForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleDisplayForm() {
    setDisplayForm(!displayForm)
  }

  function handleSetFormData(e, key) {
    let copy = formData;
    copy.data[key].value = e.target.value;
    setFormData({...copy})
  }

  function handleSaveData(e) {
    e.preventDefault();
    if (isEditing) {
      Data.editDataEntry(data, formData.id, formData);
    } else {
      Data.addDataEntry(data, formData);
    }
    
    setCurrentData(Data.getDataList(data));
    setFormData(defaultData);
    setDisplayForm(false);
    setIsEditing(false);
  }  

  function cancelFill() {
    setFormData(defaultData);
    handleDisplayForm();
  }

  function editEntry(id) {
    setFormData(Data.getDataEntryById(data, id));
    handleDisplayForm();
    setIsEditing(!isEditing)
  }

  function deleteEntry(id) {
    Data.deleteDataEntry(data, id)
    setCurrentData(prevData => prevData.filter(data => data.id !== id));
  }

  return (
    <>
    <form className="form">
    {displayForm ? (
      <>
        {Object.entries(formData.data).map(([key, data]) => (
          <Input
            key={key}
            className="input"
            label={data.title}
            type={data.inputType}
            value={data.value}
            onChange={(e) => handleSetFormData(e, key)}
          />
        ))}
        <div className="typing">
          <button className="button-two" onClick={cancelFill}>Cancel</button>
          <button className="button-one" onClick={handleSaveData}>Save</button>
        </div>
      </>
    ) : (
      <button className="button-one add" onClick={handleDisplayForm}>
        <Plus />
        <span>Add {listName}</span>
      </button>
    )}
    </form>
    {verifyChildren(listName, currentData, editEntry, deleteEntry)}
    </>
  )
}