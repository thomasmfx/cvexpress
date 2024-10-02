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
      description: {
        title: 'Description',
        inputType: 'textarea',
        value: validateProperty(data, 'description')
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
