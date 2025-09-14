export function parseAddress(address, separator) {
  const parsedAddress = address.split(', ').slice(1).join(separator);
  return parsedAddress;
}

export function parseMileage(mileage) {
  const parsedMileage = mileage.toLocaleString('ua-UK') + ' km';
  return parsedMileage;
}

export function parseInputValue(value, text) {
  if (!value) return '';
  const formatedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return text + ' ' + formatedValue;
}

export function parseNumberFromSpaces(value) {
  return value.replace(/\s/g, '');
}
