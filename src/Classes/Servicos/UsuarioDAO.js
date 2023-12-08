const ListaItens=require("./ListaItens")
const Connection=require("./Connection")
const Modelo=require("../Modelos")
/* 
USUARIO
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [JSON]                         -- ADICIONAR
    DELETE :ID                          -- REMOVER
    PUT [JSON] :ID                      -- ATUALIZAR
*/
exports.GET = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    if (ID_USUARIO) {
        res.send(ListaItens.USIARIO.filter((Item)=>Item.ID==ID_USUARIO))
    }else{
        res.send(ListaItens.USIARIO)
    }
}
exports.POST = (req, res) => {
    const BODY=req.body
    if (ID_USUARIO && BODY) {
        Connection.Adicionar("Usuario",{
            NOME:BODY.NOME,
            ACESSO:BODY.ACESSO,
            SENHA:BODY.SENHA,
        })
    }
}
exports.DELETE = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    if (req.query.id) {
        
    }
}
exports.PUT = (req, res) => {
    const ID=req.query.ID_USUARIO
    const BODY=req.body
    if (ID && BODY) {
        Connection.Adicionar("Usuario",ID,{
            NOME:BODY.NOME,
            ACESSO:BODY.ACESSO,
            SENHA:BODY.SENHA,
        })
    }
}

exports.Autenticar=(req,res)=>{
    const BODY=req.body
    res.send(ListaItens.USIARIO.filter((Item)=>
        Item.ACESSO==BODY.ACESSO &&
            Item.SENHA==BODY.SENHA
    ))
}