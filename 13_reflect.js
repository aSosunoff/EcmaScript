class Student {
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hi. My name is ${this.name}`);
    }
}

const studen_1 = new Student('Max');

// const student_1_v2 = Reflect.construct(Student, 'Max');

console.log(studen_1);

// console.log(student_1_v2);

Reflect.apply(studen_1.greet, {name: 'TestName'});