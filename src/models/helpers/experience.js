import validateProperty from './validation';

export function newExperience(data) {
  return {
    id: crypto.randomUUID(),
    data: {
      jobPosition: {
        title: 'Job position',
        inputType: 'text',
        value: validateProperty(data, 'jobPosition')
      },
      company: {
        title: 'Company',
        inputType: 'text',
        value: validateProperty(data, 'company')
      },
      location: {
        title: 'Location',
        inputType: 'text',
        value: validateProperty(data, 'location')
      },
      startDate: {
        title: 'Start date',
        inputType: 'text',
        value: validateProperty(data, 'startDate')
      },
      endDate: {
        title: 'End date',
        inputType: 'text',
        value: validateProperty(data, 'endDate')
      }
    }
  };
}
