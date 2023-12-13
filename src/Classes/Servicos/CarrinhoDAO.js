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
    }else{
        res.send("Error")
    }
}
exports.POST = (req, res) => {
    const QUERY=req.query
    if (QUERY!=undefined) {
        if(QUERY.ID_USUARIO!=undefined && QUERY.ID_PRODUTO!=undefined){
            const VItem=ListaItens.PRODUTOS[QUERY.ID_PRODUTO].VALOR
            Connection.Adicionar("Carrinho",{
                ID_USER:QUERY.ID_USUARIO,
                ID_PRODUTO:QUERY.ID_PRODUTO,
                QUANTIDADE:1,
                TOTAL:VItem
            })
        }
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