"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const moment = require("moment");
class Student {
    constructor(name, email, id, birthDate, hobbies) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }
    getStudentAge() {
        return moment().diff(this.birthDate, "years");
    }
}
exports.Student = Student;
