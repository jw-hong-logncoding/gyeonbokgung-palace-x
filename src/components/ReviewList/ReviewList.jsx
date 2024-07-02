import { Box, CircularProgress, Stack } from "@mui/material";
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
                        fallback={<CircularProgress />}
                    >
                        <ReviewTable />
                    </Suspense>
                </Box>
            </Stack>
        </div>
    )
}

export default ReviewList;