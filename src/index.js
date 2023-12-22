// IMPORTS
const Carrinho=require("./Classes/Servicos/CarrinhoDAO")
const Endereco=require("./Classes/Servicos/EnderecosDAO")
const Funcionario=require("./Classes/Servicos/FuncionarioDAO")
const Movimentacao=require("./Classes/Servicos/MovimentacoesDAO")
const Produto=require("./Classes/Servicos/ProdutoDAO")
const Usuario=require("./Classes/Servicos/UsuarioDAO")

// API
const Express=require('express')
const Server=Express()

Server.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', '*'); // ou você pode definir apenas um domínio específico
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
});

/* CARRINHO
    GET :ID_USUARIO;                    -- OBTER
    POST :ID_PRODUTO,ID_USUARIO         -- ADICIONAR
    DELETE :ID_PRODUTO,ID_USUARIO       -- REMOVER
*/
Server.get("/Carrinho",Carrinho.GET)
Server.post("/Carrinho",Carrinho.POST)
Server.delete("/Carrinho",Carrinho.DELETE)

/* ENDERECOS
    GET :ID_USUARIO;                        -- OBTER
    POST [res.Body], :ID_USUARIO;           -- ADICIONAR
*/
Server.get("/Endereco",Endereco.GET)
Server.post("/Endereco",Endereco.POST)

/* FUNCIONARIOS
    GET                                 -- OBTER
    POST :ID_PRODUTO,ID_FUNCIONARIO        -- ADICIONAR
    DELETE :ID_PRODUTO,ID_FUNCIONARIO       -- REMOVER
    PUT [res.Body] :ID_FUNCIONARIO                      -- ATUALIZAR
*/
Server.get("/Funcionario",Funcionario.GET)
Server.post("/Funcionario",Funcionario.POST)
Server.delete("/Funcionario",Funcionario.DELETE)
Server.put("/Funcionario",Funcionario.PUT)

/* MOVIMENTACAO
    GET :ID_USER                            -- OBTER
    POST [res.Body]                         -- ADICIONAR
*/
Server.get("/Movimentacao/:ID_USUARIO",Movimentacao.GET)
Server.post("/Movimentacao",Movimentacao.POST)

/* PRODUTOS
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [res.Body] :ID_PRODUTO             -- ADICIONAR
    DELETE :ID_PRODUTO                  -- REMOVER
    PUT [res.Body] :ID                      -- ATUALIZAR
*/

// Server.get("/Produto",(req,res)=>{
//     return res.send({mensage:"batata"})
// })

Server.get("/Produto",Produto.GET)
Server.post("/Produto",Produto.POST)
Server.delete("/Produto",Produto.DELETE)
Server.put("/Produto",Produto.PUT)

/* USUARIO
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [res.Body]                         -- ADICIONAR
    DELETE :ID                          -- REMOVER
    PUT [res.Body] :ID                      -- ATUALIZAR
*/
Server.get("/Usuario",Usuario.GET)
Server.post("/Usuario",Usuario.POST)
Server.delete("/Usuario",Usuario.DELETE)
Server.put("/Usuario",Usuario.PUT)

// Server.post("PATH",FUNCTION)
Server.get("/",(req,res)=>{
  return res.json({mensage:"é nois"})
})
let ServidorAbert=Server.listen(3542,()=>{
    require("./Classes/Servicos/Connection")
})
function IniciarServer(){
    console.log("Iniciando")
    ServidorAbert=Server.listen(3542,()=>{
        require("./Classes/Servicos/Connection")
    })  
}
// KEEP SERVER ON
let Aviso=0
let Reqs=0
let ReqsSave=0
Server.on('request',()=>{
    console.log("Request")
    Reqs+=1;
    Aviso=0
});

setInterval(()=>{
    if(Reqs==ReqsSave){
        console.log("Aviso")
        if(Aviso<3){
            Aviso+=1
        }else{
            ServidorAbert.close(()=>{
                Aviso=0
                Reqs=0
                ReqsSave=0
                IniciarServer()
            })
        }
    }
},1000*10);// 10 sec