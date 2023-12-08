const ListaItens=require("./ListaItens")
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
    const ID_FUNCIONARIO=req.query.ID_FUNCIONARIO
    const BODY=req.body
    
}
exports.DELETE = (req, res) => {
    const ID_FUNCIONARIO=req.query.ID_FUNCIONARIO
    
}

exports.PUT = (req, res) => {
    const BODY=req.body

}