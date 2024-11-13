const avaibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const quantity = 4;
const generateKey = (quantity, avaibleCharacters) => {
    let result = '';
    for (let i = 0; i < quantity; i++) {
        const character = Math.floor(Math.random() * avaibleCharacters.length);
        result += avaibleCharacters[character];
    }
    return result;
}
