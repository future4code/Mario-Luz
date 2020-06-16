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
const knex_1 = __importDefault(require("knex"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
dotenv_1.default.config();
const connection = knex_1.default({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});
const app = express_1.default();
app.use(express_1.default.json());
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
const checkFields = (fieldVar, res) => {
    if (fieldVar === "" ||
        fieldVar === " " ||
        fieldVar === undefined ||
        fieldVar === null) {
        res.status(400).send({
            message: "Params invalid"
        });
    }
};
const createUser = (id, name, nickname, email, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${id} ${name} ${nickname} ${email}`);
    checkFields(name, res);
    checkFields(nickname, res);
    checkFields(email, res);
    const result = yield connection.raw(`
    INSERT INTO Users(id, name, nickname, email) VALUE ("${id}","${name}", "${nickname}", "${email}");
    `);
});
app.put("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        createUser(Date.now().toString(), req.body.name, req.body.nickname, req.body.email, res);
        res.status(200).send();
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}));
const getUserById = (id, res) => __awaiter(void 0, void 0, void 0, function* () {
    checkFields(id, res);
    const result = yield connection.raw(`
        SELECT * FROM Users WHERE id = "${id}";
    `);
    return result[0][0];
});
app.get("/user/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield getUserById(id, res);
        user === undefined ? res.status(400).send({
            message: "Usuário não encontrado"
        }) : false;
        res.status(200).send(user);
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}));
const updateUser = (id, name, nickname, res) => __awaiter(void 0, void 0, void 0, function* () {
    checkFields(id, res);
    checkFields(name, res);
    checkFields(nickname, res);
    const result = yield connection.raw(`
        UPDATE Users SET name = "${name}", nickname = "${nickname}" WHERE id = "${id}";
    `);
});
app.post("/user/edit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.body.id;
        const name = req.body.name;
        const nickname = req.body.nickname;
        updateUser(id, name, nickname, res);
        res.status(200).send();
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}));
const createTask = (id, title, description, limitDate, creatorUserId, res) => __awaiter(void 0, void 0, void 0, function* () {
    checkFields(id, res);
    checkFields(title, res);
    checkFields(description, res);
    checkFields(limitDate, res);
    checkFields(creatorUserId, res);
    const result = yield connection.raw(`
        INSERT INTO Tasks(id ,title ,description , limit_date, creator_user_id)
        VALUE ("${id}", "${title}", "${description}", "${limitDate}", "${creatorUserId}");
    `);
});
app.put("/task", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Date.now().toString();
        const title = req.body.title;
        const description = req.body.description;
        const limitDate = moment_1.default(req.body.limitDate, "DD/MM/YYYY").format("YYYY/MM/DD").toString();
        const creatorUserId = req.body.creatorUserId;
        createTask(id, title, description, limitDate, creatorUserId, res);
        res.status(200).send();
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}));
const getTask = (id, res) => __awaiter(void 0, void 0, void 0, function* () {
    checkFields(id, res);
    const result = yield connection.raw(`
        SELECT t.id,
            t.title,
            t.description,
            t.limit_date,
            t.status,
            u.id as id_user,
            u.nickname
        FROM Tasks t
        JOIN Users u
        ON t.creator_user_id = u.id
        AND t.id = "${id}";
    `);
    result[0].length === 0 ? res.status(400).send({ message: "Nenhuma tarefa encontrada" }) : false;
    const resultConvert = {
        taskId: result[0][0].id,
        title: result[0][0].title,
        description: result[0][0].description,
        limitDate: moment_1.default(result[0][0].limit_date).format("DD/MM/YYYY"),
        status: result[0][0].status,
        creatorUserId: result[0][0].id_user,
        creatorUserNickname: result[0][0].nickname
    };
    return resultConvert;
});
app.get("/task/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const task = yield getTask(id, res);
        res.status(200).send(task);
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}));
//# sourceMappingURL=index.js.map