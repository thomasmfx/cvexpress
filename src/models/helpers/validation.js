export default function validateProperty(data, property) {
  if (typeof data !== 'object' || data == undefined) return '';
  if (data.hasOwnProperty(property)) {
    if (data[property].hasOwnProperty('value')) {
      return data[property].value
    }

    return data[property]
  }
  return '';
}
