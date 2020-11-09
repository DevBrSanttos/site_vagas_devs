const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite', //tipo de banco
    storage: './db/BancoApp.db'
});
//connectar ao banco
sequelize.
    authenticate()
    .then(() =>{
        console.log("banco connectado com sucesso");
    })
    .catch(err =>{
        console.log("Ocorreu um erro ao se conectar ao banco",err);
    });
module.exports = sequelize;