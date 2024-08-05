import { Box, Stack, Typography, Button } from "@mui/material";
import { keyframes } from '@mui/system';
import IMAGES from "../../assets/images";
import * as S from "./Main.style";
import LoginButton from "../LoginButton";
import useUserData from "../../hooks/useUserData";
import useGoogleLogin from "../../hooks/useGoogleLogin";
import About from "../About";

// Define the animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Main = () => {
    const { userData } = useUserData();
    const { handleGoogleLogin } = useGoogleLogin();

    return (
        <Box>
            <S.MainImageContainer>
                <S.MainImageOverlay />
                <S.MainImage
                    src={IMAGES.finalgyeongbokgung}
                    alt="Gyeongbokgung Palace"
                />
            </S.MainImageContainer>
            <Stack
                paddingTop={{
                    xs: '175px',
                    md: '230px'
                }}
                textAlign="center"
                gap="30px"
            >
                <Stack
                    sx={{
                        flexDirection: {
                            xs: 'column',
                            lg: 'row'
                        },
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '15px',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        sx={{
                            background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.5))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'inline',
                            letterSpacing: {
                                xs: "3px",
                                md: "10px"
                            },
                            fontSize: {
                                sm: '71px',
                                xs: '11vw'
                            },
                            animation: `${fadeIn} 2s ease-in-out` // Apply the animation
                        }}
                        variant="mainPageTitle">
                        Gyeongbokgung
                    </Typography>
                    <Typography
                        sx={{
                            background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.5))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'inline',
                            letterSpacing: {
                                xs: "3px",
                                md: "10px"
                            },
                            fontSize: {
                                sm: '71px',
                                xs: '11vw'
                            },
                            animation: `${fadeIn} 2s ease-in-out` // Apply the animation
                        }}
                        variant="mainPageTitle">
                        Palace X
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: 'flex',
                        height: {
                            xs: "90px",
                            md: "90px"
                        }
                    }}
                    textAlign="center"
                    justifyContent="center"
                >
                    <Box sx={{
                        maxWidth: {
                            sm: "700px"
                        },
                        padding: "0px 8px"
                    }}>
                        <Typography
                            sx={{
                                animation: `${fadeIn} 2s ease-in-out` // Apply the animation
                            }}
                            variant="mainSubtitle"
                        >
                            This website offers diverse cultural insights on Gyeongbokgung Palace, providing a platform for sharing varied perceptions and feelings about the subject, going beyond mere information gathering.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        animation: `${fadeIn} 2s ease-in-out` // Apply the animation
                    }}
                >
                    {userData ? (
                        <Button
                            sx={{
                                width: '180px',
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
                            onClick={handleGoogleLogin} 
                        >
                            Learn More
                        </Button>
                    ) : (
                        <LoginButton />
                    )}
                </Box>
                <About />
            </Stack>
        </Box>
    );
}

export default Main;
