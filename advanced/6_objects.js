let cityField = 'cityField';
let job = 'frontend';

const person = {
    age: 26,
    name: 'Alex',
    
    [cityField]: 'Saint-Peterburg',

    'country-live': 'Russia',
    
    job,
    
    print: () => 'Person',
    
    toString() {
        return Object
        .keys(this)
        .filter(key => key !== 'toString')
        .map(key => this[key])
        .join(' ');
    },
};

console.log(person);
console.log(person.toString());
console.log(person.print());

console.log();

console.log(Object.is(1,2));

console.log();

const first = {a: 1};
const second = {b: 1};
console.log("new object => ", Object.assign({}, first, second));

console.log();

const obj = Object.assign({}, first, second, {
    c: 3,
    d: 4
});

console.log("obj => ", obj);

console.log("obj (entries) => ", Object.entries(obj));

console.log("obj (keys) => ", Object.keys(obj));

console.log("obj (values) => ", Object.values(obj));
