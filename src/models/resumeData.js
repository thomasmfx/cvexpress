let contactInformation = [
  {
    label: 'First name',
    inputType: 'text',
    value: ''
  },
  {
    label: 'Last name',
    inputType: 'text',
    value: ''
  },
  {
    label: 'Address',
    inputType: 'text',
    value: ''
  },
  {
    label: 'Phone',
    inputType: 'tel',
    value: ''
  },
  {
    label: 'Email',
    inputType: 'email',
    value: ''
  },
  {
    label: 'LinkedIn',
    inputType: 'url',
    value: ''
  },
  {
    label: 'GitHub',
    inputType: 'url',
    value: ''
  }
];

let experience = [
  {
    label: 'Job position',
    inputType: 'text',
    value: ''
  },
  {
    label: 'Company',
    inputType: 'text',
    value: ''
  },
  {
    label: 'Location',
    inputType: 'text',
    value: ''
  },
  {
    label: 'Job description',
    inputType: 'textarea',
    value: ''
  },
  {
    label: 'Start date',
    inputType: 'date',
    value: ''
  },
  {
    label: 'End date',
    inputType: 'date',
    value: ''
  }
];

let education = [
  {
    label: 'Institution',
    inputType: 'text',
    value: ''
  },
  {
    label: 'Course',
    inputType: 'text',
    value: ''
  },
  {
    label: 'Location',
    inputType: 'text',
    value: ''
  },
  {
    label: 'Start date',
    inputType: 'date',
    value: ''
  },
  {
    label: 'End date',
    inputType: 'date',
    value: ''
  }
];

let skillsData = [
  { id: crypto.randomUUID(), title: 'HTML' },
  { id: crypto.randomUUID(), title: 'CSS' },
  { id: crypto.randomUUID(), title: 'Javascript' },
  { id: crypto.randomUUID(), title: 'Jest' },
  { id: crypto.randomUUID(), title: 'Webpack' },
  { id: crypto.randomUUID(), title: 'React' },
];

function getSkillsData() {
  let storedLocal = localStorage.getItem('skills');
  if (storedLocal) return JSON.parse(storedLocal);
  return skillsData;
}

function updateSkillsData(newSkillsData) {
  skillsData = newSkillsData;
  localStorage.setItem('skills', JSON.stringify(skillsData));
}

let languages = [];

export  { 
  contactInformation,
  experience,
  education,
  languages,
  getSkillsData,
  updateSkillsData
}