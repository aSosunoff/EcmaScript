let a = [1, 2, 3, {
    name: 1
}];

a = new Proxy(a, {
    get(thitArg, index){
        if(thitArg[index])
            return thitArg[index];

        return 0;
    },

    set(thisArg, index, value){
        if(typeof thisArg[index] === 'object')
            throw new Error('Field is object');
        
        thisArg[index] = value;
    }
})


a[1] = 123;
a[3] = 1;
console.log(a, a[0], a[4]);