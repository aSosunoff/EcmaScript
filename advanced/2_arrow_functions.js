function sum(a, b){
    return a + b;
}

function cube(a){
    return a ** 3
}

const sum_ArrowFunction = (a, b) => a + b;

const cube_ArrowFunction = a => a ** 3;

console.log(sum(1,3));

console.log(sum_ArrowFunction(1,3));

console.log(cube(4));

console.log(cube_ArrowFunction(4));

// Context

function test_1(){
    return this.name;
}

console.log(test_1.call({name: "Alex"}));

const test_2 = () => this.name;

console.log(test_2.call({name: "Alex"}));

function a(){
    this.name = 'qwe';
    this.f1 = function(){
        console.log(this.name); // qwe
        (function(){console.log(this.name);})(); // undefined
        (()=>{console.log(this.name);})(); // qwe
    }
}

let r = new a;
r.f1();