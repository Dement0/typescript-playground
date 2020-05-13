const birthdayGreeter = (name: string, age: number): string => {
    return "Happy birthday ${name}. You are ${age} years old.";
};

const personName = "Foo Bar";
const personAge = 30;

console.log(birthdayGreeter(personName, personAge));