import Crud from '../Crud.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

// Necessário para obter __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const router = express.Router()

//Instância da classe - funciona como prototype
const crud = new Crud()

app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o body-parser para dados JSON
app.use(bodyParser.json());
const pathUrl = '../p1'


app.use(express.static(path.join(__dirname, '../../pages/public')))

    app.get('/', function(req,res){       
        res.send("Olá express")
    })

    app.get('/inserir', function(req, res){
        res.sendFile("inserir.html", {root: pathUrl});
    })

    app.post('/inserirC', function(req, res){
        const { nome, email } = req.body;
        const aluno = {"nome_aluno": nome, "email_aluno": email};
        crud.inserirAluno(aluno, function(aluno){
            res.json(aluno);
        })
    })

    app.get('/procurar', function(req, res){
        res.sendFile("procurar.html", { root:  pathUrl})
    })

    app.post("/procurarC", function(req, res){
        const { id, nome, email } = req.body;
        const aluno = {"id_aluno": id, "nome_aluno": nome, "email_aluno": email};
        crud.selecionarAluno(id, function(aluno){
            res.json(aluno);
        })
    })

    let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
})
