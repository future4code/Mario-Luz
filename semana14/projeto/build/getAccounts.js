"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllAccounts_1 = require("./getAllAccounts");
getAllAccounts_1.getAllAccounts.then((data) => {
    console.log(data);
}).catch(err => {
    console.error(err);
});
//# sourceMappingURL=getAccounts.js.map