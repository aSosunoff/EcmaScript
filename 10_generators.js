// const array = [11, 22, 33, 44];
// const str = 'Hello';
// // console.log(array[Symbol.iterator]);
// // console.log(str[Symbol.iterator]);

// const iter = array[Symbol.iterator]();
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());
// // console.log(iter.next());

// for(let i of array){
//     console.log(i);
// }

// const country = {
//     values: ['ru', 'kz', 'ua', 'by'],
//     [Symbol.iterator](){
//         let i = 0;
//         return {
//             next: () => {
//                 return {
//                     done: i > this.values.length,
//                     value: this.values[i++]
//                 }
//             }
//         }
//     }
// }

// for (let i of country){
//     console.log(i);
// }

// Generator
function *gen(num = 4) {
    for (let i = 0; i < num; i++) {
        yield i;
    }
}

const iter = gen(3);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());