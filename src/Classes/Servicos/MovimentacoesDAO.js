const ListaItens=require("./ListaItens")
const Connection=require("./Connection")
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
    if (ID_USUARIO && BODY) {
        Connection.Adicionar("Movimentacao",{
            ID_USER:BODY.ID_USER,
            ID_PRODUTO:BODY.ID_PRODUTO,
            QUANTIDADE:BODY.QUANTIDADE,
            TOTAL:BODY.TOTAL
        })
    }
}