import { PencilLine, X } from "lucide-react"
import Card from "../Card"

export default function ExperienceList({data, onEdit, onDelete}) {
  return (
    <ul className="cards-wrapper">
      {data.map((experience) => 
        <Card classes={["card-layout-one"]} key={experience.id}>
          <p className="entry-value">{experience.data.jobPosition.value}</p>
          <div className="entry-value">
            {experience.data.startDate.value} 

            {
              experience.data.startDate.value !== '' && 
              experience.data.endDate.value !== ''
                ? ' - '
                : null
            }

            {experience.data.endDate.value}
          </div>
          <p className="entry-value">{experience.data.company.value}</p>
          <p className="entry-value">{experience.data.location.value}</p>
          <div className="card-buttons-wrapper">
            <button 
              className="card-button remove" 
              onClick={() => onDelete('experience', experience.id)}
            >
              <X/>
            </button>
            <button 
              className="card-button edit" 
              onClick={(e) => onEdit(e, experience)}
            >
              <PencilLine/>
            </button>
          </div>
      </Card>
      )}
    </ul>
  )
}