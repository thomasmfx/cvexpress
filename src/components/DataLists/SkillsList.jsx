import { X } from "lucide-react"
import Card from "../Card";

export default function SkillsList({data, onDelete}) {
  return (
    <ul className="cards-wrapper">
    {data.map((skill) => 
      <Card classes={['skill-card']} key={skill.id}>  
          <p>{skill.data.skill.value}</p>
          <button 
            className="card-button remove" 
            onClick={() => onDelete('skillSet', skill.id)}
          >
            <X/>
          </button>
      </Card>
      )}
    </ul>
  )
}