import { useState } from "react"
// import { newContact } from "./models/helpers/contact";
import { newEducation } from "./models/helpers/education";
import { newExperience } from "./models/helpers/experience";
import { newSkill } from "./models/helpers/skills";
import { newLanguage } from "./models/helpers/languages";

import Data from "./models/Data";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import DataController from "./components/DataController/DataController";
import ResumeElement from "./components/Resume/ResumeElement";
import resumePDF from "./components/Resume/ResumePDF";

function App() {
  const [resumeData, setResumeData] = useState(Data);

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

  function clearAllData() {
    Data.clearAllData();
    refreshData();
  }

  function displayPdf() {
    resumePDF(resumeData, false)
  }

  return (
    <>
    <Header
      onClear={clearAllData}
      onPreview={() => displayPdf(resumeData, false)}
      onDownload={() => resumePDF(resumeData, true)}
    />
    <main className="main">
      <section className="section-form">
        <Dropdown title={'Contact Information'}>
          {/* 
          The behavior of modifying the contact is quite different. Since there's only one entry, and it's impossible to
          create a new contact entry or delete the existing one (actually, it's possible, but i built it this way), the user is gonna always edit the current contact information instead.

          So in this case, the defaultEntry is the existing entry, and the save button is gonna edit it instead of creating a new one
          */}
          <DataController
            data={resumeData.contactInformation}
            dataName={'contactInformation'}
            defaultEntry={resumeData.contactInformation[0]}
            onSave={editEntry}
          />
        </Dropdown>
        <Dropdown title={'Experience'}>
          <DataController
            data={resumeData.experienceList}
            dataName={'experienceList'}
            defaultEntry={newExperience()}
            buttonText={'experience'}
            onSave={addEntry}
            onEdit={editEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
        <Dropdown title={'Education'}>
          <DataController
            data={resumeData.educationHistory}
            dataName={'educationHistory'}
            defaultEntry={newEducation()}
            buttonText={'education'}
            onSave={addEntry}
            onEdit={editEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
        <Dropdown title={'Skills'}>
          <DataController
            data={resumeData.skillSet}
            dataName={'skillSet'}
            defaultEntry={newSkill()}
            buttonText={'skill'}
            onSave={addEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
        <Dropdown title={'Languages'}>
          <DataController
            data={resumeData.spokenLanguages}
            dataName={'spokenLanguages'}
            defaultEntry={newLanguage()}
            buttonText={'language'}
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
