class Person {
    type = 'human';

    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(this.name + ' говорит привет');
    }
}

const max = new Person('Max');

console.log(max);

console.log(max.greet());

class Programmer extends Person{
    // constructor
    constructor(name, job){
        super(name);

        this._job = job;
    }

    // getter and setter
    get job(){
        return this._job.toUpperCase();
    }

    set job(value){
        this._job = value;
    }

    // static
    static type = 'programmer';

    static getType(){
        return 'I am programmer';
    }
}

const frontend = new Programmer('Max', 'Frontend');

console.log(frontend);

console.log(frontend.job);

console.log(Programmer.type);

console.log(Programmer.getType());