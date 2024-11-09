numbers = []
const range = (num1, num2) => {
    for (let i = num1; i <= num2; i++) {
        numbers.push(i)
    }
    return numbers
}
const num1 = 15
const num2 = 30
console.log(range(num1, num2))