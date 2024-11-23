const array = () => {
    const arr = [];
    const element = (i) => arr[i];
    element.push = (element) => arr.push(element);
    element.pop = () => arr.pop();
    return element;
}
const a = array();
a.push('abc');
a.push('ab');
a.push('a');

console.log(a(0));
console.log(a(1));
console.log(a(2));

console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());


