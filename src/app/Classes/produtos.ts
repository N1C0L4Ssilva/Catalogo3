export class Produtos {
    ID:Number;
    NOME:String;
    VALOR:Number;
    MARKADOR:String;
    MARCA:String;
    ESPECIFC:String;
    QUANTIDADE:Number;
    TAGS:String;
    IMG:String;
    constructor(
        ID:Number,Nm:String,Vl:Number,Mrk:String,M:String,
        E:String,Q:Number,Tgs:String,img:String){
            this.ID=ID;
            this.NOME=Nm;
            this.VALOR=Vl;
            this.MARKADOR=Mrk;
            this.MARCA=M;
            this.ESPECIFC=E;
            this.QUANTIDADE=Q;
            this.TAGS=Tgs;
            this.IMG=img;
    }

    public GetID(){return this.ID;}
    public GetNOME(){return this.NOME;}
    public GetVALOR(){return this.VALOR;}
    public GetMARKADOR(){return this.MARKADOR;}
    public GetMARCA(){return this.MARCA;}
    public GetESPECIFC(){return this.ESPECIFC;}
    public GetQUANTIDADE(){return this.QUANTIDADE;}
    public GetTAGS(){return this.TAGS;}
    public GetIMG(){return this.IMG;}

}
