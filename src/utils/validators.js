export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isValidShortcode = (code) => /^[a-zA-Z0-9]{4,10}$/.test(code);
export const isValidMinutes = (min) => {
  const num = Number(min);
  return !isNaN(num) && num > 0 && num <= 30;
};
