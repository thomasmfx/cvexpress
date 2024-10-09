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
      course: {
        title: 'Course',
        inputType: 'text',
        value: validateProperty(data, 'course')
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
