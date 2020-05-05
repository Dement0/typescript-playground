function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Foo", lastName: "Bar" };
document.body.textContent = greeter(user);
