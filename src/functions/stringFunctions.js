export function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function parseTranslateY(transformString) {
    const match = /translateY\((-?\d+\.?\d*)px\)/.exec(transformString);
    return match ? parseFloat(match[1]) : null;
}

export function formatDate(date) {
    let day = date.getDate(); 
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;

    return `${month}-${day}-${year}`; // 문자열 형식으로 반환합니다.
}