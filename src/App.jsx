import { useState } from "react"
import { Eye, Palette, Download, Pencil } from 'lucide-react';
import Header from "./components/Header"
import TabButton from "./components/TabButton";
import Toolbar from "./components/Toolbar";
import FormWrapper from "./components/FormWrapper";
import Input from "./components/Input";
import SkillsForm from "./components/SkillsForm";
import CVdata from "./models/CVdata";

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
  const [data, setData] = useState({...CVdata})

  function handleChangeTab(newTab) {
    setCurrentTab(newTab)
  };

  function handleSetData(data, dataId, newValue) {
    CVdata.updateValue(data, dataId, newValue)
    setData({...CVdata})
  }

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
        <FormWrapper title={'Contact information'}>
          {data.contact.map((eachField) =>
            eachField.data.map((data) =>
              <Input 
                key={data.id}
                label={data.label}
                type={data.inputType}
                value={data.value}
                onChange={(e) => handleSetData('contact', data.id, e.target.value)}
              />
            )
          )}
        </FormWrapper>
        <FormWrapper title={'Experience'}>
          {data.experience.map((eachField) =>
            eachField.data.map((data) =>
              <Input 
                key={data.id}
                label={data.label}
                type={data.inputType}
                value={data.value}
                onChange={(e) => handleSetData('contact', data.id, e.target.value)}
              />
            )
          )}
        </FormWrapper>
        <FormWrapper title={'Education'}>
          {data.education.map((eachField) =>
            eachField.data.map((data) =>
              <Input 
                key={data.id}
                label={data.label}
                type={data.inputType}
                value={data.value}
                onChange={(e) => handleSetData('contact', data.id, e.target.value)}
              />
            )
          )}
        </FormWrapper>
        <FormWrapper title={'Skills'} >
          <SkillsForm />
        </FormWrapper> 
      </main>
    </>
  )
}

export default App
