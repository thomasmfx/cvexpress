import { useState, useEffect } from "react"
import getDataComponentsList from "./DataComponentsList";
import Form from "../Form";

export default function DataController({
  data, 
  dataName,
  language,
  defaultEntry,
  buttonText,
  onSave, 
  onEdit, 
  onDelete
}) {
  const [formData, setFormData] = useState(defaultEntry);
  const [isEditingData, setIsEditingData] = useState(false);
  const [isFormOpened, setIsFormOpened] = useState(false);

  let isDataContact = dataName === 'contact';

  useEffect(() => {
    setFormData(defaultEntry); 
  }, [defaultEntry]);

  function openForm() {
    setIsFormOpened(true);
  }

  function closeForm() {
    setIsFormOpened(false);
    setFormData(defaultEntry);
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
    
    // We don't want the user frustatingly opening the form over and over, right?
    if (dataName !== 'skills') closeForm();
    setIsEditingData(false);

    // If the data is contact, onSave is passed as 'editEntry' in DataController
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
        dataName={dataName}
        language={language}
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