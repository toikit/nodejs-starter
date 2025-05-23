export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isValidUsername(username) {
  const regex = /^[a-zA-Z][a-zA-Z0-9_]{4,19}$/;
  return regex.test(username);
}

export function isValidVietnamesePhone(phone) {
  const regex = /^(0|\+84)[1-9][0-9]{8}$/;
  return regex.test(phone);
}