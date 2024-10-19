import { PencilLine, X } from "lucide-react"
import Card from '../Card'

export default function EducationList({data, onEdit, onDelete}) {
  return (
    <ul className="cards-wrapper">
      {data.map((education) => 
        <Card classes={["education-card"]} key={education.id}>
          <p className="school">{education.data.school.value}</p>
          <p className="course">{education.data.course.value}</p>
          <p className="date-info">
            {education.data.startDate.value} - {education.data.endDate.value}
          </p>
          <div className="card-buttons-wrapper">
            <button 
              className="card-button remove" 
              onClick={() => onDelete('education', education.id)}
            >
              <X/>
            </button>
            <button 
              className="card-button edit" 
              onClick={(e) => onEdit(e, education)}
            >
              <PencilLine/>
            </button>
          </div>
      </Card>
      )}
    </ul>
  )
}