import validateProperty from './validation';
import {getTranslation} from '../translations';

export function newEducation(data, lang = 'en') {
  return {
    id: crypto.randomUUID(),
    data: {
      school: {
        title: getTranslation('education', 'school', lang),
        inputType: 'text',
        value: validateProperty(data, 'school')
      },
      course: {
        title: getTranslation('education', 'course', lang),
        inputType: 'text',
        value: validateProperty(data, 'course')
      },
      startDate: {
        title: getTranslation('education', 'startDate', lang),
        inputType: 'text',
        value: validateProperty(data, 'startDate')
      },
      endDate: {
        title: getTranslation('education', 'endDate', lang),
        inputType: 'text',
        value: validateProperty(data, 'endDate')
      }
    }
  };
}
