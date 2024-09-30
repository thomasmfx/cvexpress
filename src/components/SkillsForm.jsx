import { X, Plus } from "lucide-react"
import { useState } from "react"
import CVdata from "../models/CVdata"
import Input from "./Input";

function SkillsList({skills, onDeleteSkill}) {
  return (
    <ul className="cards-wrapper">
    {skills.map((skill) => 
      <li className="card skill-card" key={skill.id}>  
        <span>{skill.title}</span>
        <button className="remove-card" onClick={() => onDeleteSkill(skill.id)}>
          <X style={{cursor: 'pointer'}}/>
        </button>
      </li>
      )}
    </ul>
  )
}

export default function SkillsForm() {
  const [skills, setSkills] = useState(CVdata.getData('skills'));
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [skillBeingAdded, setSkillBeingAdded] = useState('');

  function handleIsAddingSkill() {
    setIsAddingSkill(!isAddingSkill)
  }

  function handleSkillBeingAdded(e) {
    setSkillBeingAdded(e.target.value)
  }

  function handleSaveSkill(e) {
    e.preventDefault()
    CVdata.updateData('skills', [
      ...skills,
      {
        id: crypto.randomUUID(),
        title: skillBeingAdded
      }
    ])

    setSkillBeingAdded('');
    setSkills(CVdata.getData('skills'));
  }

  function handleDeleteSkill(itemId) {
    CVdata.updateData('skills', skills.filter(item => item.id !== itemId))
    setSkills(CVdata.getData('skills'));
  }

  return (
    <form className="form">
      <SkillsList 
        skills={skills} 
        onDeleteSkill={handleDeleteSkill}
      />
      {isAddingSkill 
        ?
        <>
          <Input
            className='input'
            label='Skill'
            type='text'
            value={skillBeingAdded}
            onChange={handleSkillBeingAdded}
          />
          <div className="typing">
            <button className="button-two" onClick={handleIsAddingSkill}>
              Cancel
            </button>
            <button className="button-one" onClick={handleSaveSkill}>
              Save
            </button>
          </div>
        </>
        : 
        <button className="button-one" onClick={handleIsAddingSkill}>
          <Plus />
          <span>Add skill</span>
        </button>
      }
    </form>
  )
}