class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
        alert(`${this.name} is studying`); // Show alert when studying
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
        alert(`${this.name} is teaching`); // Show alert when teaching
    }
}

// Example Usage
const person = new Person("John", 25);
document.getElementById("person-name").innerText = `Name: ${person.name}`;
document.getElementById("person-age").innerText = `Age: ${person.age}`;

const student = new Student("Alice", 22);
document.getElementById("student-name").innerText = `Name: ${student.name}`;
document.getElementById("study-button").addEventListener("click", () => student.study());

const teacher = new Teacher("Bob", 40);
document.getElementById("teacher-name").innerText = `Name: ${teacher.name}`;
document.getElementById("teach-button").addEventListener("click", () => teacher.teach());
