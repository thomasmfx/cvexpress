export function newEducation() {
  return {
    id: crypto.randomUUID(),
    data: [
      {
        id: crypto.randomUUID(),
        label: 'Institution',
        inputType: 'text',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'Course',
        inputType: 'text',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'Location',
        inputType: 'text',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'Start date',
        inputType: 'date',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'End date',
        inputType: 'date',
        value: ''
      }
    ]
  };
}