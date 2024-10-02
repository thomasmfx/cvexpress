import validateProperty from './validation';

export function newContact(data) {
  return {
    id: crypto.randomUUID(),
    data: {
      firstName: {
        title: 'First name',
        inputType: 'text',
        value: validateProperty(data, 'firstName')
      },
      lastName: { 
        title: 'Last name',
        inputType: 'text',
        value: validateProperty(data, 'lastName')
      },
      address: {
        title: 'Address',
        inputType: 'text',
        value: validateProperty(data, 'address')
      },
      phone: {
        title: 'Phone',
        inputType: 'tel',
        value: validateProperty(data, 'phone')
      },
      email: {
        title: 'Email',
        inputType: 'email',
        value: validateProperty(data, 'email')
      },
      linkedIn: {
        title: 'LinkedIn',
        inputType: 'url',
        value: validateProperty(data, 'linkedIn')
      },
      github: {
        title: 'GitHub',
        inputType: 'url',
        value: validateProperty(data, 'github')
      }
    }
  };
}
