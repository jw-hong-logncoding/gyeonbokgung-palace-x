import { styled } from "@mui/material";


export const MainImageContainer = styled('span')({
    width: '100%',
    height: '420vh',
    // height: '400vh',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
});

export const MainImage = styled('img')({
    objectFit: 'contain',
    objectPosition: '-60px 68px',
    zIndex: -2,
});

export const MainImageOverlay = styled('div')({
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to top, rgba(20, 20, 20, 1), rgba(0, 0, 0, 0))'
});