import { loadFromLocalStorage } from "../functions/localStorageFunctions";
import { LOCAL_STORAGE_KEYS } from "../enums";

const useUserData = () => {
    const userData = loadFromLocalStorage(LOCAL_STORAGE_KEYS.USER);
    return { userData };
}

export default useUserData;