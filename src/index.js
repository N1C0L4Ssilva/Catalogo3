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


/* 
CARRINHO
    GET :ID_USUARIO;                    -- OBTER
    POST :ID_PRODUTO,ID_USUARIO         -- ADICIONAR
    DELETE :ID_PRODUTO,ID_USUARIO       -- REMOVER
*/
Server.get("/Carrinho/:ID_USUARIO",Carrinho.GET)
Server.post("/Carrinho/:ID_USUARIO&:ID_PRODUTO",Carrinho.POST)
Server.delete("/Carrinho/:ID_USUARIO&:ID_PRODUTO",Carrinho.DELETE)

/* 
ENDERECOS
GET :ID_USUARIO;                    -- OBTER
POST [res.Body], :ID_USUARIO;           -- ADICIONAR
*/
Server.get("/Endereco/:ID_USUARIO",Endereco.GET)
Server.post("/Endereco/:ID_USUARIO",Endereco.POST)


/* 
FUNCIONARIOS
    GET                                 -- OBTER
    POST :ID_PRODUTO,ID_FUNCIONARIO        -- ADICIONAR
    DELETE :ID_PRODUTO,ID_FUNCIONARIO       -- REMOVER
    PUT [res.Body] :ID_FUNCIONARIO                      -- ATUALIZAR
*/
Server.get("/Funcionario/:ID_FUNCIONARIO",Funcionario.GET)
Server.post("/Funcionario/:ID_FUNCIONARIO&:ID_PRODUTO",Funcionario.POST)
Server.delete("/Funcionario/:ID_FUNCIONARIO&:ID_PRODUTO",Funcionario.DELETE)
Server.put("/Funcionario/:ID_FUNCIONARIO",Funcionario.PUT)

/* 
MOVIMENTACAO
GET :ID_USER                        -- OBTER
POST [res.Body]                         -- ADICIONAR
*/
Server.get("/Movimentacao/:ID_USUARIO",Movimentacao.GET)
Server.post("/Movimentacao",Movimentacao.POST)

/* 
PRODUTOS
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [res.Body] :ID_PRODUTO             -- ADICIONAR
    DELETE :ID_PRODUTO                  -- REMOVER
    PUT [res.Body] :ID                      -- ATUALIZAR
*/
Server.get("/Produto/:ID_PRODUTO",Produto.GET)
Server.post("/Produto/:ID_PRODUTO",Produto.POST)
Server.delete("/Produto/:ID_PRODUTO",Produto.DELETE)
Server.put("/Produto/:ID_PRODUTO",Produto.PUT)

/* 
USUARIO
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [res.Body]                         -- ADICIONAR
    DELETE :ID                          -- REMOVER
    PUT [res.Body] :ID                      -- ATUALIZAR
*/
Server.get("/Usuario/:ID_USUARIO",Usuario.GET)
Server.post("/Usuario/:ID_USUARIO",Usuario.POST)
Server.delete("/Usuario/:ID_USUARIO",Usuario.DELETE)
Server.put("/Usuario/:ID_USUARIO",Usuario.PUT)

// Server.post("PATH",FUNCTION)
Server.get("/",(req,res)=>{
  return res.json({mensage:"é nois"})
})

Server.listen(3000,()=>{
  console.log("Funfando")
})