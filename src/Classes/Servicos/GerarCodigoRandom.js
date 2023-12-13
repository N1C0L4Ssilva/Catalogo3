const Coisas=[
    "1","2","3","4","5","6","7","8","9",
    
    "q","w","e","r","t","y","u","i","o",
    "p","a","s","d","f","g","h","j","k",
    "l","ç","z","x","c","v","b","n","m",

    "Q","W","E","R","T","Y","U","I","O",
    "P","A","S","D","F","G","H","J","K",
    "L","Ç","Z","X","C","V","B","N","M",
]
exports.GERAR=()=>{
    let Code=""
    for(i=0;i<=30;i++){
        Code+=Coisas[Math.floor(Math.random()*Coisas.length)]
    }
    console.log(Code)
    return Code
}