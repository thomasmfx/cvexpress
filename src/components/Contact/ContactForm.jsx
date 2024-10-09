import { PencilLine } from "lucide-react"
import { useState } from "react"
import Input from "../Input";
import ContactCard from "./ContactCard";

export default function ContactForm({contactInfo, onSave}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState(contactInfo.data);
 
  function toggleIsFormVisible() {
    setIsFormVisible(!isFormVisible)
    if (!isFormVisible) {
      setFormData(contactInfo.data);
    }
  }

  function updateFormData(e, key) {
    let copy = {...formData}
    copy[key] = {...copy[key], value: e.target.value};
    setFormData(copy);
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    toggleIsFormVisible();
    onSave('contactInformation', contactInfo.id, formData);
  }

  return (
    <>
    <form className="form" onSubmit={handleFormSubmit}>
    {isFormVisible ? (
      <>
        {Object.entries(formData).map(([key, data]) => (
          <Input
            key={key}
            label={data.title}
            type={data.inputType}
            value={data.value}
            onChange={(e) => updateFormData(e, key)}
          />
        ))}
        <div className="typing">
          <button 
            className="button-two" 
            onClick={toggleIsFormVisible}
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
        type="button"
      >
        <PencilLine />
        Edit info
      </button>
    )}
    </form>
    </>
  )
}