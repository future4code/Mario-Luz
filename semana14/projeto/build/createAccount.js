"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const getAllAccounts_1 = require("./getAllAccounts");
const moment = require("moment");
const userName = process.argv[4];
const userCpf = process.argv[5];
const userBirth = process.argv[6];
const formatedBirth = moment(userBirth, "DD/MM/YYYY");
const age = moment().diff(moment(formatedBirth, "DD/MM/YYYY"), 'years');
console.log(age);
if (age < 18) {
    console.error("Você precisar ter mais de 18 anos para criar uma conta");
}
else {
    let accountsList = [];
    getAllAccounts_1.getAllAccounts.then((data) => {
        accountsList = data;
        createAccount(accountsList);
    }).catch(err => {
        console.error(err);
    });
    const createAccount = (data) => {
        if (userName === undefined || userCpf === undefined || userBirth === undefined) {
            console.error('Erro ao criar a conta.');
        }
        else {
            const userData = {
                name: userName,
                cpf: userCpf,
                birth: userBirth,
                balance: 0,
                statement: []
            };
            accountsList.push(userData);
            const dataToString = JSON.stringify(accountsList);
            const saveAccount = new Promise((resolve, reject) => {
                fs_1.writeFile('./allAccounts.txt', dataToString, () => {
                    resolve("Conta cadastrada com sucesso");
                });
            });
            saveAccount.then((msg) => {
                console.log(msg);
            }).catch((err) => {
                console.error("Erro ao criar a conta.");
            });
        }
    };
}
//# sourceMappingURL=createAccount.js.map