export function parseAddress(address) {
  const parsedAddress = address.split(', ').slice(1).join(' | ');
  return parsedAddress;
}
