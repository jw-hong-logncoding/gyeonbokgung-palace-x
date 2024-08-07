import { Button } from '@mui/material';
import useGoogleLogin from '../../hooks/useGoogleLogin';

const LoginButton = () => {
    const { handleGoogleLogin } = useGoogleLogin();
  
    return (
        <div>
            <Button
                sx={{
                    width: '120px',
                    color: 'secondary.main',
                    border: '1px solid',
                    bgcolor: '#CCCCCC',
                    borderColor: 'secondary.light',
                    '&:hover': { bgcolor: 'secondary.light' },
                    letterSpacing: "3px",
                    fontSize: "15px",
                    marginTop: "22px"
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