import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useEffect, useState } from "react";
import { Button } from '@mui/material';

const LoginButton = () => {
    const [userData, setUserData] = useState();

    useEffect(() => {
        console.log(userData);
    }, [userData])

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider를 구글로 설정
        signInWithPopup(auth, provider) // popup을 이용한 signup
          .then((data) => {
            setUserData(data.user); // user data 설정
            console.log(data) // console로 들어온 데이터 표시
          })
          .catch((err) => {
            console.log(err);
          });
    }
 
    return (
        <div>
            <Button
                sx={{
                    width: '110px',
                    color: 'white',
                    border: '1px solid',
                    bgcolor: 'secondary.main',
                    borderColor: 'secondary.light',
                    '&:hover': { bgcolor: 'secondary.dark' },
                    letterSpacing: "3px",
                    fontSize: "12px"
                }}
                color="secondary"
                variant='outlined'
                onClick={handleGoogleLogin}>
                    Login
            </Button>
        </div>
    )
}

export default LoginButton;