import { useState } from "react"
import { Eye, Palette, Download, Pencil } from 'lucide-react';
import Header from "./components/Header"
import TabButton from "./components/TabButton";

const tabs = ['edit-resume', 'edit-styles', 'download-resume', 'view-resume']

function App() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  function handleChangeTab(newTab) {
    setCurrentTab(newTab)
  };

  return (
    <>
      <Header>
        <TabButton
          tab={tabs[0]}
          isCurrentTab={currentTab === tabs[0]} 
          handleClick={() => handleChangeTab(tabs[0])}
        >
          <Pencil />
        </TabButton>
        <TabButton 
          tab={tabs[1]}
          isCurrentTab={currentTab === tabs[1]} 
          handleClick={() => handleChangeTab(tabs[1])}
        >
          <Palette />
        </TabButton>
        <TabButton
          tab={tabs[2]}
          isCurrentTab={currentTab === tabs[2]} 
          handleClick={() => handleChangeTab(tabs[2])}
        >
          <Download />
        </TabButton>
        <TabButton 
          tab={tabs[3]}
          isCurrentTab={currentTab === tabs[3]} 
          handleClick={() => handleChangeTab(tabs[3])}
        >
          <Eye />
        </TabButton>
      </Header>
    </>
  )
}

export default App
