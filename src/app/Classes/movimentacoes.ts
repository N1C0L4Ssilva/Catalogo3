export class Movimentacoes {
    ID:Number
    ID_USER:Number
    ID_PRODUTO:Number
    QUANTIDADE:Number
    TOTAL:Float32Array;
    constructor(Id:Number,User:Number,Prod:Number,Qnt:Number,Tot:Float32Array){
        this.ID=Id
        this.ID_USER=User
        this.ID_PRODUTO=Prod
        this.QUANTIDADE=Qnt
        this.TOTAL=Tot
    }
}
