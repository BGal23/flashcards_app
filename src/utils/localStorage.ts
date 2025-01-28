export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const saveToLocalStorage = (key: string, item: string) => {
  return localStorage.setItem(key, JSON.stringify(item));
};
