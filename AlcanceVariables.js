//AMBITO SUPERGLOBAL: Tenemos acceso desde cualquier archivo
//AMBITO GLOBAL: Es el contexto que engloba un mismo 
//AMBITO LOCAL: Es el contexto que engloba una funcion
//AMBITO DE BLOQUE: Está englobado dentro de un bucle o un condicional if 
//                  Var se sale del ambito de bloque (no recomendado)
//                  Let no se sale del bloque


//VAR
var perro="lucas"

//LET
//let pez = "pes"
let gato = "felino";

//VAR (su ambito es local)
function saltar(){
    let gato="felino"
    console.log(gato)

    var raton="roedor"
    perro = gato + " " + raton;
}

saltar();
console.log(perro)
console.log(gato)

function gritar(){
    let dinosaurio = "era antiguo"
    console.log(dinosaurio);
}

gritar();
//console.log(dinosaurio) marca indefinido porque la varibale dinosaurio solo se puede usar dentro de la funcion

let nombre="Maria"
if (nombre=="Maria"){
    var apellido="Gonzalez"
    let mascota="gato"   //Let no sale del bloque, por eso maraca undefined
    //var mascota="gato" //Var si se sale del ambito, marca gato en la consola
    //console.log(pez)
}
else{
    apellido = null
}

console.log(apellido)
console.log(mascota)