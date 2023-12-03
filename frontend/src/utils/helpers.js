export function isPhoneNumber(string) {
  return /^\d{9}$/.test(string);
}

export function isRootNumber(string) {
  return string === "573055986";
}
