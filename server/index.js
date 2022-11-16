const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "3636riam",
    database: "acessoescola",
});

app.use(express.json());
app.use(cors());

/*app.post("/cadastro-escola", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM escola WHERE email_escola = ?", [email], (err, result) =>{
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            db.query("INSERT INTO escola (email_escola, senha_escola) VALUES (?, ?)", [email, password], (err, response) => {
                if(err){
                    res.send(err);
                }
                res.send({msg: "Cadastrado com sucesso!"});
            })
        }else{
            res.send({msg: "Email já cadastrado."})
        }
    });
});*/

/*app.post("/cadastro-parceiros", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM parceiro WHERE email_parceiro = ?", [email], (err, result) =>{
        if(err){
            res.send(err);
        }
        if(result.length == 0){
            db.query("INSERT INTO parceiro (email_parceiro, senha_parceiro) VALUES (?, ?)", [email, password], (err, response) => {
                if(err){
                    res.send(err);
                }
                res.send({msg: "Cadastrado com sucesso!"});
            })
        }else{
            res.send({msg: "Email já cadastrado."})
        }
    });
});*/

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    db.query("SELECT * FROM escola WHERE email_escola = ? AND senha_escola = ?", [email, password], (err, result) => {
        if(err){
            res.send(err);
        }
        if(result.length > 0){
            res.send({msg: "Logado com sucesso!"})
        }
        else{
            res.send({msg: "Email ou senha incorretos."})
        }
    })
});
    

app.listen(3001, () => {
    console.log("Rodando na porta 3001")
});
