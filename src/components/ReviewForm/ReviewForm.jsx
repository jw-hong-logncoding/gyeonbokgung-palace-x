import { Box, Button, Card, CardContent, Divider, FormControl, MenuItem, Select, Stack, TextareaAutosize, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { BUILDING_DATA_LIST } from "../../data";
import TagInput from "../TagInput/TagInput";
import { loadUserInfo } from "../../functions/localStorageFunctions";
import { useMutation } from "react-query";
import { addReview } from "../../apis/firebaseApis";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../ImageUploader/ImageUploader";
import { useImageStore } from "../../store";

const ReviewForm = () => {
    const navigate = useNavigate();
    const [buildingState, setBuildingState] = useState("gwanghwamun");
    const [hashTags, setHashTags] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [review, setReview] = useState("");
    const { downloadUrl, uploadingProgress } = useImageStore();

    const mutation = useMutation(reviewData => addReview(reviewData), {
        onSuccess: (data) => {
            console.log('Post added!', data);
            navigate(`/review/${data.id}`);
        },
        onError: (error) => {
            console.error('Error adding post:', error);
        }
    });

    const handlePost = () => {
        const { userId, username } = loadUserInfo();
        const reviewRequest = {
            userId,
            username,
            buildingId: buildingState,
            date: new Date().toUTCString(),
            photoUrl: downloadUrl,
            keywords: keywords.map((k) => k.text),
            hashTags: hashTags.map((h) => h.text),
            review,
            likes: {}
        }
        mutation.mutate(reviewRequest)
    }

    const handleBuildingChange = (e) => {
        setBuildingState(e.target.value);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%"
            }}
        >
            <Card sx={{
                minWidth: {
                    xs: "350px",
                    md: "550px"
                },
                maxWidth: "700px",
                margin: "30px 0px"
            }}>

                <CardContent
                >
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: "27px",
                                marginBottom: "10px"
                            }}
                        >
                            Write a Review
                        </Typography>
                    </Box>
                    <Divider />
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px"
                        }}
                    >
                        <Stack
                            display="flex"
                            alignItems="left"
                            width="400px"
                        >
                            <Stack
                                flexDirection='row'
                                alignItems="center"
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold"
                                    }}
                                >{`Building: `}</Typography>
                                <FormControl sx={{
                                    m: 1,
                                    width: '100%',
                                    marginLeft: "20px"
                                }} size="small">
                                    <Select
                                        value={buildingState}
                                        onChange={handleBuildingChange}
                                        sx={{ fontSize: "14px" }}
                                    >
                                        {BUILDING_DATA_LIST
                                            .map(({ title, value }, i) => {
                                                return (
                                                    <MenuItem key={i} value={value}>{title}</MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </Stack>
                            <Stack
                                marginTop="8px"
                                flexDirection="row"
                                alignItems="start"
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "bold",
                                        marginRight: "10px"
                                    }}
                                >
                                    {`Keywords: `}
                                </Typography>
                                <Box>
                                    <TagInput
                                        setTags={setKeywords}
                                        tags={keywords}
                                        autoFocus={true}
                                    />
                                </Box>
                            </Stack>
                            <Stack
                                flexDirection='row'
                                alignItems="start"
                                marginTop="10px"
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold',
                                        marginRight: '10px'
                                    }}
                                >{`Hashtags: `}</Typography>
                                <Box>
                                    <TagInput
                                        setTags={setHashTags}
                                        tags={hashTags}
                                        isHashTag
                                    />
                                </Box>
                            </Stack>
                            <Stack
                                alignItems="left"
                                marginTop="10px"
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold'
                                    }}
                                >{`Review: `}</Typography>
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
                                        onChange={(e) => { setReview(e.target.value) }}
                                        value={review}
                                        minRows={3}
                                        maxLength={600}
                                        placeholder="Write review here"
                                    />
                                </Box>
                                <Stack
                                    alignItems="left"
                                    flexDirection="column"
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 'bold'
                                        }}
                                    >{`Optional: `}</Typography>
                                    <ImageUploader />
                                </Stack>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'right',
                                        marginTop: '30px'
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        onClick={handlePost}
                                    >
                                        Post
                                    </Button>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ReviewForm;