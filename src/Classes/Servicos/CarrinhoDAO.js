const ListaItens=require("./ListaItens")
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
    if (ID_USUARIO && ID_PRODUTO) {
        
    }
}
exports.DELETE = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    const ID_PRODUTO=req.query.ID_PRODUTO
    if (ID_USUARIO && ID_PRODUTO) {

    }
}