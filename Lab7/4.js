//  From 7.1
// const removeElement = (array, ...items) => {
//     for (const item of items) {
//         const index = array.indexOf(item);
//         if (index > -1) {
//             array.splice(index, 1);
//         }
//     }
//
// };
//
// const difference = (array1, array2) => {
//     for (const element of array2) {
//         if (array1.includes(element)) removeElement(array1, element);
//     }
// }





// Second way
const difference = (array1, array2) => {
    const updatedArray = []
    for (const element of array1) {
        if (!array2.includes(element)) updatedArray.push(element)
    }
    console.log(updatedArray)
}
const array1 = [1, 2, 3, 4, 5, 6, 7 ];
const array2 = [3,7]
difference(array1, array2)



