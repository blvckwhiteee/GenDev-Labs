const contract = (fn, ...types) => (...args) => {
    const argsLen = args.length
    const typesLen = types.length
    for (let i = 0; i < argsLen; i++) {
        const arg = args[i];
        const argType = types[i];
        const name = argType.name.toLowerCase();
        if (typeof arg !== name) {
            throw new TypeError(`Expected "${name}" type`);
        }
    }
    const result = fn(...args);
    const resultType = types[typesLen - 1];
    const name = resultType.name.toLowerCase();
    if (typeof result !== name) {
        throw new TypeError(`Expected "${name}" type`);
    }
    return result;
}
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);



const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, Number, String, String);
const a = concatStrings('Hello ', 'world!');
console.dir(a);