"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NightMission = void 0;
const Mission_1 = require("./Mission");
class NightMission extends Mission_1.Mission {
    setName(name) {
        if (name.includes("-na-night")) {
            super.setName(name);
        }
        else {
            console.log('Nome da turma noturna deve conter a experssão "-na-night"');
        }
    }
}
exports.NightMission = NightMission;
