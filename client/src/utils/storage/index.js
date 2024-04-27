const saveDataStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getDataStorage = (key) => {
  const dataStorage = localStorage.getItem(key);
  return dataStorage ? JSON.parse(dataStorage) : null;
};

const removeDataStorage = (key) => {
  localStorage.removeItem(key);
};

const updateAccess = (key) => {
  let dataStorage = getDataStorage(key);
  if (dataStorage) {
    dataStorage = false;
    saveDataStorage(key, dataStorage);
  }
};

export default {
  saveDataStorage,
  getDataStorage,
  removeDataStorage,
  updateAccess,
};
