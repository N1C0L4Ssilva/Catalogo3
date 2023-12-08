/* 
FUNCIONARIOS
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [
        NOME:
        ACESSO:
        SENHA:
        TIPO:
    ]
    :ID                                 -- ADICIONAR
    DELETE :ID                          -- REMOVER
    PUT [
        NOME:
        ACESSO:
        SENHA:
        TIPO:
    ]:ID                               -- ATUALIZAR
*/

exports.GET = (req, res) => {
    if (req.query.id) {
        // TEM ID
    }else{
        // TODOS
    }
}
exports.POST = (req, res) => {
    
}
exports.DELETE = (req, res) => {

}
exports.PUT = (req, res) => {

}