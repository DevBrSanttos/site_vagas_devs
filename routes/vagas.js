const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const Vaga = require('../models/Vaga');

//form da rote de view
router.get('/pagAdd', (req, res) =>{
    res.render('add')
});


//inserir dados
router.post('/add', (req, res)=>{
    let {titulo, descricao, salario, empresa, email} = req.body;

    Vaga.create({
        titulo,
        descricao,
        salario,
        empresa,
        email
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log("Deu erro ao inserir", err));  
    
});

//detalhes da vaga
router.get('/detalhesVaga/:id', (req, res) =>{    
    Vaga.findOne({
        where: {id: req.params.id}
    }).then(vaga =>{        
        res.render('verVaga', {
            vaga
        });
    }).catch(err => console.log("Erro ao buscar a vaga:", err));


})


module.exports = router;