const removeElement = (array, ...items) => {
    for (const item of items) {
        const index = array.indexOf(item);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
};


const array = [1, 2, 3, 3, 4, 5, 6, 7, 7];
removeElement(array,1, 7, 3);
console.log(array)
