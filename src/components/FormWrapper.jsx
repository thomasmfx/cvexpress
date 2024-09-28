import { useState } from "react";
import { ChevronUp } from "lucide-react"

export default function Form({title, children}) {
  const [displayForm, setDisplayForm] = useState(false);

  function handleDisplayForm() {
    setDisplayForm(!displayForm);
  };

  return (
    <div className="form-wrapper" >
      <div className="form-header" onClick={handleDisplayForm}>
        <h2 className="form-title">{title}</h2>
        <ChevronUp
          className="form-arrow" 
          size='28px' 
          color="#212529"
          style={
            displayForm 
            ? {transform: 'rotate(180deg)', transition: '.3s ease-in-out'} 
            : {transition: '.3s ease-in-out'}
          }
         />
      </div>
      {displayForm &&
        <form className="form">
          {children}
        </form>
      }
  </div>
  )
}