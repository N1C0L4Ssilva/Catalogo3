export class Enderecos {
    ID:Number
    ID_USER:Number
    ENDERECO:String
    NUMERO:Number
    COMPLEMENTO:String
    VALOR:Number
    constructor(Id:Number,User:Number,Edr:String,Nrm:Number,Comp:String,Vlr:Number){
       this.ID=Id
       this.ID_USER=User
       this.ENDERECO=Edr
       this.NUMERO=Nrm
       this.COMPLEMENTO=Comp
       this.VALOR=Vlr 
    }
    // GETTERs
    public GetID(){return this.ID;}
    public GetID_USER(){return this.ID_USER;}
    public GetENDERECO(){return this.ENDERECO;}
    public GetNUMERO(){return this.NUMERO;}
    public GetCOMPLEMENTO(){return this.COMPLEMENTO;}
    public GetVALOR(){return this.VALOR;}
}
