const ListaItens=require("./ListaItens")
const Modelo=require("../Modelos")
/* 
PRODUTOS
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [JSON] :ID                     -- ADICIONAR
    DELETE :ID                          -- REMOVER
    PUT [JSON] :ID                      -- ATUALIZAR
*/
exports.GET = (req, res) => {
    const ID_PRODUTO=req.query.ID_PRODUTO
    if (ID_PRODUTO) {
        res.send(ListaItens.PRODUTO.filter((Item)=>Item.ID==ID_PRODUTO))
    }else{
        res.send(ListaItens.PRODUTO)
    }
}
exports.POST = (req, res) => {
    const ID_PRODUTO=req.query.ID_PRODUTO
    const BODY=req.body
    if (req.query.id) {
        
    }
}
exports.DELETE = (req, res) => {
    const ID_PRODUTO=req.query.ID_PRODUTO
    if (req.query.id) {
        
    }
}
exports.PUT = (req, res) => {
    const ID_PRODUTO=req.query.ID_PRODUTO
    const BODY=req.body
    if (req.query.id) {
        
    }
}