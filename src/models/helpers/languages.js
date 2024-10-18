import validateProperty from './validation';
import {getTranslation} from '../translations';

export function newLanguage(data, lang = 'en') {
  return {
    id: crypto.randomUUID(),
    data: {
      language: {
        title: getTranslation('languages', 'language', lang),
        inputType: 'text',
        value: validateProperty(data, 'language'),
      },
      proficiency: {
        title: getTranslation('languages', 'proficiency', lang),
        inputType: 'text',
        value: validateProperty(data, 'proficiency')
      }
    }
  };
}
