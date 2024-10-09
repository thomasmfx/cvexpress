import { X } from "lucide-react"
import Card from "../Card"

export default function LanguagesList({data, onDelete}) {
  return (
    <ul className="cards-wrapper">
    {data.map((entry) => 
      <Card classes={['language-card']} key={entry.id}>  
        <p>
          {entry.data.language.value} - {entry.data.proficiency.value}
        </p>
        <button className="card-button remove" onClick={() => onDelete('spokenLanguages', entry.id)}>
          <X/>
        </button>
      </Card>
      )}
    </ul>
  )
}