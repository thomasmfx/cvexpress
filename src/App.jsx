import { useState } from "react"
import { Eye, Palette, Download, Pencil } from 'lucide-react';
import { newContact } from "./models/helpers/contact"
import { newEducation } from "./models/helpers/education"
import { newExperience } from "./models/helpers/experience"
import { newSkill } from "./models/helpers/skills"
import { newLanguage } from "./models/helpers/languages"
import Header from "./components/Header"
import TabButton from "./components/TabButton";
import Toolbar from "./components/Toolbar";
import Dropdown from "./components/Dropdown";
import SkillsList from "./components/SkillsList";
import Form from "./components/Form";
import Data from "./models/Data";
import ExperienceList from "./components/ExperienceList";

const tabs = [
  {
    name: 'edit-resume',
    icon: <Pencil color="#212529" size='28px'/>,
  },
  {
    name: 'edit-styles',
    icon: <Palette color="#212529" size='28px'/>
  },
  {
    name: 'download-resume',
    icon: <Download color="#212529" size='28px'/>
  },
  {
    name: 'view-resume',
    icon: <Eye color="#212529" size='28px'/>
  }
];

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Dropdown title={'Experience'}>
          <Form 
            data={'experienceList'}
            defaultData={newExperience()}
            listName='experience'
          />
        </Dropdown>
        <Dropdown title={'Education'}>
          <Form 
            data={'educationHistory'} 
            defaultData={newEducation()} 
            listName='education'
          />
        </Dropdown>
        <Dropdown title={'Skills'} >
          <Form 
            data={'skillSet'} 
            defaultData={newSkill()} 
            listName='skill'
          />
        </Dropdown> 
        <Dropdown title={'Languages'} >
          <Form 
            data={'spokenLanguages'} 
            defaultData={newLanguage()} 
            listName='language'
          />
        </Dropdown> 
      </main>
    </>
  )
}

export default App
