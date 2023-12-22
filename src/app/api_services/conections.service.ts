import { Injectable } from '@angular/core';
import { GerarCodigoRandonService } from "./gerar-codigo-randon.service"
import { ListaItensService } from "./lista-itens.service"
import {getDatabase, child, onValue, ref, get, set, update, remove } from "firebase/database"
import {initializeApp} from 'firebase/app'

@Injectable({
  providedIn: 'root'
})

export class ConectionsService {
  private Lista:ListaItensService =new ListaItensService()
  private RandCode:GerarCodigoRandonService =new GerarCodigoRandonService()
  private FireApp=initializeApp({
    apiKey: "AIzaSyDDWfRoi1WMnFxfiO2Inu1usm7xZfyD-A0",
    authDomain: "catalogo-5a57b.firebaseapp.com",
    projectId: "catalogo-5a57b",
    storageBucket: "catalogo-5a57b.appspot.com",
    messagingSenderId: "537589475837",
    appId: "1:537589475837:web:1f34b8de238429279a9194",
    measurementId: "G-L22BT0Q7KM"
  });
  private db=getDatabase()

  constructor(){
    console.log("START CONNECTIONS")

    // START LISTAS
    // console.log("START LIST")
    if (this.Lista.CARRINHO.length==0){
      get(child(ref(this.db),"Carrinho")).then((V:any)=>{this.Lista.CARRINHO=V.val()})
    }
    if (this.Lista.ENDERECO.length==0){
      get(child(ref(this.db),"Endereco")).then((V:any)=>{this.Lista.ENDERECO=V.val()})
    }
    // if (this.Lista.FUNCIONARIO.length==0){
    //   get(child(ref(db),"Funcionario")).then((V)=>{this.Lista.FUNCIONARIO=V.val()})
    // }
    if (this.Lista.MOVIMENTACAO.length==0){
      get(child(ref(this.db),"Movimentacao")).then((V:any)=>{this.Lista.MOVIMENTACAO=V.val()})
    }
    if (this.Lista.PRODUTO.length==0){
      get(child(ref(this.db),"Produto")).then((V:any)=>{this.Lista.PRODUTO=V.val()})
    }
    // if (this.Lista.USIARIO.length==0){
    //   get(child(ref(this.db),"Usuario")).then((V:any)=>{this.Lista.USIARIO=V.val()})
    // }

    onValue(child(ref(this.db),"Carrinho"),(V)=>{this.Lista.CARRINHO=V.val()})
    onValue(child(ref(this.db),"Endereco"),(V)=>{this.Lista.ENDERECO=V.val()})
    onValue(child(ref(this.db),"Movimentacao"),(V)=>{this.Lista.MOVIMENTACAO=V.val()})
    onValue(child(ref(this.db),"Produto"),(V)=>{this.Lista.PRODUTO=V.val()})
  }

  DeleteID=(Colecao:string,ID:string)=>{
    remove(ref(this.db,Colecao+"/"+ID))
  }
  
  Update=(Colecao:string,ID:string,NovosDados:JSON)=>{
    update(ref(this.db,Colecao+"/"+ID),NovosDados)
  }
  
  Adicionar=(Colecao:string,Dados:any)=>{
    let Code:any=this.RandCode.Gerar()
    if(Colecao!=undefined){ 
      let local:ListaItensService[]=[]
      if(Colecao=="Produto"){
          local=this.Lista.PRODUTO
      }else if(Colecao=="Carrinho"){
          local=this.Lista.CARRINHO
      }else if(Colecao=="Endereco"){
          local=this.Lista.ENDERECO
      }else if(Colecao=="Funcionario"){
          get(child(ref(this.db),"Funcionario")).then((V)=>{local=V.val()})
      }else if(Colecao=="Movimentacao"){
          local=this.Lista.MOVIMENTACAO
      }else if(Colecao=="Usuario"){
        get(child(ref(this.db),"Usuario")).then((V:any)=>{local=V.val()})
      }
      while(local.find((v)=>{v==Code})!=undefined){
          Code=this.RandCode.Gerar()
      }
      Dados.ID=Code
      set(ref(this.db,Colecao+"/"+Code),Dados)
    }
  }

  
}