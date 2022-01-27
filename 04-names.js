//Modules
//Common JS, every file is module (by defaults)
//Modules - Encapsulated Code (only share minimun)

const secret = 'SUPER SECRET'
const john = 'John';
const peter = 'Peter';

const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
}

sayHi('Susan')
sayHi('Peter')
sayHi('John')