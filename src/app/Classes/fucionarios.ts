export class Fucionarios {
    ID:Number
    NOME:String
    ACESSO:String
    SENHA:String
    TIPO:String
    constructor(Id:Number,Nm:String, Acc:String, Snh:String,Tip:String){
        this.ID=Id
        this.NOME=Nm
        this.ACESSO=Acc
        this.SENHA=Snh
        this.TIPO=Tip
    }
    // GETTERs
    public GetID(){return this.ID;}
    public GetNOME(){return this.NOME;}
    public GetACESSO(){return this.ACESSO;}
    public GetSENHA(){return this.SENHA;}
    public GetTIPO(){return this.TIPO;}
}
