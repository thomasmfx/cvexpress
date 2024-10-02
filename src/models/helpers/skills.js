import validateProperty from './validation';

export function newSkill(data) {
  return {
    id: crypto.randomUUID(),
    data: {
      skill: {
        title: 'Skill',
        inputType: 'text',
        value: validateProperty(data, 'skill')
      }
    }
  };
}