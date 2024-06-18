import { Box, Button, Card, CardContent, Chip, Stack, TextareaAutosize, Typography } from "@mui/material";
import IMAGES from "../../assets/images";
import { useState } from "react";

const ReviewDetail = () => {
    const [isEditable, setEditable] = useState(false);
    const mockData = {
        title: "경회루",
        username: "JWH",
        date: "06-18-2024",
        photo: IMAGES.geunjeongjeon,
        review: `Gyeongbokgung Palace in Seoul is a breathtaking glimpse into Korea’s royal history. Walking through its expansive grounds, you’re surrounded by stunning traditional architecture and tranquil gardens. Each structure tells a story of dynastic times, and the changing of the guard ceremony is a must-see for its colorful pageantry. The palace, beautifully restored, offers a peaceful retreat from the modern city that surrounds it. It’s a vivid reminder of Korea’s rich cultural heritage and an essential experience for any visitor.`,
        keywords: ["Joseon Dynasty", "Traditional Architecture", "Royal Culture", "Changing of the Guard", "National Treasure"],
        hashtags: ["#Gyeongbokgung", "#JoseonDynasty", "#KoreanArchitecture", "#GuardChangingCeremony", "#SeoulLandmark"]
    };
    const [review, setReview] = useState(mockData.review);
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
                            {mockData.title}
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={() => {
                                setEditable((v) => !v);
                            }}
                        >
                            {isEditable ? "Save" : "Edit"}
                        </Button>
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
                            {`Username: ${mockData.username}`}
                        </Typography>
                        <Typography
                            fontSize="21px"
                        >
                            {mockData.date}
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
                                src={mockData.photo}
                            />
                        </Box>
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
                                src={"https://i.namu.wiki/i/iMbSx2HYPedoP0bBU5fmUMqaT09yDJetsZv8HKRXeLfzsNchSEmKVivi2m1jycNaesZhjkMHQUqwU1gkIZ5LPTztGPbh-t2ArnWWkikCASwTpKlVMYQrgygtxF4T_2KTXJhLVzjDZCjk9tdd-mwFog.webp"}
                            />
                        </Box>
                    </Stack>
                    <Stack
                        marginBottom='15px'
                    >
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '5px'
                            }}
                        >
                            {`Keywords: `}
                        </Typography>
                        <Stack
                            flexDirection="row"
                            flexWrap="wrap"
                            gap="5px"
                        >
                            {mockData.keywords.map((keyword, i) => {
                                return <Chip key={i} color="secondary" label={keyword} size="small" />
                            })}
                        </Stack>
                </Stack>
                    <Stack
                        marginBottom='15px'
                    >
                        <Typography
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            {`Hash Tags: `}
                        </Typography>
                        <Stack
                            flexDirection="row"
                            gap="5px"
                            flexWrap="wrap"
                        >
                            {mockData.hashtags.map((hashtag, i) => {
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
