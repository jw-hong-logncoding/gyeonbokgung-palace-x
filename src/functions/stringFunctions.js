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
