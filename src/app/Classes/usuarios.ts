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
}
