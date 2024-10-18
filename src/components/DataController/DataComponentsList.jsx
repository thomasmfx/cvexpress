import ContactList from "../DataLists/ContactList"
import EducationList from "../DataLists/EducationList"
import ExperienceList from "../DataLists/ExperienceList"
import SkillsList from "../DataLists/SkillsList"
import LanguagesList from "../DataLists/LanguagesList"

export default function getDataComponentsList(data, dataName, onEdit, onDelete) {
  switch (dataName) {
    case 'contact':
      return  (
        <ContactList
          data={data} 
        />
      )
    case 'education':
      return  (
        <EducationList
          data={data} 
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )
    case 'experience':
      return  (
        <ExperienceList
          data={data}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )
    case 'skills':
      return  (
        <SkillsList
          data={data}
          onDelete={onDelete}
        />
      )
    case 'languages':
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