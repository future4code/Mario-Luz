import moment = require("moment");
import { specialty, databases } from "./helper/Enums";
import { Teacher } from "./Classes/Teacher";
import { SchoolManager } from "./Classes/SchoolManager";
import { Student } from "./Classes/Student";
import { Mission } from "./Classes/Mission";
import { DaytimeMission } from "./Classes/DaytimeClass";
import { NightMission } from "./Classes/NightClass";
//---------------------------------------------------------------------------//
const BigBoss = new SchoolManager
//----------------------------------------------------------------------------//
const richard = new Teacher(
  "Richard",
  'richard@lbn.com',
  '10',
  moment('24/09/1950', 'DD/MM/YY'),
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

BigBoss.getDataBase(databases.students)
BigBoss.registerStudent(igor)
BigBoss.registerStudent(bruno)
BigBoss.setDataBase(databases.students)

BigBoss.getDataBase(databases.teachers)
BigBoss.registerTeacher(richard)
BigBoss.registerTeacher(soter)
BigBoss.setDataBase(databases.teachers)

mello.addStudent(igor)
mello.addStudent(bruno)
mello.addTeacher(richard)
mello.addTeacher(soter)

hamilton.addStudent(igor)
hamilton.addStudent(bruno)
hamilton.addTeacher(richard)
hamilton.addTeacher(soter)

BigBoss.getDataBase(databases.missions)
BigBoss.registerMission(mello)
BigBoss.registerMission(hamilton)
BigBoss.setDataBase(databases.missions)
