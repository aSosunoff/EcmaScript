// Rest
    /*
    function average(arr){
        return arr.reduce((acc, i) => acc += i, 0) / arr.length;
    }
    */

    /*
    function average(){
        return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length;
    }
    */

    /*
    function average(...args){
        return args.reduce((acc, i) => acc += i, 0) / args.length;
    }

    console.log(average(1, 2, 3, 5));
    */

// Spread
    /*
    const array = [1, 2, 3, 5, 8, 13];
    console.log(array);
    console.log(...array);
    console.log(Math.max(...array));

    const arrayClone = [0, ...array, 99];
    console.log(arrayClone);
    */

// Destructuring
    /*
    const array = [1, 2, 3, 5, 8, 13];

    const a = array[0];
    const [b, c, ...d] = array.splice(1);

    console.log(a, b, c, d);
    */

// Object
    const address = {
        country: 'Russia',
        city: 'Moscow',
        street: 'Lenina',
        getData: function(){ 
            return `${this.country}, ${this.city}, ${this.street}`
        }
    };

    let {
        city: city_rename, 
        country, 
        street, 
        info = 'Info',
        ...rest
    } = address

    console.log(address.getData(), '/', city_rename, country, street, info, rest);

    const copy_Address = {...address, street: 'Other Street'};
    console.log(copy_Address);