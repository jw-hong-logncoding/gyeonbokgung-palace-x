import { useQuery } from "react-query";
import { fetchPosts } from "../../apis/firebaseApis";

const ReviewList = () => {
    const { data } = useQuery('posts', fetchPosts);
    console.log(data);

    return (
        <div>
            {data[0].title}
        </div>
    )
}

export default ReviewList;