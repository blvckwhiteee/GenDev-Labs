const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn!== 'function') throw new Error( "All args must be a function")

    }
    return (x) => fns.reduce((g, fn) => fn(g), x);
}
const cube = x => x**3
const decr = x => --x
const tripple = x => x * 3;

try {
    const a = pipe(decr, cube, tripple)
    const f = a(5)
    console.log(f)
    const n = a(3)
    console.log(n)
} catch (error) {
    console.log(error)
}
