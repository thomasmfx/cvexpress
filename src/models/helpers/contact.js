export function newContact() {
  return {
    id: crypto.randomUUID(),
    data: [
      {
        id: crypto.randomUUID(),
        label: 'First name',
        inputType: 'text',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'Last name',
        inputType: 'text',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'Address',
        inputType: 'text',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'Phone',
        inputType: 'tel',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'Email',
        inputType: 'email',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'LinkedIn',
        inputType: 'url',
        value: ''
      },
      {
        id: crypto.randomUUID(),
        label: 'GitHub',
        inputType: 'url',
        value: ''
      }
    ]
  }
}