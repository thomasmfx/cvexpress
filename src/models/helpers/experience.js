import validateProperty from './validation';
import {getTranslation} from '../translations';

export function newExperience(data, lang = 'en') {
  return {
    id: crypto.randomUUID(),
    data: {
      jobPosition: {
        title: getTranslation('experience', 'jobPosition', lang),
        inputType: 'text',
        value: validateProperty(data, 'jobPosition')
      },
      company: {
        title: getTranslation('experience', 'company', lang),
        inputType: 'text',
        value: validateProperty(data, 'company')
      },
      location: {
        title: getTranslation('experience', 'location', lang),
        inputType: 'text',
        value: validateProperty(data, 'location')
      },
      startDate: {
        title: getTranslation('experience', 'startDate', lang),
        inputType: 'text',
        value: validateProperty(data, 'startDate')
      },
      endDate: {
        title: getTranslation('experience', 'endDate', lang),
        inputType: 'text',
        value: validateProperty(data, 'endDate')
      }
    }
  };
}
