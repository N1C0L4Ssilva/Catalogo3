const {initializeApp}=require('firebase/app')
const {getFirestore, collection, getDocs}=require('firebase/firestore')

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

exports.ObterColecao=(Colecao)=>{
    const Docs=getDocs(collection(db,Colecao))
    Docs.then((Value)=>{return Value})
}
exports.AdicionarNaCoelcao=(Colecao)=>{
    // const Docs=getDocs(collection(db,Colecao))
    // Docs.then((Value)=>{return Value})
}