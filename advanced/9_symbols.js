const symbol = Symbol('demo');
const other = Symbol('demo');

console.log(symbol);
console.log(other);

const obj = {
    name: 'Elena',
    [symbol]: 'meta'
}

console.log(obj);
console.log(obj[symbol]);