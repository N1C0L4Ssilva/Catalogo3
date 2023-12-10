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
    const QUERY=req.query
    if(QUERY!=null){
        if(QUERY.TYPEFIND=="MARKER"){
            const Valores=[]
            for(const i in ListaItens.PRODUTOS){
                const Ql=ListaItens.PRODUTOS[i]
                if(!Valores.includes(Ql["MARKADOR"])){
                    Valores.push(Ql["MARKADOR"])
                }
            }
            return res.json(Valores)

        }else if(QUERY.TYPEFIND=="ITEM_BY_MARKER"){
            const IBM=QUERY.ITEM_BY_MARKER
            const Valores=[]
            for(const i in ListaItens.PRODUTOS){
                const Ql=ListaItens.PRODUTOS[i]
                if(Ql["MARCA"]==IBM){
                    Valores.push(Ql)
                }
            }
            return res.json(Valores)

        }else if(QUERY.TYPEFIND=="ITEM_BY_SEARCH"){
            const IBS=QUERY.ITEM_BY_SEARCH.toUpperCase()
            const Valores=[]
            for(const i in ListaItens.PRODUTOS){
                const Ql=ListaItens.PRODUTOS[i]
                if(Ql["NOME"].search(IBS)!=-1){
                    Valores.push(Ql)
                }
            }
            return res.json(Valores)
        }
    }else if(ID_PRODUTO){
        console.log("ID_Produto")
        return res.send(ListaItens.PRODUTO.filter((Item)=>Item.ID==ID_PRODUTO))
    }else{
        // console.log("BATATA",ListaItens.PRODUTO)
        return res.send(ListaItens.PRODUTO)
    }
}
exports.POST = (req, res) => {
    const BODY=req.body
    if (BODY) {
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
    }else{
        res.status(400).send({ error: "REQUISITAMOS MAIS DADOS" });
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