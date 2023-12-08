const ListaItens=require("./ListaItens")
const Modelo=require("../Modelos")
/* 
MOVIMENTACAO
    GET :ID_USER                        -- OBTER
    POST [
        ID_PRODUTO:
        QUANTIDADE:
        VALOR:
        ...
    ]                         -- ADICIONAR
*/
exports.GET = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    if (ID_USUARIO) {
        res.send(ListaItens.Movimentacao.filter((Item)=>Item.ID_USER==ID_USUARIO))
    }
}
exports.POST = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    const BODY=req.body
    if (req.query.id) {
        
    }
}