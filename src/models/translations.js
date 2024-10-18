const translations = {
  contact: {
    title: {
      en: 'Contact Information',
      pt: 'Informações de Contato'
    },
    data: {
      fullName: {
        en: 'Full name',
        pt: 'Nome completo',
      },
      address: {
        en: 'Address',
        pt: 'Endereço',
      },
      phone: {
        en: 'Phone',
        pt: 'Telefone',
      },
      email: {
        en: 'Email',
        pt: 'Email',
      },
      linkedIn: {
        en: 'LinkedIn',
        pt: 'LinkedIn',
      },
      github: {
        en: 'GitHub',
        pt: 'GitHub',
      },
    }
  },
  education: {
    title: {
      en: 'Education',
      pt: 'Educação'
    },
    data: {
      school: {
          en: 'Institution',
        pt: 'Instituição',
      },
      course: {
        en: 'Course',
        pt: 'Curso',
      },
      startDate: {
        en: 'Start date',
        pt: 'Data de início',
      },
      endDate: {
        en: 'End date',
        pt: 'Data de término',
      },
    }
  },
  experience: {
    title: {
      en: 'Experiences',
      pt: 'Experiências'
    },
    data: {
      jobPosition: {
          en: 'Job position',
          pt: 'Cargo',
        },
      company: {
        en: 'Company',
        pt: 'Empresa',
      },
      location: {
        en: 'Location',
        pt: 'Localização',
      },
      startDate: {
        en: 'Start date',
        pt: 'Data de início',
      },
      endDate: {
        en: 'End date',
        pt: 'Data de término',
      },
    }
  },
  languages: {
    title: {
      en: 'Languages',
      pt: 'Idiomas'
    },
    data: {
      language: {
        en: 'Language',
        pt: 'Idioma',
      },
      proficiency: {
        en: 'Proficiency',
        pt: 'Proficiência',
      },
    }
  },
  skills: {
    title: {
      en: 'Skills',
      pt: 'Habilidades'
    },
    data: {
      skill: {
        en: 'Skill',
        pt: 'Habilidade',
      },
    }
  },
};

export function getTranslation(category, key, lang) {
  return translations[category]['data'][key][lang];
}

export function getFieldTranslation(field, lang) {
  return translations[field]['title'][lang];
}
