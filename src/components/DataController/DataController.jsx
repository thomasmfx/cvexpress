import { useState } from "react"
import getDataComponentsList from "./DataComponentsList";
import Form from "../Form";

export default function DataController({
  data, 
  dataName,
  defaultEntry,
  buttonText,
  onSave, 
  onEdit, 
  onDelete
}) {
  const [formData, setFormData] = useState(defaultEntry);
  const [isEditingData, setIsEditingData] = useState(false);
  const [isFormOpened, setIsFormOpened] = useState(false);

  let isDataContact = dataName === 'contactInformation';

  function openForm() {
    setIsFormOpened(true);
  }

  function closeForm() {
    setIsFormOpened(false);
    // Just so the user don't notice the form clearing up during the transition (1ms more than the transition duration btw)
    setTimeout(() => {
      setFormData(defaultEntry);
    }, 301)
  }

  function handleInputChange(e, key) {
    // Deep copy to avoid modifying reference
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
  
  function handleFormSubmit(e, formData) {
    e.preventDefault();
    closeForm();
    setIsEditingData(false);

    // If the data is contactInformation, onSave is passed as 'editEntry' in DataController, explanation also there
    if (isDataContact) {
      onSave(dataName, formData.id, formData);
      return;
    } 

    isEditingData
    ? onEdit(dataName, formData.id, formData)
    : onSave(dataName, formData);
  }

  function handleEditData(e, editingEntry) {
    e.preventDefault();
    setFormData(editingEntry);
    setIsEditingData(true);
    openForm();
  }

  return (
    <>
      <Form 
        data={formData}
        isOpened={isFormOpened}
        openFormButtonText={buttonText}
        onClose={closeForm}
        onOpen={openForm}
        onChange={handleInputChange}
        onEditing={handleEditData}
        onSubmit={handleFormSubmit}
      />
      {getDataComponentsList(data, dataName, handleEditData, onDelete)}
    </>
  )
}