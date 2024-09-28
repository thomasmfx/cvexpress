export function newLanguage(language, proficiency) {
  return {
    id: crypto.randomUUID(),
    language: language,
    proficiency: proficiency
  }
}