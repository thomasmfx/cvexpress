import { useState } from "react"
import { Eye, Palette, Download, Pencil } from 'lucide-react';
import { contactInformation, experience, education } from "./models/resumeData";
import Header from "./components/Header"
import TabButton from "./components/TabButton";
import Toolbar from "./components/Toolbar";
import Form from "./components/Form";
import Input from "./components/Input";
import SkillsForm from "./components/SkillsForm";

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
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  function handleChangeTab(newTab) {
    setCurrentTab(newTab)
  };

  return (
    <>
      <Toolbar>
        {tabs.map((tab) => 
          <TabButton
            key={tab.name}
            tab={tabs.name}
            isCurrentTab={currentTab === tab.name} 
            handleClick={() => handleChangeTab(tab.name)}
          >
            {tab.icon}
          </TabButton>
        )}
      </Toolbar>
      <Header />
      <main className="main">
        <Form title={'Contact information'} >
          {contactInformation.map((field) =>
            <Input
              key={field.label} 
              label={field.label}
              type={field.inputType}
            />
          )}
        </Form>
        <Form title={'Experience'} >
          {experience.map((field) =>
            <Input
              key={field.label} 
              label={field.label}
              type={field.inputType}
            />
          )}
        </Form>
        <Form title={'Education'} >
          {education.map((field) =>
            <Input
              key={field.label} 
              label={field.label}
              type={field.inputType}
            />
          )}
        </Form>
        <Form title={'Skills'} >
          <SkillsForm />
        </Form>
      </main>
    </>
  )
}

export default App
