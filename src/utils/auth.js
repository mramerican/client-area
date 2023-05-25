const STORAGE_TOKEN = 'token';

export const getToken = () => localStorage.getItem(STORAGE_TOKEN);
export const setToken = (token) => {
  if (!token) {
    console.warn(`Provide valid token instead of provided ${token}`);
  }

  localStorage.setItem(STORAGE_TOKEN, token);
};
export const getIsLoggedIn = () => Boolean(getToken());
