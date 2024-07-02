import { Box, Stack } from "@mui/material";
import ReviewTable from "./ReviewTable";
import { Suspense } from "react";

const ReviewList = () => {
    return (
        <div>
            <Stack
                display="flex"
                alignItems="center"
            >
                <Box
                    marginTop="10px"
                >
                    <Suspense
                        fallback={<>Loading...</>}
                    >
                        <ReviewTable />
                    </Suspense>
                </Box>
            </Stack>
        </div>
    )
}

export default ReviewList;