const sequelize = require('../db/conexao');
const Sequelize = require('sequelize');
const db = require('../db/conexao');

const Vaga = db.define('vagas', {
    titulo: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.TEXT
    },
    salario:{
        type: Sequelize.TEXT
    },
    empresa:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.TEXT
    }
    
});

module.exports = Vaga;