import { hasEntries } from "../../helpers/helpers"
import { getFieldTranslation } from '../../models/translations'


function ListItem({className, children}) {
  return (
    <li className={className}>
      {children}
    </li>
  )
}

function Container({className, children}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default function Resume({data, isMobile}) {
  const contact = hasEntries(data.contact) 
  ? data.contact[0].data
  : data.contact
  const education = data.education;
  const experience = data.experience;
  const skills = data.skills;
  const languages = data.languages;

  let entriesCount = -1; // Gotta desconsider the name
  let bulletPointsCount = 1;
  Object.entries(contact).map(([key, value]) => 
    value.value != '' ? entriesCount++ : null
  )

  return (
    <div className={`resume ${isMobile ? 'resume-mobile' : ''}`}>
        {/* CONTACT */}
        {hasEntries(data.contact) && (
          <div className='section contact'>
            <p className='section-title contact-name'>{contact.fullName.value}</p>
            <div className='contact-info'>
              {Object.entries(contact).map(([key, value]) => {
                if (key !== 'fullName' && value.value !== '') {
                  return (
                    <div className="entry-wrapper" key={key}>
                      <p>
                        {value.value}
                        {bulletPointsCount++ < entriesCount && <span> • </span>}
                      </p>
                    </div>
                  )
                }
              }
              )}
            </div>
          </div>
        )}

        {/* EDUCATION */}
        {hasEntries(education) && (
          <div className='section section-layout-one'>
            <p className='section-title'>{getFieldTranslation('education', data.language).toUpperCase()}</p>
            <div className="entries-list">
              {education.map((education) =>
                <Container className='entry' key={education.id}>
                  <p className="entry-value">{education.data.school.value}</p>
                  <p className="entry-value"></p>
                  <p className="entry-value">{education.data.course.value}</p>
                  <p className="entry-value">
                    {education.data.startDate.value} 

                    {
                      education.data.startDate.value !== '' && 
                      education.data.endDate.value !== ''
                        ? ' - '
                        : null
                    }

                    {education.data.endDate.value}
                  </p>
                </Container>
              )}
            </div>  
          </div>
        )}

        {/* EXPERIENCE */}
        {hasEntries(experience) && (
          <div className='section section-layout-one'>
            <p className='section-title'>{getFieldTranslation('experience', data.language).toUpperCase()}</p>
            <div className="entries-list">
              {experience.map((experience) =>
                <Container className='entry' key={experience.id}>
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
                </Container>
              )}
            </div>
        </div>
        )}

        {/* SKILLS */}
        {hasEntries(skills) && (
          <div className='section skills section-list-layout'>
            <p className='section-title'>{getFieldTranslation('skills', data.language).toUpperCase()}</p>
            <ul className='entries-list'>
              {skills.map((skill) =>
                <ListItem className='list-item' key={skill.id}>
                  {skill.data.skill.value}
                </ListItem>
              )}
            </ul>
          </div>
        )}

        {/* LANGUAGES */}
        {hasEntries(languages) && (
          <div className='section section-list-layout'>
            <p className='section-title'>{getFieldTranslation('languages', data.language).toUpperCase()}</p>
            <ul className='entries-list'>
              {languages.map((language) =>
                <ListItem className='list-item' key={language.id}>
                  {language.data.language.value} - {language.data.proficiency.value}
                </ListItem>
              )}
            </ul>
          </div>
        )}
    </div>
  )
}