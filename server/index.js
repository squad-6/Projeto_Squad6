const express = require("express");
const app = express();
const mysql = require('mysql2')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "3636riam",
    database: "squad06",
});



app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});
