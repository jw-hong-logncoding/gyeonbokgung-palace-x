import { Box, Card, CircularProgress, Divider, Stack } from "@mui/material";
import MyLikes from "./MyLikes";
import MyReview from "./MyReview";
import { useQuery } from "react-query";
import { fetchMyReviewsByUserId } from "../../apis/firebaseApis";

const MyPage = () => {
    const { data } = useQuery('myReviews', fetchMyReviewsByUserId);
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Card
                sx={{
                    width: {
                        xs: "100vw",
                        md: "90vw"
                    },
                    paddingBottom: "30px"
                }}
            >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Stack
                    display="flex"
                    flexDirection={{
                        xs: 'column',
                        md: 'row'
                    }}   
                >
                    <MyReview data={data} />
                    <Box
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        <Divider
                            orientation="vertical"
                            flexItem
                        />
                    </Box>
                    <MyLikes data={data} />
                </Stack>
            </Box>
            </Card>
        </Box>
    );
}

export default MyPage;