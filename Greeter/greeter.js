var Student = /** @class */ (function () {
    function Student(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + ". Your id is: " + person.id;
}
var user = { id: "1", firstName: "Foo", lastName: "Bar" };
document.body.textContent = greeter(user);
