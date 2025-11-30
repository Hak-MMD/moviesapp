export function getFromStorage(key) {
  const stored = localStorage.getItem(key);
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveToStorage(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
}
