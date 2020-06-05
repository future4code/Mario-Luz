"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
class Mission {
    constructor(id, startDate, endDate) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = '';
        this.studentsList = [];
        this.teachersList = [];
    }
    setName(name) {
        this.name = name;
    }
    addTeacher(teacher) {
        this.teachersList.push(teacher);
    }
    addStudent(student) {
        this.studentsList.push(student);
    }
}
exports.Mission = Mission;
