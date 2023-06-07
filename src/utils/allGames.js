const StorageKey = 'allGamesState';
const StorageData = {
  viewType: 'column',
};
export const getStorageData = () =>
  JSON.parse(localStorage.getItem(StorageKey)) || StorageData;

export const setStorageData = (data) => {
  const storageData = getStorageData();
  localStorage.setItem(StorageKey, JSON.stringify({ ...storageData, ...data }));
};
