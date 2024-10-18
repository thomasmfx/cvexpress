import { hasEntries } from "../../helpers/helpers"

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
  const contact = hasEntries(data.contactInformation) 
  ? data.contactInformation[0].data
  : data.contactInformation
  const educationHistory = data.educationHistory;
  const experienceList = data.experienceList;
  const skills = data.skillSet;
  const languages = data.spokenLanguages;

  return (
    <div className={`resume ${isMobile ? 'resume-mobile' : ''}`}>
        {/* CONTACT */}
        {hasEntries(data.contactInformation) && (
          <div className='section contact'>
            <p className='section-title contact-name'>{contact.fullName.value}</p>
            <div className='contact-info'>
              {Object.entries(contact).map(([key, value], index) => {
                if (key !== 'fullName' && value.value !== '') {
                  if (value.inputType === 'url') {
                    return (
                      <div className="entry-wrapper" key={key}>
                        <a className={'contact-link'} href={value.value}>
                          {value.value}
                        </a>
                        {index < 5 && <span> • </span>}
                      </div>
                    );
                  };

                  return (
                    <div className="entry-wrapper" key={key}>
                      <p>
                        {value.value}
                        {index < 5 && <span> • </span>}
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
        {hasEntries(educationHistory) && (
          <div className='section section-layout-one'>
            <p className='section-title'>EDUCATION</p>
            <div className="entries-list">
              {educationHistory.map((education) =>
                <Container className='entry' key={education.id}>
                  <p className="entry-value">{education.data.school.value}</p>
                  <p className="entry-value"></p>
                  <p className="entry-value">{education.data.course.value}</p>
                  <p className="entry-value">
                    {education.data.startDate.value} - {education.data.endDate.value}
                  </p>
                </Container>
              )}
            </div>  
          </div>
        )}

        {/* EXPERIENCE */}
        {hasEntries(experienceList) && (
          <div className='section section-layout-one'>
            <p className='section-title'>EXPERIENCE</p>
            <div className="entries-list">
              {experienceList.map((experience) =>
                <Container className='entry' key={experience.id}>
                    <p className="entry-value">{experience.data.jobPosition.value}</p>
                    <div className="entry-value">
                      <p>{experience.data.startDate.value}</p>
                      &nbsp;-&nbsp;
                      <p> {experience.data.endDate.value}</p>
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
            <p className='section-title'>SKILLS</p>
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
            <p className='section-title'>LANGUAGES</p>
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