const _privateVariable = 42;

export const COLOR = '#ffffff';

export function compute(a, b){
    return a + b;
}

export default {
    log(){
        console.log(_privateVariable);
    }
}