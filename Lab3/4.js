const introspection = (iface) => {
    let keysArray = [];
    for (const key in iface) {
        const def = iface[key];
        if (typeof def === 'function') {
            keysArray.push([key, def.length]);
        }
    }
    return keysArray;
}
// const a = {
//     m2: function (x, y) {
//         return [x, y];
//     },
//     m3(x, y, z) {
//         return [x, y, z];
//     }
// }
// console.log(introspection(a));
