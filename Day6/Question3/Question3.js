/*
Question3:Write a “person” class to hold all the details.
*/

class Person {
    constructor(name, age, gender, address,contact_Number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
        this.contact_Number = contact_Number;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Address: ${this.address}`);
        console.log(`contact_Number: ${this.contact_Number}`);

    }
}

const person1 = new Person("Rokesh", 20, "Male", "123 Main St, Chennai","1597563248");
const person2 = new Person("RAvi", 25, "Male", "106 Main St, Chennai","589632157");
console.log("Person1:",person1);
console.log("Person2:",person2);