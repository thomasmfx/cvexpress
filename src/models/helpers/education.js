import validateProperty from './validation';

export function newEducation(data) {
  return {
    id: crypto.randomUUID(),
    data: {
      school: {
        title: 'Institution',
        inputType: 'text',
        value: validateProperty(data, 'school')
      },
      degree: {
        title: 'Degree',
        inputType: 'text',
        value: validateProperty(data, 'degree')
      },
      startDate: {
        title: 'Start date',
        inputType: 'date',
        value: validateProperty(data, 'startDate')
      },
      endDate: {
        title: 'End date',
        inputType: 'date',
        value: validateProperty(data, 'endDate')
      }
    }
  };
}
