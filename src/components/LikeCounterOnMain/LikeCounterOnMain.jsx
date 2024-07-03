import { IconButton, Stack, Typography } from "@mui/material";
import {Favorite, FavoriteBorderOutlined } from '@mui/icons-material';

const LikeCounterOnMain = ({likeCount}) => {
    return (
    <Stack
        sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px"
        }}
    >
        <Typography>
            {likeCount}
        </Typography>
        <Typography
            sx={{
                display: {
                    xs: "none",
                    md: "contents",
                }
            }}
        >
            likes
        </Typography>
        <IconButton
            size="small"
            disabled
        >
            {(likeCount > 0
                ? <Favorite sx={{width: "17px", color: "secondary.dark"}} />
                : <FavoriteBorderOutlined sx={{width: "17px", color: "secondary.dark"}} />
            )}
        </IconButton>
    </Stack>
  )
}

export default LikeCounterOnMain;