// const mysql = require('mysql');
// const connection = mysql.createConnection({
//     host: 'sql105.infinityfree.com',
//     user: 'if0_35469362',
//     password: 'rIDOa1iQWGkHp',
//     database: 'if0_35469362__catalogo',
//     port: 3306
// });

// connection.connect(function(err) {
//     if (err) {
//       console.error('Erro ao conectar: ' + err.stack);
//       return;
//     }
//     console.log('Conectado como ID ' + connection.threadId);
// });

const Express=require('express')
const Server=Express()

Server.get("/",(req,res)=>{
  return res.json({mensage:"é nois"})
})

Server.listen(3000,()=>{
  console.log("Funfando")
})