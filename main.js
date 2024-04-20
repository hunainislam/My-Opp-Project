import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(object) {
        this.students.push(object);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome Guest:");
        const answer = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Ap Kis Se Bat Karna Pasand Kare Ge...",
            choices: ["Khud Se:Self", "Student"],
        });
        if (answer.Select === "Khud Se:Self") {
            console.log("Hello Me Khud Se Bat Kar Raha Hun..");
            console.log("Meri Tabiyat Achi Hai..");
        }
        if (answer.Select === "Student") {
            const answer = await inquirer.prompt({
                type: "input",
                message: "Ap Ko Kis Student Se Bat Karni Hai..",
                name: "Student",
            });
            const student = persons.students.find((val) => val.name == answer.Student);
            if (!student) {
                const name = new Student(answer.Student);
                persons.addStudent(name);
                console.log(`Hello I Am ${name.name}, Or Me Thek Hun`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello I Am ${student.name}, Or Me Thek Hun................`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
