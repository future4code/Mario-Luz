"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAllAccounts_1 = require("./getAllAccounts");
const fs_1 = require("fs");
const userName = process.argv[4];
const userCpf = process.argv[5];
const valueInput = process.argv[6];
let treatedValue = undefined;
if (valueInput === undefined) {
    treatedValue = 0;
}
else {
    treatedValue = Number(valueInput);
}
if (userName === undefined || userCpf === undefined || treatedValue < 1) {
    console.error("Insira os dados corretamente.");
}
else {
    getAllAccounts_1.getAllAccounts.then((data) => {
        const indexOfAccount = data.findIndex((account) => {
            return account.cpf === userCpf;
        });
        const selectedAccount = data[indexOfAccount];
        const newValue = selectedAccount.balance + treatedValue;
        const accountNewData = Object.assign(Object.assign({}, selectedAccount), { balance: newValue });
        data.splice(indexOfAccount, 1);
        data.push(accountNewData);
        const dataToString = JSON.stringify(data);
        const saveAccounts = new Promise((resolve, reject) => {
            fs_1.writeFile('./allAccounts.txt', dataToString, () => {
                resolve("Saldo atualizado com sucesso.");
            });
        });
        saveAccounts.then((msg) => {
            console.log(msg);
        }).catch((err) => {
            console.error("Erro ao atualizar a conta.");
        });
    }).catch(err => {
        console.error(err);
    });
}
//# sourceMappingURL=addToBalance.js.map