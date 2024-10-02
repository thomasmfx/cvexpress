import { X } from "lucide-react"
import Card from "./Card";

export default function SkillsList({data, onDelete}) {
  return (
    <ul className="cards-wrapper">
    {data.map((skill) => 
      <Card classes={['skill-card']} key={skill.id}>  
        <span>{skill.data.skill.value}</span>
          <button className="card-button remove" onClick={() => onDelete(skill.id)}>
            <X/>
          </button>
      </Card>
      )}
    </ul>
  )
}