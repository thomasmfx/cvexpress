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

export default function Resume({data}) {
  let contact = data.contactInformation
  hasEntries(contact)
  ? contact = contact[0].data
  : null
  const educationHistory = data.educationHistory;
  const experienceList = data.experienceList;
  const skills = data.skillSet;
  const languages = data.spokenLanguages;

  return (
    <div className='pdf'>
        {/* CONTACT */}
        {hasEntries(data.contactInformation)
        ? (
          <div className='contact'>
            <p className='name highlight'>{contact.fullName.value}</p>
            <div className='info'>
              {Object.entries(contact).map(([key, value]) =>
                key !== 'fullName' && value.value !== ''
                ? <p className={`contact-text ${key}`} key={key}>
                    {value.value}
                  </p>
                : null
              )}
            </div>
          </div>
        )
        : ( 
          null
        )
        }

        {/* EDUCATION */}
        {hasEntries(educationHistory)
        ? (
          <div className='section education-history'>
            <p className='section-title highlight'>EDUCATION</p>
            <div className="education-list">
              {educationHistory.map((education) =>
                <Container className='education' key={education.id}>
                  <p className="school">{education.data.school.value}</p>
                  <p className="course">{education.data.course.value}</p>
                  <p className="date-info">
                    {education.data.startDate.value} - {education.data.endDate.value}
                  </p>
                </Container>
              )}
            </div>  
          </div>
        )
        : (
          null
        )
        }

        {/* EXPERIENCE */}
        {hasEntries(experienceList)
        ? (
          <div className='section experience'>
            <p className='section-title highlight'>EXPERIENCE</p>
            <div className="experiences">
              {experienceList.map((experience) =>
                <Container className='experience' key={experience.id}>
                    <p className="job-position">{experience.data.jobPosition.value}</p>
                    <div className="date-info">
                      <p>{experience.data.startDate.value}</p>
                      &nbsp;-&nbsp;
                      <p> {experience.data.endDate.value}</p>
                    </div>
                    <p className="company">{experience.data.company.value}</p>
                    <p className="location">{experience.data.location.value}</p>
                </Container>
              )}
            </div>
        </div>
        )
        : (
          null
        )
        }

        {/* SKILLS */}
        {hasEntries(skills)
        ? (
          <div className='section skills'>
            <p className='section-title highlight'>SKILLS</p>
            <ul className='skills-list'>
              {skills.map((skill) =>
                <ListItem className='skill' key={skill.id}>
                  {skill.data.skill.value}
                </ListItem>
              )}
            </ul>
          </div>
        )
        : (
          null
        )
        }

        {/* LANGUAGES */}
        {hasEntries(languages)
        ? (
          <div className='section languages'>
            <p className='section-title highlight'>LANGUAGES</p>
            <ul className='languages-list'>
              {languages.map((language) =>
                <ListItem className='language' key={language.id}>
                  {language.data.language.value} - {language.data.proficiency.value}
                </ListItem>
              )}
            </ul>
          </div>
        )
        : (
          null
        )
        }
    </div>
  )
}

function hasEntries(array) {
  return array.length > 0 ? true : false;
}