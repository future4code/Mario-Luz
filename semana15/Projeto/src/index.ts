import moment = require("moment");
import { specialty, databases } from "./helper/Enums";
import { Teacher } from "./Classes/Teacher";
import { SchoolManager } from "./Classes/SchoolManager";
import { Student } from "./Classes/Student";
import { Mission } from "./Classes/Mission";
import { DaytimeMission } from "./Classes/DaytimeClass";
import { NightMission } from "./Classes/NightClass";
//---------------------------------------------------------------------------//
const artur = new SchoolManager
//----------------------------------------------------------------------------//
const richard = new Teacher(
  "Richard",
  'richard@lbn.com',
  '10',
  moment('06/01/90', 'DD/MM/YY'),
  [
    specialty.CSS,
    specialty.TYPESCRIPT,
    specialty.OOP
  ])


const soter = new Teacher(
  "Soter",
  'soter@lbn.com',
  '2',
  moment("15/08/1996", "DD/MM/YYYY"),
  [
    specialty.BACKEND,
    specialty.TYPESCRIPT,
    specialty.OOP,
  ]
)
//-----------------------------------------------------------------------//

const igor = new Student(
  'igor',
  'igor@lbn.com',
  'bateras',
  moment('28/12/1987', 'DD/MM/YYYY'),
  ['Bateria', 'CS-GO', 'CSS', 'host-de-video-chamada']
)

const bruno = new Student(
  'bruno',
  'bruno@lbn.com',
  'risoles',
  moment('18/08/1994', 'DD/MM/YYYY'),
  ['tecladista',"comedor de risoles", 'vive com refluxo']
)
//----------------------------------------------------------------------//
const mello = new DaytimeMission(
  'pequenos gafanhotos',
  moment('13/01/2020', 'DD/MM/YYYY'),
  moment('27/07/2020', 'DD/MM/YYYY'),
)
mello.setName('mello')

const hamilton = new NightMission(
  'turma zika do baile',
  moment('17/02/2020', 'DD/MM/YYYY'),
  moment('04/09/2020', 'DD/MM/YYYY'),
)
hamilton.setName('Hamilton-na-night')

artur.getDataBase(databases.students)
artur.registerStudent(igor)
artur.registerStudent(bruno)
artur.setDataBase(databases.students)

artur.getDataBase(databases.teachers)
artur.registerTeacher(richard)
artur.registerTeacher(soter)
artur.setDataBase(databases.teachers)

mello.addStudent(igor)
mello.addStudent(bruno)
mello.addTeacher(richard)
mello.addTeacher(soter)

hamilton.addStudent(igor)
hamilton.addStudent(bruno)
hamilton.addTeacher(richard)
hamilton.addTeacher(soter)

artur.getDataBase(databases.missions)
artur.registerMission(mello)
artur.registerMission(hamilton)
artur.setDataBase(databases.missions)
