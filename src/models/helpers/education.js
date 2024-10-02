import validateProperty from './validation';

export function newEducation(data) {
  return {
    id: crypto.randomUUID(),
    data: {
      institution: {
        title: 'Institution',
        inputType: 'text',
        value: validateProperty(data, 'institution')
      },
      course: {
        title: 'Course',
        inputType: 'text',
        value: validateProperty(data, 'course')
      },
      location: {
        title: 'Location',
        inputType: 'text',
        value: validateProperty(data, 'location')
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
