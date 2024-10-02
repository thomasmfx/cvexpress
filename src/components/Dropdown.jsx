import { useState } from "react";
import { ChevronUp } from "lucide-react"

export default function Dropdown({title, children}) {
  const [displayContent, setDisplayContent] = useState(false);

  function handleDisplayContent() {
    setDisplayContent(!displayContent);
  };

  return (
    <section className="dropdown" >
      <div className="dropdown-header" onClick={handleDisplayContent}>
        <h2 className="dropdown-title">{title}</h2>
        <ChevronUp
          className="dropdown-arrow" 
          size='28px' 
          color="#212529"
          style={
            displayContent 
            ? {transform: 'rotate(180deg)'}
            : null
          }
         />
      </div>
      {displayContent && 
        <div className="dropdown-content">
          {children} 
        </div>
      }
  </section>
  )
}