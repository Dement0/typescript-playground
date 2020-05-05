class Student {
    fullName: string;

    constructor(public id: string, public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}

interface Person {
    id: string;
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName+ ". Your id is: " + person.id;
}

let user = { id: "1", firstName: "Foo", lastName: "Bar" };
document.body.textContent = greeter(user);