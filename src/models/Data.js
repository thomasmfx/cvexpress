import { newContact } from "./helpers/contact"
// import { newEducation } from "./helpers/education"
// import { newExperience } from "./helpers/experience"
// import { newSkill } from "./helpers/skills"
// import { newLanguage } from "./helpers/languages"

const Data = (() => {
  let contactInformation = getStoredOrDefault('contactInformation', newContact());
  let educationHistory = getStoredOrDefault('educationHistory');
  let experienceList = getStoredOrDefault('experienceList');
  let skillSet = getStoredOrDefault('skillSet');
  let spokenLanguages = getStoredOrDefault('spokenLanguages');
  

  // let contactInformation = getStoredOrDefault('contactInformation', newContact({
  //   fullName: 'Thomas Moisés Fernandes',
  //   address: 'São Paulo, SP',
  //   phone: '(11) 94573-5684',
  //   email: 'thomasmoisesf@gmail.com',
  //   linkedIn: 'linkedin.com/in/thomas-moises-fernandes',
  //   github: 'github.com/thomasmfx'
  // }))
  
  // let educationHistory = getStoredOrDefault('educationHistory', newEducation({
  //   school: 'Fatec Mogi das Cruzes',
  //   course: 'Análise e Desenvolvimento de Sistemas',
  //   startDate: '08/2024',
  //   endDate: '07/2027',
  // }))
  
  // let experienceList = getStoredOrDefault('experienceList', newExperience({
  //   jobPosition: 'Software Engineer',
  //   company: 'Tech Solutions',
  //   location: 'São Paulo, Brazil',
  //   startDate: '10/2024',
  //   endDate: 'Atual',
  // }))
  
  // let skillSet = getStoredOrDefault('skillSet', newSkill({ 
  //   skill: 'React'
  // }))
  
  // let spokenLanguages = getStoredOrDefault('spokenLanguages', newLanguage({ 
  //   language: 'English', 
  //   proficiency: 'Fluent' 
  // }))

  function getDataList(data) {
    return this[data];
  }

  function getDataEntryById(data, entryId) {
    return this[data].filter((data) => data.id === entryId).shift();
  }

  function addDataEntry(data, entry) {
    this[data].push(entry);
    saveToLocalStorage(data, this[data]);
  }

  function deleteDataEntry(data, entryId) {
    this[data] = this[data]
      .filter((entry) => entry.id !== entryId);
    saveToLocalStorage(data, this[data]);
  }

  function editDataEntry(data, entryId, newEntry) {
    this[data].map((entry) => {
      if (entry.id === entryId) entry.data = newEntry
    })
    saveToLocalStorage(data, this[data]);
  }

  function clearAllData() {
    this.contactInformation = [ newContact() ];
    this.educationHistory = [];
    this.experienceList = [];
    this.skillSet = [];
    this.spokenLanguages = [];
    // saveToLocalStorage('contactInformation', this.contactInformation);
    // saveToLocalStorage('educationHistory', this.educationHistory);
    // saveToLocalStorage('experienceList', this.experienceList);
    // saveToLocalStorage('skillSet', this.skillSet);
    // saveToLocalStorage('spokenLanguages', this.spokenLanguages);
  }

  return {
    contactInformation,
    educationHistory,
    experienceList,
    skillSet,
    spokenLanguages,
    getDataList,
    getDataEntryById,
    addDataEntry,
    deleteDataEntry,
    editDataEntry,
    clearAllData
  }
})();

function saveToLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

function retrieveFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

function getStoredOrDefault(storedName, replace) {
  let stored = retrieveFromLocalStorage(storedName)
  if (stored != undefined) return stored;
  if (replace != null) return [ replace ];
  return [];
}

export default Data