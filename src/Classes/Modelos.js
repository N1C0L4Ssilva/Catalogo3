exports.Carrinho=class{
    ID_USER=""
    ID_PRODUTO=""
    QUANTIDADE=0
    TOTAL=0
    constructor(Obj){
        this.ID_USER=Obj.ID_USER
        this.ID_PRODUTO=Obj.ID_PRODUTO
        this.QUANTIDADE=Obj.QUANTIDADE
        this.TOTAL=Obj.TOTAL
    }
}

class Endereco{
    
    ID_USER=""
    ENDERECO=""
    NUMERO=""
    COMPLEMENTO=""
    CEP=""
    VALOR=0
}

 class Funcionario{
    
    NOME=""
    ACESSO=""
    SENHA=""
    TIPO=0
}

 class Movimentacao{
    
    ID_USER=""
    ID_PRODUTO=""
    QUANTIDADE=0
    TOTAL=0
}

class Produto{
    
    NOME=""
    DESCRCAO=""
    VALOR=0
    MARKADOR=""
    MARCA=""
    ESPECIFC=""
    QUANTIDADE=0
    TAGS=""
    IMG=""
}

 class Usuario{
    
    NOME=""
    ACESSO=""
    SENHA=""
}