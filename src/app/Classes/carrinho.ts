export class Carrinho {
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
     // GETTERs
     public GetID(){return this.ID;}
     public GetID_USER(){return this.ID_USER;}
     public GetID_PRODUTO(){return this.ID_PRODUTO;}
     public GetQUANTIDADE(){return this.QUANTIDADE;}
     public GetTOTAL(){return this.TOTAL;}
}
