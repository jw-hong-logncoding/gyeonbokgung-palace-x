import { LOCAL_STORAGE_KEYS } from "../enums";

export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
  
export const loadFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};
  
export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
};
  
export const clearLocalStorage = () => {
    localStorage.clear();
};

export const loadUserInfo = () => {
    const fullUserInfo = loadFromLocalStorage(LOCAL_STORAGE_KEYS.USER);
    const userInfo = {
        userId: fullUserInfo.uid,
        username: fullUserInfo.displayName,
    }
    return userInfo;
}