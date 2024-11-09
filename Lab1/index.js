// 1
//first way
const inc = (n) => {
    console.dir(++n);
};

inc(51);

// second way
const obj = { n: 5 };
const inc2 = (obj) => {
    console.dir(++obj.n);
};
inc2(obj);
//2
// const array = [true, 'hello', 5, 12, -200, false, false, 'word', 52, true, 'Tea', 'FICE', 121, 'OT']
// const hash = { number: 0, string: 0, boolean: 0 }
// for (const element of array) {
//     hash[typeof element] ++;
// }
// console.dir(hash)
// 2 (Deleted hash-keys)
const array = [true, 'hello', 5, 12, -200, false, false, 'word', 52, true, 'Tea', 'FICE', 121, 'OT'];
const hash = {};
for (const element of array) {
if (hash [typeof element]) {
    hash[typeof element] ++;
}
else {
    hash[typeof element] = 1;
}

}
console.dir(hash);
