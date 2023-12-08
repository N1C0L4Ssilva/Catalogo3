const ListaItens=require("./ListaItens")
const Modelo=require("../Modelos")
/* 
ENDERECOS
    GET :ID_USUARIO;                    -- OBTER
    POST [
        ENDERECO:
        NUMERO:
        COMPLEMENTO:
        VALOR:
    ], :ID_USUARIO;                     -- ADICIONAR
*/
exports.GET = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    if (ID_USUARIO) {
        res.send(ListaItens.ENDERECO.filter((Item)=>Item.ID_USER==ID_USUARIO))
    }else{
        res.send(ListaItens.ENDERECO)
    }
}
exports.POST = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    const BODY=req.body
    
}
