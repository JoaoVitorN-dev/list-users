import express from 'express';
import cors from 'cors';


let servidor = express();
servidor.use(cors())

servidor.use(express.json());

servidor.use(cors({
    origin: "http://127.0.0.1:5500"
}))

let user = {
    nome : "",
    email: "",
    senha : ""
};
let users = [];


servidor.post("/user", (req, res) => {
    user ={
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }

    users.push(user);

    res.status(201).json({
        message: "Usuario Criado!"
    });
});

servidor.get("/users", (req, res) => {
    res.status(200).json(users)
});

servidor.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});