import { X, Plus } from "lucide-react"
import { useState } from "react"
import { getSkillsData, updateSkillsData }  from "../models/resumeData"

function SkillsList({skills, onDeleteSkill}) {
  return (
    <ul className="skills">
    {skills.map((skill) => 
      <li className="skill-card" key={skill.id}>  
        <span>{skill.title}</span>
        <button className="remove-skill" onClick={() => onDeleteSkill(skill.id)}>
          <X style={{cursor: 'pointer'}} />
        </button>
      </li>
      )}
    </ul>
  )
}

export default function SkillsForm() {
  const [skills, setSkills] = useState(getSkillsData());
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
    updateSkillsData([
      ...skills,
      {
        id: crypto.randomUUID(),
        title: skillBeingAdded
      }
    ])

    setSkillBeingAdded('');
    setSkills(getSkillsData());
  }

  function handleDeleteSkill(itemId) {
    updateSkillsData(skills.filter(item => item.id !== itemId))
    setSkills(getSkillsData());
  }

  return (
    <div className="skills-form">
      <SkillsList 
        skills={skills} 
        onDeleteSkill={handleDeleteSkill}
      />
      {isAddingSkill 
        ?
        <>
          <label className="input-wrapper skill-input">
              <span className="input-label">Skill</span>
              <input className="input" type='text' value={skillBeingAdded} onChange={handleSkillBeingAdded}/>
          </label>
          <div className="is-adding-skill">
            <button className="skills-button cancel-skill" onClick={handleIsAddingSkill}>
              Cancel
            </button>
            <button className="skills-button save-skill" onClick={handleSaveSkill}>
              Save
            </button>
          </div>
        </>
        : 
        <button className="skills-button add-skill" onClick={handleIsAddingSkill}>
          <Plus />
          <span>Add skill</span>
        </button>
      }
    </div>
  )
}