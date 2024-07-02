import { IconButton, Stack, Typography } from "@mui/material";
import {Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { useState } from "react";
import { useMutation } from "react-query";
import { updateLike } from "../../apis/firebaseApis";
import useUserData from "../../hooks/useUserData";

const LikeCounter = ({ reviewId, buildingId }) => {
    const [isLiked, setIsLiked] = useState(false);
    const { userData } = useUserData();
    const mutation = useMutation(reviewData => updateLike(reviewData), {
        onSuccess: (data) => {
            console.log('Post added!', data);
        },
        onError: (error) => {
            console.error('Error adding post:', error);
        }
    });

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
            0
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
            onClick={() => {
                setIsLiked(!isLiked);
                mutation.mutate({ userId: userData.uid, reviewId, isLike:!isLiked, buildingId });
            }}
        >
            {(isLiked
                ? <Favorite sx={{width: "17px", color: "secondary.dark"}} />
                : <FavoriteBorderOutlined sx={{width: "17px", color: "secondary.dark"}} />
            )}
        </IconButton>
    </Stack>
  )
}

export default LikeCounter;