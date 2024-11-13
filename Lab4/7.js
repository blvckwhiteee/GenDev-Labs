const persons = {
    lenin: { born: 1872, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};
const lifeLenght = (persons) => {
    const result = {}
    for (let person in persons) {
        const lifeTime = persons[person];
        result[person] = lifeTime.died - lifeTime.born
    }
    return result;
}
// console.log(lifeLenght(persons));