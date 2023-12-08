const ListaItens=require("./ListaItens")
const Connection=require("./Connection")
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
    if (ID_PRODUTO && BODY) {
        Connection.Adicionar("Produto",{
            ID:BODY.ID,
            NOME:BODY.NOME,
            DESCRCAO:BODY.DESCRCAO,
            VALOR:BODY.VALOR,
            MARKADOR:BODY.MARKADOR,
            MARCA:BODY.MARCA,
            ESPECIFC:BODY.ESPECIFC,
            QUANTIDADE:BODY.QUANTIDADE,
            TAGS:BODY.TAGS,
            IMG:BODY.IMG,
        })
    }
}
exports.DELETE = (req, res) => {
    const ID_PRODUTO=req.query.ID_PRODUTO
    if (req.query.id) {
        
    }
}
exports.PUT = (req, res) => {
    const ID=req.query.ID_PRODUTO
    const BODY=req.body
    if (ID_PRODUTO && BODY) {
        Connection.Adicionar("Produto",ID,{
            ID:BODY.ID,
            NOME:BODY.NOME,
            DESCRCAO:BODY.DESCRCAO,
            VALOR:BODY.VALOR,
            MARKADOR:BODY.MARKADOR,
            MARCA:BODY.MARCA,
            ESPECIFC:BODY.ESPECIFC,
            QUANTIDADE:BODY.QUANTIDADE,
            TAGS:BODY.TAGS,
            IMG:BODY.IMG,
        })
    }
}