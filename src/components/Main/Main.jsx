import { Box, Stack, Typography } from "@mui/material";
import IMAGES from "../../assets/images";
import * as S from "./Main.style";

const Main = () => {
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
            <Typography
                sx={{
                    background: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0.4))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline',
                }}
                variant="mainPageTitle">

                Gyeongbokgung Palace X
            </Typography>
            
            <Box
                sx={{ display: 'flex'}}
                textAlign="center"
                justifyContent="center"
            >
                <Box>
                    <Typography variant="mainSubtitle" >
                    This website offers diverse cultural insights on Gyeongbokgung Palace, providing a platform for sharing varied perceptions and feelings about the subject, going beyond mere information gathering.
                    </Typography>
                </Box>
            </Box>
       </Stack>
    </>
  )
}

export default Main;