import { Button } from '@mui/material';
import useGoogleLogin from '../../hooks/useGoogleLogin';

const LoginButton = () => {
    const { handleGoogleLogin } = useGoogleLogin();
  
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