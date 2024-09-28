import { newContact } from "./helpers/contact"
import { newEducation } from "./helpers/education"
import { newExperience } from "./helpers/experience"
import { newSkill } from "./helpers/skills"
import { newLanguage } from "./helpers/languages"

const CVdata = (() => {
  let contact = checkStored('contact', newContact())
  let experience = checkStored('experience', newExperience())
  let education = checkStored('education', newExperience())
  let skills = [  ];
  let languages = [  ];

  function getData(data) {
    let storedLocal = retriveStore(`${data}`);
    if (storedLocal != undefined) this.skills = storedLocal;
    return this[`${data}`]
  }

  function updateData(data, newData) {
    this[`${data}`] = newData;
    store(data, this[`${data}`])
  }

  function updateValue(data, fieldId, newValue) {
    this[`${data}`].map((eachField) => {
      eachField.data.map((field) => {
        if (field.id === fieldId) {
          return field.value = newValue
        }
      })
    })
    store(data, this[`${data}`])
  }

  return {
    contact,
    experience,
    education,
    skills,
    languages,
    getData,
    updateData,
    updateValue
  }
})();

function store(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

function retriveStore(name) {
  return JSON.parse(localStorage.getItem(name));
}

function checkStored(storedName, replace) {
  let stored = retriveStore(storedName)
  if (stored != undefined) return stored;
  return [ replace ];
}

export default CVdata