const ListaItens=require("./ListaItens")
const Connection=require("./Connection")
const Modelo=require("../Modelos")
/* 
USUARIO
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [JSON]                         -- ADICIONAR
    DELETE :ID                          -- REMOVER
    PUT [JSON] :ID                      -- ATUALIZAR
*/
exports.GET = (req, res) => {
    console.log("GET")
    const QUERY=req.query
    const BODY=req.body
    console.log(QUERY,BODY,"EU AQ")
    if(QUERY != undefined){
        for(const i in ListaItens.USIARIO){
            const Res=ListaItens.USIARIO[i]
            if(Res.ACESSO==QUERY.ACESSO){
                if(Res.SENHA==QUERY.SENHA){
                    return res.json(Res)
                }else{
                    res.send({alert:"SENHA ERRADA"})
                }
            }
        }

        // if(ListaItens.USIARIO.filter((L2)=>L2.ACESSO==QUERY.ACESSO)){
        //     if(ListaItens.USIARIO.filter((L2)=>L2.SENHA==QUERY.SENHA)){
        //         res.json(ListaItens.USIARIO.filter((L2)=>L2.ACESSO==QUERY.ACESSO))
        //     }else{
        //         res.send({alert:"SENHA ERRADA"})
        //     }
        // }else{
            // }
        res.send({alert:"EMAIL INEXISTENTE"})
    }
    // const ID_USUARIO=req.query.ID_USUARIO
    // if (ID_USUARIO) {
    //     res.send(ListaItens.USIARIO.filter((Item)=>Item.ID==ID_USUARIO))
    // }else{
    //     res.send(ListaItens.USIARIO)
    // }
}
exports.POST = (req, res) => {
    console.log("POST")
    const QUERY=req.query
    console.log(QUERY)
    if(QUERY != undefined){
        let Pode=true
        for(const i in ListaItens.USIARIO){
            const Res=ListaItens.USIARIO[i]
            console.log("COMPARAÇÃO",Res.ACESSO,QUERY.ACESSO)
            if(Res.ACESSO==QUERY.ACESSO){
                Pode=false
            }
        }
        if(Pode){
            Connection.AdicionarComID("Usuario",{
                ACESSO:QUERY.ACESSO,
                ID:"",
                NOME:QUERY.NOME,
                SENHA:QUERY.SENHA,
                TIPO:"CLIENTE",
            })
        }else{
            res.json("EMAIL EXISTENTE")
        }
    }
}
exports.DELETE = (req, res) => {
    const ID_USUARIO=req.query.ID_USUARIO
    if (req.query.id) {
        
    }
}
exports.PUT = (req, res) => {
    const ID=req.query.ID_USUARIO
    const BODY=req.body
    if (ID && BODY) {
        
        if(Pode){
            Connection.Adicionar("Usuario",ID,{
                NOME:BODY.NOME,
                ACESSO:BODY.ACESSO,
                SENHA:BODY.SENHA,
            })
        }else{
            return res.json("EMAIL EXISTENTE")
        }
    }
}

exports.Autenticar=(req,res)=>{
    const BODY=req.body
    res.send(ListaItens.USIARIO.filter((Item)=>
        Item.ACESSO==BODY.ACESSO &&
            Item.SENHA==BODY.SENHA
    ))
}