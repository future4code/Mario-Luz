"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// 1
// A. Endpoint GET.
// B.Any[]
//
// 2
// A
//
// 3
//A.
//B.
//
// 4
// A.
// }
const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/labenews`;
const getSubs = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield axios_1.default.get(`${baseUrl}/subscribers/all`);
    return users.data.map((res) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
});
const createNews = (title, content, date) => __awaiter(void 0, void 0, void 0, function* () {
    yield axios_1.default.put(`${baseUrl}/news`, {
        title,
        content,
        date,
    });
});
const sendNotification = (users, message) => __awaiter(void 0, void 0, void 0, function* () {
    for (const user of users) {
        yield axios_1.default.post(`${baseUrl}/notifications/send`, {
            subscriberId: user.id,
            message,
        });
    }
    console.log("NOTICIAS ENVIADAS!!!");
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subs = yield getSubs();
        console.log("Subs: ", subs);
        yield createNews("PRIMEIRA NOTICIA", "NOTICIA QUENTE", 123);
        console.log("Notícia criada!");
        const promisesArray = [];
        for (const sub of subs) {
            promisesArray.push(sendNotification(subs, "Leia agora essa nova!"));
        }
    }
    catch (err) {
        console.log(err);
    }
});
main();
