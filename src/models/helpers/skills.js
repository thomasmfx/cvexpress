import validateProperty from './validation';
import {getTranslation} from '../translations';

export function newSkill(data, lang = 'en') {
  return {
    id: crypto.randomUUID(),
    data: {
      skill: {
        title: getTranslation('skills', 'skill', lang),
        inputType: 'text',
        value: validateProperty(data, 'skill')
      }
    }
  };
}
