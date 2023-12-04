const Express=require('express')
const server=Express()
// GETS
server.get("/",(req,res)=>{
    return res.json({mensagem:"é nois"})
})


// TEXTO AO LIGAR O SERVER
server.listen(3000,()=>{
    console.log("Server onn")
})