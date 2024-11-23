const compose = (...fns) => {
    const handlers = []
    const composing = x => fns.reverse().reduce((v, f) => f(v), x)
    const composed = x => {
        try {
            return composing(x)
        }
        catch (err) {
            for (const handler of handlers) {
                handler(err);
            }
            return null;
        }
    }
    composed.on = (name, handler) => {
        if (name === 'error') handlers.push(handler);
    };
    return composed;

}


const cube = x => x**3
const decr = x => --x
const tripple = x => x * 3;

const a = compose(5, tripple, cube)
const f = a(9)
console.log(f)
