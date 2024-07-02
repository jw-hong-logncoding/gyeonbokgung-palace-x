export const countLikes = (likes) => {
    const keys = Object.keys(likes);
    let count = 0;
    keys.forEach((e) => {
        if (likes[e]) {
            count++;
        }
    });
    return count;
}