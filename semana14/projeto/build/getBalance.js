"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllAccounts_1 = require("./getAllAccounts");
const userName = process.argv[4];
const userCpf = process.argv[5];
let selectedAccount = [];
if (userName === undefined || userCpf === undefined) {
    console.error("Passe seus dados corretamente.");
}
else {
    getAllAccounts_1.getAllAccounts.then((data) => {
        selectedAccount = data.filter((account) => {
            return account.name === userName && account.cpf === userCpf;
        });
        console.log('Seu saldo é: R$', selectedAccount[0].balance.toFixed(2));
    }).catch(err => {
        console.error(err);
    });
}
//# sourceMappingURL=getBalance.js.map