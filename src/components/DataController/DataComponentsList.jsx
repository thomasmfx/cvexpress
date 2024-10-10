import ContactList from "../DataLists/ContactList"
import EducationList from "../DataLists/EducationList"
import ExperienceList from "../DataLists/ExperienceList"
import SkillsList from "../DataLists/SkillsList"
import LanguagesList from "../DataLists/LanguagesList"

export default function getDataComponentsList(data, dataName, onEdit, onDelete) {
  switch (dataName) {
    case 'contactInformation':
      return  (
        <ContactList
          data={data} 
        />
      )
    case 'educationHistory':
      return  (
        <EducationList
          data={data} 
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )
    case 'experienceList':
      return  (
        <ExperienceList
          data={data}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )
    case 'skillSet':
      return  (
        <SkillsList
          data={data}
          onDelete={onDelete}
        />
      )
    case 'spokenLanguages':
      return  (
        <LanguagesList
          data={data}
          onDelete={onDelete}
        />
      )
    default:
      return null
  }
}