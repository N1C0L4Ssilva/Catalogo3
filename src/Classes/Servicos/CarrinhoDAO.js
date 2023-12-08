const ListaItens=require("./ListaItens")
const Connection=require("./Connection")
const Modelo=require("../Modelos")
/* 
CARRINHO
    GET :ID_USUARIO;                    -- OBTER
    POST :ID_PRODUTO,ID_USUARIO         -- ADICIONAR
    DELETE :ID_PRODUTO,ID_USUARIO       -- REMOVER
*/
exports.GET = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    if (ID_USUARIO) {
        res.send(ListaItens.CARRINHO.filter((Item) => Item.ID_USER==ID_USUARIO))
    }
}
exports.POST = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    const ID_PRODUTO=req.query.ID_PRODUTO
    const BODY=req.body
    if (ID_USUARIO && ID_PRODUTO && BODY) {
        Connection.Adicionar("Carrinho",{
            ID_USER:BODY.ID_USER,
            ID_PRODUTO:BODY.ID_PRODUTO,
            QUANTIDADE:BODY.QUANTIDADE,
            TOTAL:BODY.TOTAL
        })
    }
}
exports.DELETE = (req, res) => {
    const ID=req.query.ID
    const BODY=req.body
    if (ID) {
        Connection.Update("Carrinho",ID,{
            ID_USER:BODY.ID_USER,
            ID_PRODUTO:BODY.ID_PRODUTO,
            QUANTIDADE:BODY.QUANTIDADE,
            TOTAL:BODY.TOTAL
        })
    }
}