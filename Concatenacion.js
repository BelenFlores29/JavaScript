//Concatenacion tradicional

let frase="Me gusta mucho pasear "
let frase2=", por la playa"

let fraseTotal=frase + frase2
console.log(frase + frase2)
console.log(fraseTotal)
document.write(fraseTotal) //Imprime en el html (index)

let sitio='al cine'
let frase3=`Me gusta ir mucho ${sitio}`
document.write(frase3)

let sitio4='al campo'
let frase5='Me gusta ir mucho ' + sitio4+ ' por la noche'

console.log(frase3)
console.log(frase5)

let sitio6="me gusta";
let sitio7= `el sushi`;
let sitio8= `${sitio6} ${sitio7}`;
console.log(sitio8);

let sitio9= `${sitio7} ${sitio6} ${frase2}`
console.log(sitio9);