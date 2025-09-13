export function parseAddress(address, separator) {
  const parsedAddress = address.split(', ').slice(1).join(separator);
  return parsedAddress;
}

export function parseMileage(mileage) {
  const parsedMileage = mileage.toLocaleString('ua-UK') + ' km';
  return parsedMileage;
}
