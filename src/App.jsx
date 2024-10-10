import { useState } from "react"
import Data from "./models/Data";
import Resume from "./components/Resume";
import Dropdown from "./components/Dropdown";
import ContactForm from "./components/Contact/ContactForm";
import ExperienceForm from "./components/Experience/ExperienceForm";
import EducationForm from "./components/Education/EducationForm";
import SkillsForm from "./components/Skills/SkillsForm";
import LanguagesForm from "./components/Languages/LanguagesForm";
import Header from "./components/Header";

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

  return (
    <>
    <Header
      onClear={clearAllData}
    />
    <main className="main">
      <section className="section-form">
        <Dropdown title={'Contact Information'}>
          <ContactForm
            contactInfo={resumeData.contactInformation[0]}
            onSave={editEntry}
          />
        </Dropdown>
        <Dropdown title={'Experience'}>
          <ExperienceForm
            data={resumeData.experienceList}
            onSave={addEntry}
            onEdit={editEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
        <Dropdown title={'Education'}>
          <EducationForm
            data={resumeData.educationHistory}
            onSave={addEntry}
            onEdit={editEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
        <Dropdown title={'Skills'}>
          <SkillsForm
            data={resumeData.skillSet}
            onSave={addEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
        <Dropdown title={'Languages'}>
          <LanguagesForm
            data={resumeData.spokenLanguages}
            onSave={addEntry}
            onDelete={deleteEntry}
          />
        </Dropdown>
      </section>
      <section className="section-resume">
        <Resume
          data={resumeData}
        />
      </section>
    </main>
    </>
  )
}

export default App
