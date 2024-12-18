import { useState } from "react";
import { ChevronUp } from "lucide-react"

export default function Dropdown({title, children, icon}) {
  const [displayContent, setDisplayContent] = useState(false);

  function handleDisplayContent() {
    setDisplayContent(!displayContent);
  };

  return (
    <div className={`dropdown ${displayContent ? 'is-opened' : 'not-opened'}`} >
      <div className="dropdown-header" onClick={handleDisplayContent}>
        <div style={{display: 'flex', alignItems: 'center', gap: '1em'}}>
          <div className="dropdown-icon">{icon}</div>
          <h2 className="dropdown-title">{title}</h2>
        </div>
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
      <div className={`dropdown-content ${displayContent ? 'is-opened' : 'not-opened'}`}>
        {children} 
      </div>
  </div>
  )
}