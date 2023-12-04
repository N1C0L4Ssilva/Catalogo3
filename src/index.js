// DB CONNECTION
const {initializeApp}=require('firebase/app')
const {getFirestore, collection, getDoc, getDocs, doc}=require('firebase/firestore')

const FireApp=initializeApp({
  apiKey: "AIzaSyDDWfRoi1WMnFxfiO2Inu1usm7xZfyD-A0",
  authDomain: "catalogo-5a57b.firebaseapp.com",
  projectId: "catalogo-5a57b",
  storageBucket: "catalogo-5a57b.appspot.com",
  messagingSenderId: "537589475837",
  appId: "1:537589475837:web:1f34b8de238429279a9194",
  measurementId: "G-L22BT0Q7KM"
});
const db=getFirestore(FireApp)
const Docs=getDocs(collection(db,"PRODUTOS"))
Docs.then((Value)=>{
  Value.forEach((v)=>{
    console.log(v.data())
  })
})


// API
const Express=require('express')
const Server=Express()

/* 
CARRINHO
    GET :ID_USUARIO;                    -- OBTER
    POST :ID_PRODUTO,ID_USUARIO         -- ADICIONAR
    DELETE :ID_PRODUTO,ID_USUARIO       -- REMOVER
*/

/* 
ENDERECOS
    GET :ID_USUARIO;                    -- OBTER
    POST [JSON], :ID_USUARIO;           -- ADICIONAR
*/

/* 
FUNCIONARIOS
    GET                                 -- OBTER
    POST :ID_PRODUTO,ID_USUARIO         -- ADICIONAR
    DELETE :ID_PRODUTO,ID_USUARIO       -- REMOVER
    PUT [JSON] :ID                      -- ATUALIZAR
*/

/* 
MOVIMENTACAO
    GET :ID_USER                        -- OBTER
    POST [JSON]                         -- ADICIONAR
*/

/* 
PRODUTOS
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [JSON] :ID_PRODUTO             -- ADICIONAR
    DELETE :ID_PRODUTO                  -- REMOVER
    PUT [JSON] :ID                      -- ATUALIZAR
*/

/* 
USUARIO
    GET                                 -- OBTER
    GET :ID                             -- OBTER ESPECIFICO
    POST [JSON]                         -- ADICIONAR
    DELETE :ID                          -- REMOVER
    PUT [JSON] :ID                      -- ATUALIZAR
*/


Server.get("/",(req,res)=>{
  return res.json({mensage:"é nois"})
})

Server.listen(3000,()=>{
  console.log("Funfando")
})