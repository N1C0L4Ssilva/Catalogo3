console.log("START CONECTION")
const {Carrinho}=require("../Modelos")
const ListaItens=require("./ListaItens")
const {initializeApp}=require('firebase/app')
const {getDatabase, child, onValue, ref, get, set, update, remove }=require("firebase/database")

const FireApp=initializeApp({
  apiKey: "AIzaSyDDWfRoi1WMnFxfiO2Inu1usm7xZfyD-A0",
  authDomain: "catalogo-5a57b.firebaseapp.com",
  projectId: "catalogo-5a57b",
  storageBucket: "catalogo-5a57b.appspot.com",
  messagingSenderId: "537589475837",
  appId: "1:537589475837:web:1f34b8de238429279a9194",
  measurementId: "G-L22BT0Q7KM"
});
const db=getDatabase()

// START LISTAS
// console.log("START LIST")
if (ListaItens.CARRINHO.length==0){
  get(child(ref(db),"Carrinho")).then((V)=>{ListaItens.CARRINHO=V.val()})
}
if (ListaItens.ENDERECO.length==0){
  get(child(ref(db),"Endereco")).then((V)=>{ListaItens.ENDERECO=V.val()})
}
if (ListaItens.FUNCIONARIO.length==0){
  get(child(ref(db),"Funcionario")).then((V)=>{ListaItens.FUNCIONARIO=V.val()})
}
if (ListaItens.MOVIMENTACAO.length==0){
  get(child(ref(db),"Movimentacao")).then((V)=>{ListaItens.MOVIMENTACAO=V.val()})
}
if (ListaItens.PRODUTOS.length==0){
  get(child(ref(db),"Produto")).then((V)=>{ListaItens.PRODUTO=V.val()})
}
if (ListaItens.USIARIO.length==0){
  get(child(ref(db),"Usuario")).then((V)=>{ListaItens.USIARIO=V.val()})
}

// ATUALIZAR AS LISTAS
// console.log("UPDATE LISTAS")
onValue(child(ref(db),"Carrinho"),(V)=>{ListaItens.CARRINHO=V.val()})
onValue(child(ref(db),"Endereco"),(V)=>{ListaItens.ENDERECO=V.val()})
onValue(child(ref(db),"Funcionario"),(V)=>{ListaItens.FUNCIONARIO=V.val()})
onValue(child(ref(db),"Movimentacao"),(V)=>{ListaItens.MOVIMENTACAO=V.val()})
onValue(child(ref(db),"Produto"),(V)=>{ListaItens.PRODUTOS=V.val()})
onValue(child(ref(db),"Usuario"),(V)=>{ListaItens.USIARIO=V.val()})

exports.DeleteID=(Colecao,ID)=>{
  remove(ref(Colecao+"/"+ID))
}

exports.Update=(Colecao,ID,NovosDados)=>{
  update(ref(Colecao+"/"+ID),NovosDados)
}

exports.Adicionar=(Colecao,Dados)=>{
  set(ref(Colecao+"/"+ListaItens[Colecao.toUpperCase()].length+1),Dados)
}