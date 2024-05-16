import { Box, Stack, Typography } from "@mui/material";
import IMAGES from "../../assets/images";
import * as S from "./Main.style";
import LoginButton from "../LoginButton";
import useUserData from "../../hooks/useUserData";

const Main = () => {
    const { userData } = useUserData();
    return (
        <>
            <S.MainImageContainer>
                <S.MainImageOverlay />
                <S.MainImage
                    src={IMAGES.gyeongbokgung}
                    alt="Gyeongbokgung Palace"
                />
            </S.MainImageContainer>
            <Stack
                paddingTop="230px"
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
                            background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.4))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'inline',
                            fontSize: {
                                sm: '78px',
                                xs: '38px'
                            }
                        }}
                        variant="mainPageTitle">
                            Gyeongbokgung
                    </Typography>
                    <Typography
                        sx={{
                            background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.4))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'inline',
                            fontSize: {
                                sm: '78px',
                                xs: '38px'
                            }
                        }}
                        variant="mainPageTitle">
                            Palace X
                    </Typography>    
                </Stack>
                
                
                <Box
                    sx={{ display: 'flex'}}
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
        </Stack>
        </>
    )
}

export default Main;