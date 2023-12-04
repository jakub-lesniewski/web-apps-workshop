export function isPhoneNumber(string) {
  return /^\d{9}$/.test(string);
}
