import { PencilLine, X } from "lucide-react"
import Card from './Card'

export default function ExperienceList({data, onEdit, onDelete}) {
  return (
    <ul className="cards-wrapper">
      {data.map((experience) => 
        <Card classes={["experience-card"]} key={experience.id}>
          <p className="job-position">{experience.data.jobPosition.value}</p>
          <div className="date-info">
            <p>{experience.data.startDate.value}</p>
            &nbsp;-&nbsp;
            <p> {experience.data.endDate.value}</p>
          </div>
          <p className="company">{experience.data.company.value}</p>
          <p className="location">{experience.data.location.value}</p>
          <pre className="description">{experience.data.description.value.trim()}</pre>
          <div className="card-buttons-wrapper">
            <button className="card-button remove" onClick={() => onDelete(experience.id)}>
              <X/>
            </button>
            <button className="card-button edit" onClick={() => onEdit(experience.id)}>
              <PencilLine/>
            </button>
          </div>
      </Card>
      )}
    </ul>
  )
}