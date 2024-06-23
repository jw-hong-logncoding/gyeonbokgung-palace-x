import { Box, Stack, Typography } from "@mui/material";
import IMAGES from "../../assets/images";
import * as S from "./Main.style";
import LoginButton from "../LoginButton";
import useUserData from "../../hooks/useUserData";
import About from "../About";

const Main = () => {
    const { userData } = useUserData();
    return (
        <>
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
                gap="60px"
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
                                sm: '78px',
                                xs: '11vw'
                            }
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
                                sm: '78px',
                                xs: '11vw'
                            }
                        }}
                        variant="mainPageTitle">
                            Palace X
                    </Typography>    
                </Stack>
                
                
                <Box
                    sx={{
                        display: 'flex',
                        height: {
                            xs: "100px",
                            md: "100px"
                        }

                    }}
                    textAlign="center"
                    justifyContent="center"
                >
                    <Box sx={{maxWidth:
                         {
                            xs:'400px',
                            sm: '600px'
                         }
                         }}>
                        <Typography variant="mainSubtitle" >
                        This website offers diverse cultural insights on Gyeongbokgung Palace, providing a platform for sharing varied perceptions and feelings about the subject, going beyond mere information gathering.
                        </Typography>
                    </Box>
                </Box>
                {userData ? null : (<LoginButton />)}
                <About />
        </Stack>
        </>
    )
}

export default Main;