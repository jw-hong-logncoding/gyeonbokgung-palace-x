import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { saveToLocalStorage } from "../functions/localStorageFunctions";
import { LOCAL_STORAGE_KEYS } from "../enums";

const useGoogleLogin = () => {
  const navigate = useNavigate();
    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
          .then((data) => {
            saveToLocalStorage(LOCAL_STORAGE_KEYS.USER, data.user);
            navigate(0);
          })
          .catch((err) => {
            console.log(err);
          });
    }
    return { handleGoogleLogin };
}

export default useGoogleLogin;