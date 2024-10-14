export default function validateProperty(data, property) {
  if (typeof data !== 'object' || data == undefined) return '';
  if (Object.hasOwn(data, property)) {
    if (Object.hasOwn(data[property], 'value')) {
      return data[property].value
    }

    return data[property]
  }
  return '';
}
