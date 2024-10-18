import { useState } from "react"
// import { newContact } from "./models/helpers/contact";
import { newEducation } from "./models/helpers/education";
import { newExperience } from "./models/helpers/experience";
import { newSkill } from "./models/helpers/skills";
import { newLanguage } from "./models/helpers/languages";
import { getFieldTranslation } from "./models/translations";

import Data from "./models/Data";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import DataController from "./components/DataController/DataController";
import ResumeElement from "./components/Resume/ResumeElement";
import resumePDF from "./components/Resume/ResumePDF";

function App() {
  const [resumeData, setResumeData] = useState(Data);
  const language = resumeData.language;

  function refreshData() {
    setResumeData({...Data});
  }
 
  function addEntry(data, entry) {
    Data.addDataEntry(data, entry);
    refreshData();
  }

  function editEntry(data, entryId, newEntry) {
    Data.editDataEntry(data, entryId, newEntry.data);
    refreshData();
  }

  function deleteEntry(data, entryId) {
    Data.deleteDataEntry(data, entryId);
    refreshData();
  }

  function toggleLanguage() {
    Data.toggleLanguage();
    refreshData();
  }

  return (
    <>
    <Header
      language={language}
      onToggleLanguage={toggleLanguage}
      onDownload={() => resumePDF(resumeData, true)}
    />
    <main className="main">
      <section className="section-form">
        <Dropdown title={getFieldTranslation('contact', language)}>
          {/* 
          The behavior of modifying the contact is quite different. Since there's only one entry, and it's impossible to
          create a new contact entry or delete the existing one (actually, it's possible, but i built it this way), the user is gonna always edit the current contact information instead.

          So in this case, the defaultEntry is the existing entry, and the save button is gonna edit it instead of creating a new one
          */}
          <DataController
            language={language}
            data={resumeData.contact}
            dataName={'contact'}
            defaultEntry={resumeData.contact[0]}
            onSave={editEntry}
          />
        </Dropdown>
        <Dropdown title={getFieldTranslation('education', language)}>
          <DataController
            language={language}
            data={resumeData.education}
            dataName={'education'}
            defaultEntry={newEducation()}
            buttonText={language === 'en' ? 'course' : 'curso'}
            onSave={addEntry}
            onEdit={editEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
        <Dropdown title={getFieldTranslation('experience', language)}>
          <DataController
            language={language}
            data={resumeData.experience}
            dataName={'experience'}
            defaultEntry={newExperience()}
            buttonText={language === 'en' ? 'experience' : 'experiência'}
            onSave={addEntry}
            onEdit={editEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
        <Dropdown title={getFieldTranslation('skills', language)}>
          <DataController
            language={language}
            data={resumeData.skills}
            dataName={'skills'}
            defaultEntry={newSkill()}
            buttonText={language === 'en' ? 'skill' : 'habilidade'}
            onSave={addEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
        <Dropdown title={getFieldTranslation('languages', language)}>
          <DataController
            language={language}
            data={resumeData.languages}
            dataName={'languages'}
            defaultEntry={newLanguage()}
            buttonText={language === 'en' ? 'language' : 'idioma'}
            onSave={addEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
      </section>
      <section className="section-resume">
        <ResumeElement
          data={resumeData}
        />
      </section>
    </main>
    </>
  )
}

export default App
