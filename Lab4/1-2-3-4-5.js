// 1
const sum1 = (...args) => {
    let sumRes = 0;
    for (let i = 0; i < args.length; i++) {
        sumRes += args[i]
    }
    return sumRes;
}
// 2
const sum2 = (...args) => {
    let sumRes = 0;
    for (const element of args) {
        sumRes += element;
    }
    return sumRes;
}
// 3
const sum3 = (...args) => {
    let sumRes = 0;
    while (args.length > 0) {
        sumRes += args.pop();
    }
    return sumRes;
}
// 4
const sum4 = (...args) => {
    let sumRes = 0;
    do {
        sumRes += args.pop();
    }
    while (args.length > 0)
    return sumRes;
}
// 5
const sum5 = (...args) => {
    return args.reduce((a, b) => (a + b), 0);
}
// console.log(sum1(1,2,3,4,5));
// console.log(sum2(1,2,3,4,5));
// console.log(sum3(1,2,3,4,5));
// console.log(sum4(1,2,3,4,5));
// console.log(sum5(1,2,3,4,5));