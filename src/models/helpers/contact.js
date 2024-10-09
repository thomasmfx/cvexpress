import validateProperty from './validation';

export function newContact(data) {
  return {
    id: crypto.randomUUID(),
    data: {
      fullName: {
        title: 'Full name',
        inputType: 'text',
        value: validateProperty(data, 'fullName')
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
        inputType: 'text',
        value: validateProperty(data, 'linkedIn')
      },
      github: {
        title: 'GitHub',
        inputType: 'text',
        value: validateProperty(data, 'github')
      }
    }
  };
}
