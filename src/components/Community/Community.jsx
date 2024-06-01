import ReviewList from "../ReviewList";
import { Suspense } from "react";

const Community = () => {
    return (
        <div>
            <Suspense fallback={<>loading...</>}>
                <ReviewList />
            </Suspense>
        </div>
    )
}

export default Community;