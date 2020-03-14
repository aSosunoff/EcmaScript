// Map
const map = new Map(
    [['a', 1]],
    [['a', 1]]
);

map
    .set('b', 2)
    .set('c', 3)
    .set('b', 22);

console.log(map);
console.log(map.size);
console.log(map.get('a'));
console.log(map.has('b'));
console.log(map.has('d'));

console.log();

// Set
const set = new Set([11, 22, 33, 44]);
console.log(set);
console.log(set.size);