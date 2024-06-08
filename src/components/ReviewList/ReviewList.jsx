// import { useQuery } from "react-query";
// import { fetchPosts } from "../../apis/firebaseApis";
import { Box, Stack } from "@mui/material";
import ReviewTable from "./ReviewTable";

const ReviewList = () => {
    // const { data } = useQuery('posts', fetchPosts);

    return (
        <div>
            <Stack
                display="flex"
                alignItems="center"
            >
                <Box
                    marginTop="10px"
                >
                    <ReviewTable />
                </Box>
            </Stack>
        </div>
    )
}

export default ReviewList;