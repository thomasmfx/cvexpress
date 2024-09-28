export function newExperience() {
  return {
    id: crypto.randomUUID(),
    data: [
      {
        id: crypto.randomUUID(),
        label: 'Job position',
        inputType: 'text',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'Company',
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
        label: 'Job description',
        inputType: 'textarea',
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
  }
}