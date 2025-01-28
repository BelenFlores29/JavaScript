//OPERADORES

// < manor que
// > mayor que
// >= mayor o igual que
// <= menor o igual que
// == igual que (igual valor)
// === estrictamente igual que (igual el valor)
// != diferente que (distinto valor)
// !== estrictamente diferente que (distinto valor)

let edadMaria=37;
let edadJose='37';
let edadAntonio=14;
let edadCarmen=15;
let edadCasimiro=37

if (edadMaria==edadCasimiro){
    console.log('tenemos la misma edad')
}
else{
 console.log('no tenemos la misma edad')
}

console.log(3+5)
console.log(56-34)
console.log(3*56)
console.log(5/2)
console.log(10%2)

if (2000%2){
    console.log("No es par")
}
else{
    console.log("Es par")
}

//OPERADORES LOGICOS
// ! operador de negacion
// && operador and o y
// || operador or o ó

console.log(5>3) //Comparacion
let nombre="Maria";
let nombreMascota="Pipe";
if (nombreMascota){
    console.log(`La mascota tienen nombre y su nombre es ${nombreMascota}`)
}
else{
    console.log(`La mascota no tiene nombre`) // ` Ctrl+Alt Gr+ a lado del enter, la tecla que tiene el }
}

let nombreMujer= "Arlet"
let edadMujer='28'
let estadoMujer= 'soltera'
let isMujer=true

if (nombreMujer==="Arlet" || edadMujer ==='28'){
    console.log('Se cumple la condicion')
}
else {
    console.log('No se cumple la condicion')
}