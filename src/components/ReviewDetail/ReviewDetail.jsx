import { Box, Button, Card, CardContent, Chip, Stack, TextareaAutosize, Typography } from "@mui/material";
import IMAGES from "../../assets/images";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchReviewById } from "../../apis/firebaseApis";
import { useQuery } from "react-query";
import { formatDate } from "../../functions/stringFunctions";
import useUserData from "../../hooks/useUserData";
import { BUILDING_DATA_LIST } from "../../data";

const ReviewDetail = () => {
    const location = useLocation();
    const { userData } = useUserData();
    const list = location.pathname.split('/');
    const reviewId = list[list.length - 1];
    const { data } = useQuery(['reviewDetail', reviewId], () => fetchReviewById(reviewId));
    console.log(data)
    console.log(userData)

    const [isEditable, setEditable] = useState(false);
    const reviewData = {
        buildingId: data.buildingId,
        username: data.username,
        date: formatDate(new Date(data.date)),
        photo: data.photoUrl,
        review: data.review,
        keywords: data.keywords,
        hashtags: data.hashTags
    };
    

    const [review, setReview] = useState(reviewData.review);
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",

            }}
        >
        <Card sx={{
                minWidth: {
                    xs: "350px",
                    md: "1000px"
                },
                maxWidth: "800px",
                marginTop: "10px"
            }}>
            <CardContent>
                <Box
                    padding={{
                        xs: "0",
                        md: "20px"
                    }}
                >
                    <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography
                            fontSize="35px"
                            fontWeight="bold"
                        >
                            {BUILDING_DATA_LIST.find((e) => e.value === reviewData.buildingId).title}
                        </Typography>
                        {
                            data.userId === userData.uid ? (
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setEditable((v) => !v);
                                    }}
                                >
                                    {isEditable ? "Save" : "Edit"}
                                </Button>
                            ) : (
                                null
                            )
                        }
                   </Stack>
                    <Stack
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        marginLeft="5px"
                    >
                        <Typography
                            fontSize="21px"
                        >
                            {`Username: ${reviewData.username}`}
                        </Typography>
                        <Typography
                            fontSize="21px"
                        >
                            {reviewData.date}
                        </Typography>
                    </Stack>

                    <Stack
                        flexDirection={{
                            xs: "column",
                            md: "row"
                        }}
                        margin="20px 0px"
                        justifyContent="left"
                        alignItems="center"
                        gap="20px"
                    >
                        {reviewData.photo ? (
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Box
                                    component="img"
                                    sx={{
                                        width: {
                                            xs: "340px",
                                            md: "440px"
                                        },
                                        boxShadow: '10px 10px 45px rgba(0, 0, 0, 0.15)'  // 그림자 추가
                                    }}
                                    src={reviewData.photo}
                                />
                            </Box>
                        ) : null}
                       <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box
                                component="img"
                                sx={{
                                    height: {
                                        md: "255px"
                                    },
                                    width: {
                                        xs: "340px",
                                        md: "440px"
                                    },
                                    boxShadow: '10px 10px 45px rgba(0, 0, 0, 0.15)'  // 그림자 추가
                                }}
                                src={IMAGES[reviewData.buildingId]}
                            />
                        </Box>
                    </Stack>
                    <Stack
                        marginBottom='15px'
                    >
                        {reviewData.keywords.length === 0 ? (
                            null
                        ) :
                        (
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    marginBottom: '5px'
                                }}
                            >
                                {`Keywords: `}
                            </Typography>
                        )
                        }
                        
                        <Stack
                            flexDirection="row"
                            flexWrap="wrap"
                            gap="5px"
                        >
                            {reviewData.keywords.map((keyword, i) => {
                                return <Chip key={i} color="secondary" label={keyword} size="small" />
                            })}
                        </Stack>
                </Stack>
                    <Stack
                        marginBottom='15px'
                    >
                        {reviewData.hashtags.length === 0 ? (
                            null
                        ) : (
                            <Typography
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            >
                                {`Hash Tags: `}
                            </Typography>
                        )}
                       <Stack
                            flexDirection="row"
                            gap="5px"
                            flexWrap="wrap"
                        >
                            {reviewData.hashtags.map((hashtag, i) => {
                                return (
                                    <Box key={i}>
                                        <Typography
                                        fontSize="13px" 
                                        >
                                            {hashtag}
                                        </Typography>
                                    </Box>
                                )
                            })}
                        </Stack>
                </Stack>
 
                    <Stack>
                        <Typography
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            {`Review: `}
                        </Typography>
                        <Box
                            sx={{
                                marginTop: "5px",
                            }}
                        >
                            <TextareaAutosize
                                style={{
                                    width: "100%",
                                    minHeight: "50px",
                                    maxHeight: "400px",
                                    overflow: "auto"
                                }}
                                aria-label="minimum height"
                                minRows={3}
                                maxLength={600}
                                disabled={!isEditable}
                                onChange={(e) => {setReview(e.target.value)}}
                                value={review}
                            />
                        </Box>
                    </Stack>
                </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ReviewDetail;
