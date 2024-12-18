import { newContact } from "./helpers/contact"
import { newEducation } from "./helpers/education"
import { newExperience } from "./helpers/experience"
import { newSkill } from "./helpers/skills"
import { newLanguage } from "./helpers/languages"

const Data = (() => {
  let storedLang = retrieveFromLocalStorage('language');
  let language = storedLang ? storedLang : 'en';

  let contact = getStoredOrDefault('contact', newContact());
  let education = getStoredOrDefault('education');
  let experience = getStoredOrDefault('experience');
  let skills = getStoredOrDefault('skills');
  let languages = getStoredOrDefault('languages');
  

  // Might want to use it to do some tests
  // let contact = getStoredOrDefault('contact', newContact({
  //   fullName: 'Thomas Moisés Fernandes',
  //   address: 'São Paulo, SP',
  //   phone: '(11) 94573-5684',
  //   email: 'thomasmoisesf@gmail.com',
  //   linkedIn: 'linkedin.com/in/thomas-moises-fernandes',
  //   github: 'github.com/thomasmfx'
  // }, language))
  
  // let education = getStoredOrDefault('education', newEducation({
  //   school: 'Fatec Mogi das Cruzes',
  //   course: 'Análise e Desenvolvimento de Sistemas',
  //   startDate: '08/2024',
  //   endDate: '07/2027',
  // }, language))
  
  // let experience = getStoredOrDefault('experience', newExperience({
  //   jobPosition: 'Software Engineer',
  //   company: 'Tech Solutions',
  //   location: 'São Paulo, Brazil',
  //   startDate: '10/2024',
  //   endDate: 'Atual',
  // }, language))
  
  // let skills = getStoredOrDefault('skills', newSkill({ 
  //   skill: 'React'
  // }, language))
  
  // let languages = getStoredOrDefault('languages', newLanguage({ 
  //   language: 'English', 
  //   proficiency: 'Fluent' 
  // }, language))

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

  function toggleLanguage() {
    this.language === 'en'
      ? this.language = 'pt'
      : this.language = 'en';
    saveToLocalStorage('language', this.language)
  }

  return {
    language,
    contact,
    education,
    experience,
    skills,
    languages,
    toggleLanguage,
    getDataList,
    getDataEntryById,
    addDataEntry,
    deleteDataEntry,
    editDataEntry,
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