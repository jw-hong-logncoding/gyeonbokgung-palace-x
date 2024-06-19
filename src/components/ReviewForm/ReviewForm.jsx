import { Box, Button, Card, CardContent, Divider, FormControl, MenuItem, Select, Stack, TextareaAutosize, Typography, styled } from "@mui/material";
import { BUILDING_DATA_LIST } from "../../data";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import TagInput from "../TagInput/TagInput";
import { loadUserInfo } from "../../functions/localStorageFunctions";
import { useMutation } from "react-query";
import { addReview } from "../../apis/firebaseApis";
import { useNavigate } from "react-router-dom";

const ReviewForm = () => {
    const navigate = useNavigate();
    const [buildingState, setBuildingState] = useState();
    const [hashTags, setHashTags] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const [review, setReview] = useState("");

    const mutation = useMutation(reviewData => addReview(reviewData), {
        onSuccess: (data) => {
            console.log('Post added!', data);
            navigate(`/review/${data.id}`);
        },
        onError: (error) => {
            console.error('Error adding post:', error);
        }
    });

    const handlePost = (e) => {
        const { userId, username } = loadUserInfo();
        const reviewRequest = {
            userId,
            username,
            buildingId: buildingState,
            date: new Date().toUTCString(),
            photoUrl: null,
            keywords: keywords.map((k) => k.text),
            hashTags: hashTags.map((h) => h.text),
            review,
            likes: {}
        }
        mutation.mutate(reviewRequest)
    }

    const handleBuildingChange = (e) => {
        console.log(e.target.value);
        setBuildingState(e.target.value);
    };

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
                        md: "550px"
                    },
                    maxWidth: "700px",
                    marginTop: "10px"
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
                            Write A Review
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
                                    onChange={handleBuildingChange}
                                    sx={{fontSize: "14px"}}
                                >
                                {BUILDING_DATA_LIST
                                    .map(({title, value}, i) => {
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
                                    onChange={(e) => {setReview(e.target.value)}}
                                    value={review}
                                    minRows={3}
                                    maxLength={600}
                                    placeholder="Write review here"
                                />
                            </Box>
                            <Stack
                                alignItems="left"
                                flexDirection="row"
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 'bold'
                                    }}
                                >{`Optional: `}</Typography>
                                <Button
                                    sx={{
                                        width: "160px",
                                        marginLeft: "10px"
                                    }}
                                    component="label"
                                    color="secondary"
                                    size="small"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload a Photo
                                    <VisuallyHiddenInput type="file" />
                                </Button>
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
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  

export default ReviewForm;