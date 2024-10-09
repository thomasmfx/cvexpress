import validateProperty from './validation';

export function newLanguage(data) {
  return {
    id: crypto.randomUUID(),
    data: {
      language: {
        title: 'Language',
        inputType: 'text',
        value: validateProperty(data, 'language'),
      },
      proficiency: {
        title: 'Proficiency',
        inputType: 'text',
        value: validateProperty(data, 'proficiency')
      }
    }
  };
}
