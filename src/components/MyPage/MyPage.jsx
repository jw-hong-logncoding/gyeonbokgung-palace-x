import { Box, Card, CircularProgress, Divider, Stack } from "@mui/material";
import MyLikes from "./MyLikes";
import MyReview from "./MyReview";
import { Suspense } from "react";

const MyPage = () => {

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
                    <Suspense
                        fallback={<CircularProgress />}
                    >
                        <MyReview />
                    </Suspense>
                    <Box
                        marginLeft="5px"
                        marginRight="5px"
                    >
                        <Divider
                            orientation="vertical"
                            flexItem
                        />
                    </Box>
                    <Suspense
                        fallback={<CircularProgress />}
                    >
                        <MyLikes />
                    </Suspense>
                </Stack>
            </Box>
            </Card>
        </Box>
    );
}

export default MyPage;