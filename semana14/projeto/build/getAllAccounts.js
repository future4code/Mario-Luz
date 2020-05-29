"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllAccounts = void 0;
const fs_1 = require("fs");
exports.getAllAccounts = new Promise((resolve, reject) => {
    fs_1.readFile('./allAccounts.txt', (err, data) => {
        let dataToUse;
        if (data === undefined) {
            dataToUse = [];
        }
        else {
            const treatedData = data.toString();
            dataToUse = JSON.parse(treatedData);
        }
        resolve(dataToUse);
    });
});
//# sourceMappingURL=getAllAccounts.js.map