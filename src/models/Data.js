import { newContact } from "./helpers/contact"
import { newEducation } from "./helpers/education"
import { newExperience } from "./helpers/experience"
import { newSkill } from "./helpers/skills"
import { newLanguage } from "./helpers/languages"

const Data = (() => {
  let contactInformation = getStoredOrDefault('contactInformation', newContact({
    fullName: 'João Silva',
    address: 'Rua Exemplo, 123, São Paulo, Brazil',
    phone: '+55 11 98765-4321',
    email: 'joao.silva@example.com',
    linkedIn: 'https://www.linkedin.com/in/joao-silva',
    github: 'https://github.com/joaosilva'
  }))
  
  let educationHistory = getStoredOrDefault('educationHistory', newEducation({
    school: 'Universidade de São Paulo (USP)',
    degree: 'Bacharelado em Ciência da Computação',
    startDate: 'Fevereiro 2017',
    endDate: 'Dezembro 2020',
    location: 'São Paulo, Brazil'
  }))
  
  let experienceList = getStoredOrDefault('experienceList', newExperience({
    jobPosition: 'Software Engineer',
    company: 'Tech Solutions',
    location: 'São Paulo, Brazil',
    description: `
    - Desenvolvimento de soluções de software escaláveis.
    - Manutenção de sistemas de backend em Node.js e Python.
    - Integração de APIs RESTful e SOAP.
    - Colaboração com equipes de front-end e design para melhorias no produto.
    - Otimização de consultas SQL e manutenção de banco de dados MySQL.
    - Implementação de testes automatizados para garantir a qualidade do código.
    `,
    startDate: 'Março 2021',
    endDate: 'Atual',
  }))
  
  let skillSet = getStoredOrDefault('skillSet', newSkill({ 
    skill: 'React' 
  }))
  
  let spokenLanguages = getStoredOrDefault('spokenLanguages', newLanguage({ 
    language: 'English', 
    proficiency: 'Fluente' 
  }))
  

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
      if (entry.id === entryId) entry.data = newEntry.data
    })
    saveToLocalStorage(data, this[data]);
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
  return [ replace ];
}

export default Data