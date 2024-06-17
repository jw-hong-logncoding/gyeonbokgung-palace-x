import { styled } from "@mui/material";


export const MainImageContainer = styled('span')({
    width: '100%',
    height: '3920px',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'start',
    overflow: 'hidden'
});

export const MainImage = styled('img')({
    objectFit: 'contain',
    objectPosition: '0px -80px',
    zIndex: -2,
});

export const MainImageOverlay = styled('div')({
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: "linear-gradient(to bottom, rgba(20, 20, 20, 0.2) 0%, rgba(20, 20, 20, 0.7) 10%, rgba(20, 20, 20, 0.8) 100%)",
    pointerEvents: "none"
});