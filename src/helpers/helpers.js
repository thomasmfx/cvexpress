export function hasEntries(array) {
  return array.length > 0 ? true : false;
}

export function getDefaultIfEntries(array, defaultData) {
  return hasEntries(array) ? defaultData : null;
}