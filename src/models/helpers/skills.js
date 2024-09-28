export function newSkill(name) {
  return {
    id: crypto.randomUUID(),
    name: name
  }
}

// let skillsData = [
//   { id: crypto.randomUUID(), title: 'HTML' },
//   { id: crypto.randomUUID(), title: 'CSS' },
//   { id: crypto.randomUUID(), title: 'Javascript' },
//   { id: crypto.randomUUID(), title: 'Jest' },
//   { id: crypto.randomUUID(), title: 'Webpack' },
//   { id: crypto.randomUUID(), title: 'React' },
// ];