export enum KEYS {
  SAMPLE_TEXT = "SAMPLE_TEXT",
}

export function getItem(Key: any) {
  const value = localStorage.getItem(Key);
  if (value != null) {
    return value;
  }
  return "";
}

export function removeItem(key: KEYS) {
  localStorage.removeItem(key);
}

export function setItem(key: any, value: any) {
  localStorage.setItem(key, value);
}