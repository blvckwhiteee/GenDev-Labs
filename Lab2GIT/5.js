numbers = []
const rangeOdd = (num1, num2) => {
    for (let i = num1; i <= num2; i++) {
        if (i % 2 !== 0) numbers.push(i);
    }
    return numbers
}
const num1 = 15
const num2 = 30
console.log(rangeOdd(num1, num2))