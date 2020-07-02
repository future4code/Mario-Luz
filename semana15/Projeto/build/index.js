"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const Enums_1 = require("./helper/Enums");
const Teacher_1 = require("./Classes/Teacher");
const SchoolManager_1 = require("./Classes/SchoolManager");
const Student_1 = require("./Classes/Student");
const DaytimeClass_1 = require("./Classes/DaytimeClass");
const NightClass_1 = require("./Classes/NightClass");
const artur = new SchoolManager_1.SchoolManager;
const richard = new Teacher_1.Teacher("Richard", 'richard@lbn.com', '10', moment('06/01/90', 'DD/MM/YY'), [
    Enums_1.specialty.CSS,
    Enums_1.specialty.TYPESCRIPT,
    Enums_1.specialty.OOP
]);
const soter = new Teacher_1.Teacher("Soter", 'soter@lbn.com', '2', moment("15/08/1996", "DD/MM/YYYY"), [
    Enums_1.specialty.BACKEND,
    Enums_1.specialty.TYPESCRIPT,
    Enums_1.specialty.OOP,
]);
const igor = new Student_1.Student('igor', 'igor@lbn.com', 'bateras', moment('28/12/1987', 'DD/MM/YYYY'), ['Bateria', 'CS-GO', 'CSS', 'host-de-video-chamada']);
const bruno = new Student_1.Student('bruno', 'bruno@lbn.com', 'risoles', moment('18/08/1994', 'DD/MM/YYYY'), ['tecladista', "comedor de risoles", 'vive com refluxo']);
const mello = new DaytimeClass_1.DaytimeMission('pequenos gafanhotos', moment('13/01/2020', 'DD/MM/YYYY'), moment('27/07/2020', 'DD/MM/YYYY'));
mello.setName('mello');
const hamilton = new NightClass_1.NightMission('tuma zika do baile', moment('17/02/2020', 'DD/MM/YYYY'), moment('04/09/2020', 'DD/MM/YYYY'));
hamilton.setName('Hamilton-na-night');
artur.getDataBase(Enums_1.databases.students);
artur.registerStudent(igor);
artur.registerStudent(bruno);
artur.setDataBase(Enums_1.databases.students);
artur.getDataBase(Enums_1.databases.teachers);
artur.registerTeacher(richard);
artur.registerTeacher(soter);
artur.setDataBase(Enums_1.databases.teachers);
mello.addStudent(igor);
mello.addStudent(bruno);
mello.addTeacher(richard);
mello.addTeacher(soter);
hamilton.addStudent(igor);
hamilton.addStudent(bruno);
hamilton.addTeacher(richard);
hamilton.addTeacher(soter);
artur.getDataBase(Enums_1.databases.missions);
artur.registerMission(mello);
artur.registerMission(hamilton);
artur.setDataBase(Enums_1.databases.missions);
