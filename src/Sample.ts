class Student {

    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let uesr : Person = new Student("Jane", "M.", "User");


// document.body.textContent = greeter("1999" );
const H1 = document.createElement("h1");
H1.textContent = "Hello World!";
document.body.appendChild(H1);