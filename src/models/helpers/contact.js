import validateProperty from './validation';
import {getTranslation} from '../translations';

export function newContact(data, lang = 'en') {
  return {
    id: crypto.randomUUID(),
    data: {
      fullName: {
        title: getTranslation('contact', 'fullName', lang),
        inputType: 'text',
        value: validateProperty(data, 'fullName')
      },
      address: {
        title: getTranslation('contact', 'address', lang),
        inputType: 'text',
        value: validateProperty(data, 'address')
      },
      phone: {
        title: getTranslation('contact', 'phone', lang),
        inputType: 'tel',
        value: validateProperty(data, 'phone')
      },
      email: {
        title: getTranslation('contact', 'email', lang),
        inputType: 'email',
        value: validateProperty(data, 'email')
      },
      linkedIn: {
        title: getTranslation('contact', 'linkedIn', lang),
        inputType: 'url',
        value: validateProperty(data, 'linkedIn')
      },
      github: {
        title: getTranslation('contact', 'github', lang),
        inputType: 'url',
        value: validateProperty(data, 'github')
      }
    }
  };
}
