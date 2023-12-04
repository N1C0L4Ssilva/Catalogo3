export class Usuarios {
    ID:Number;
    NOME:String;
    ACESSO:String;
    SENHA:String;
    constructor (Id:Number,Nome:String,Acesso:String,Senha:String){
        this.ID=Id;
        this.NOME=Nome;
        this.ACESSO=Acesso;
        this.SENHA=Senha;
    }
    // GETTERs
    public GetID(){return this.ID;}
    public GetNOME(){return this.NOME;}
    public GetACESSO(){return this.ACESSO;}
    public GetSENHA(){return this.SENHA;}
}
