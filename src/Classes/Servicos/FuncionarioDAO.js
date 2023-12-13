const ListaItens=require("./ListaItens")
const Connection=require("./Connection")
const Modelo=require("../Modelos")
/* 
FUNCIONARIOS
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [
        NOME:
        ACESSO:
        SENHA:
        TIPO:
    ]
    :ID                                 -- ADICIONAR
    DELETE :ID                          -- REMOVER
    PUT [
        NOME:
        ACESSO:
        SENHA:
        TIPO:
    ]:ID                               -- ATUALIZAR
*/
exports.GET = (req, res) => {
    const ID_FUNCIONARIO=req.query.ID_FUNCIONARIO
    if (ID_FUNCIONARIO) {
        res.send(ListaItens.FUNCIONARIO.filter((Item)=>Item.ID==ID_FUNCIONARIO))
    }else{
        res.send(ListaItens.FUNCIONARIO)
    }
}
exports.POST = (req, res) => {
    const BODY=req.body
    if (BODY) {
        Connection.AdicionarComID("Funcionario",{
            NOME:BODY.NOME,
            ACESSO:BODY.ACESSO,
            SENHA:BODY.SENHA,
            TIPO:BODY.TIPO
        })
    }
}
exports.DELETE = (req, res) => {
    const ID_FUNCIONARIO=req.query.ID_FUNCIONARIO
    
}

exports.PUT = (req, res) => {
    const ID=req.query.ID_FUNCIONARIO
    const BODY=req.body
    Connection.Adicionar("Funcionario",ID,{
        NOME:BODY.NOME,
        ACESSO:BODY.ACESSO,
        SENHA:BODY.SENHA,
        TIPO:BODY.TIPO
    })
}

exports.Autenticar=(req,res)=>{
    const BODY=req.body
    res.send(ListaItens.FUNCIONARIO.filter((Item)=>
        Item.ACESSO==BODY.ACESSO &&
            Item.SENHA==BODY.SENHA
    ))
}