import { Button } from '@mui/material';
import useGoogleLogin from '../../hooks/useGoogleLogin';

const LoginButton = () => {
    const { handleGoogleLogin } = useGoogleLogin();
  
    return (
        <div>
            <Button
                sx={{
                    width: '110px',
                    color: 'secondary.main',
                    border: '1px solid',
                    bgcolor: '#CCCCCC',
                    borderColor: 'secondary.light',
                    '&:hover': { bgcolor: 'secondary.light' },
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