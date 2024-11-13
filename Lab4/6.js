const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const max = (matrix) => {
    let maxElement = 0;
    for (let row of matrix) {
        for (element of row) {
            if (maxElement < element) maxElement = element;
        }
    }
    return maxElement;
}
// console.log(max(matrix));