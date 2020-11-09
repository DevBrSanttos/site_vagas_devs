const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars');
const Vaga = require('./models/Vaga');
const sequelize = require('Sequelize');
const Op = sequelize.Op;

const PORT = 8081;

//conexao com banco
const db = require('./db/conexao');
const { Sequelize } = require('Sequelize');

//body-parser pergar requisições
app.use(bodyParser.urlencoded({extended: false}));
 
//hadle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//rota arquivo principal
app.get('/', (req, res)=>{
    let busca = req.query.vaga;
    let query = '%'+busca+'%';
    if(!busca){
        Vaga.findAll({order: [
            ['createdAt', 'DESC']
        ]}).then(vagas =>{
            res.render('index', {
                vagas
            })
        }).catch("erro ao buscar vaga");
    }else{
        Vaga.findAll({
            where: {titulo: {[Op.like]: query}},
            order: [['createdAt', 'DESC']]
        }).then(vagas =>{
            res.render('index', {
                vagas, busca
            });
        }).catch(err => console.log("erro ao buscar a vaga:", err));
    }

});

//rotas
app.use('/vaga', require('./routes/vagas'));

app.listen(PORT, function(){
    console.log(`o express está rodando na porta ${PORT}`);
});
