const average = (a, b) => {
   return (a + b) / 2
};
const square = (x) => {
    return x * x;
}
const cube = (x) => {
    return x * x * x;
}
avg = []
for (let i = 1; i < 10; i++) {
    let a = square(i)
    let b = cube(i)
    avg.push(average(a, b))
}
const calulate = () => console.log(avg)
calulate()

