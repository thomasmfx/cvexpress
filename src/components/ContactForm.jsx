import { PencilLine } from "lucide-react"
import { useState } from "react"
import Data from "../models/Data"
import Input from "./Input";
import { newContact } from "../models/helpers/contact";
import Card from './Card'

function ContactSection({children}) {
  return (
    <div className="contact-section">
      {children}
    </div>
  )
}

function ContactCard({data}) {
  return (
    <ul className="cards-wrapper">
      {data.map((contact) => 
        <Card classes={["contact-card"]} key={contact.id}>
          {Object.entries(contact.data).map(([key, data]) =>
            <ContactSection key={key}>
              <p>{data.title}</p>
              {data.inputType !== 'url'
              ? <p className={`${key} data`}>{data.value}</p>
              : <a className={`${key} link data`} href={data.value}>{data.value}</a>
              }
           </ContactSection>
          )}
      </Card>
      )}
    </ul>
  )
}

export default function ContactForm({
  data = 'contactInformation',
  defaultData = newContact()
}) {
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
      <button className="button-one add" onClick={() => editEntry(currentData[0].id)}>
        <PencilLine />
        <span>Edit info</span>
      </button>
    )}
    </form>
    <ContactCard
      data={currentData}
    />
    </>
  )
}