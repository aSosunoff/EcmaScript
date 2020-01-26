function compute(a, b){
    return a + b;
}
console.log(compute()); // NaN

function compute_2(a = 10, b = 20){
    return a + b;
}
console.log(compute_2());

let default_B = 20;
let default_C = (a, b) => a + b;
function test(a = 10, b = default_B, c = default_C(a, 2)){
    return a + b + c;
}
console.log(test());