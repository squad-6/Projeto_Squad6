const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "3636riam",
    database: "squad06",
});

app.use(express.json());
app.use(cors());

app.post("/cadastro-escola", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM escola WHERE email_escola = ?", {email}, (err, result) => {
        if(err){
            res.send(err);
        }
        if(result.lenght == 0){

        }
        
    })
})

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});
