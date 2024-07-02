import { IconButton, Stack, Typography } from "@mui/material";
import {Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { useState } from "react";
import { useMutation } from "react-query";
import { updateLike } from "../../apis/firebaseApis";
import useUserData from "../../hooks/useUserData";
import { countLikes } from "../../functions/counterFunctions";

const LikeCounter = ({ reviewId, buildingId, likes }) => {
    const [likeCount, setLikeCount] = useState(countLikes(likes));
    const { userData } = useUserData();
    const [isLiked, setIsLiked] = useState(likes[userData.uid]);
    const mutation = useMutation(reviewData => updateLike(reviewData), {
        onSuccess: (data) => {
            setLikeCount((count) => {
                if (isLiked && count >= 1) {
                    return count - 1;
                } else {
                    return count + 1;
                }
            })
            setIsLiked(!isLiked);
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
            onClick={() => {
               
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