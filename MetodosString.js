let frase="Mi perro es un pastor Aleman y es bueno <br>"
let frase2=", y es muy inteligente"
/*
//ANCHOR: Nos de vuelve el texto envuelto en un enlace a

console.log(frase.anchor())
document.write(frase.anchor())

//BIG: Nos devuelve el texto en un formato más grande
document.write(frase.big())
document.write(frase)

//BOLD: Nos devuelve texto en negrita
document.write(frase.bold())

//CHARAT: Nos da el caracter que coincida con el numero que le pasemos por argumento
document.write(frase.charAt(3))

//CHARCODEAT: Nos devuelve el Unicode que coincida con el numero que le pasemos por el argumento
document.write(frase.charCodeAt(3))

//CONCAT: Nos concatena o une, un string al que ya tenemos y también nos permmite pasar una variable
document.write(frase.concat(', y es muy fuerte' + frase2))

//ENDSWIDTH: Nos dice si el string acaba en el conjunto de caracteres o caracter que le indiquemos
document.write(frase.endsWith('bueno'))

//FONTCOLOR: Nos cambia el color de texto del string
document.write(frase.fontcolor('#ffff00' + '</br>'))

//FONTSIZE: Nos cambia el tamaño del texto pasandole por el argumento
document.write(frase.fontsize(5))

//INCLUDES: Nos da true o false en funcion si el caracter o conjunto de caracteres que le indiquemos esta incluido el texto
document.write(frase.includes('perro'))

//INDEXOF: Si existe el indice que le especifiquemos en el argumento nos da su posicion y si no pues no da un -1
document.write(frase.indexOf('perro'))

//ITALICS: Nos convierte el texto en cursiva o itálica
document.write(frase.italics())

//LASTINDEXOF: Nos va a dar la ultima posicion del caracter o conjunto de caracteres que le pasemos  por el argumento y si no existe nos dara -1
document.write(frase.lastIndexOf('es'))

//LENGHT: Nos va a dar la logitud del string incluidos los espacios

const colores=[
    'green',
    'yellow',
    'black',
    'purple',
    'brown',
    'red',
    'blue',
    'gray',
    'cyan',
    'magenta',
    'pink'
    
];

colores.forEach(color=>{
    document.write(`<p style="color: ${color};">${color}</p>`)
})

for(let i=0; i<=colores.lenght; i++ ){
    document.write(`<p style="color: ${colores^[i]};">${colores[i]}</p>`);
}*/


//LINK: Nos devuelve un enlace y le da atributo por defecto href
document.write(frase.link('https://google.com'))


//MATCH: Nos devuelve la coincidencia si existiera o de lo contrario nos devuelve null
document.write(frase.match('gato'))

//REPEAT: Nos devuelve el string repetido las veces que le indiquemos
document.write(frase.repeat(2))

//REPLACE: Nos permite reemplazar una parte del string por otro pasandole por el primer argumento lo que queremos cambiar y por el segundo la parte nueva
document.write(frase.replace('pastor Aleman', 'Boxer'))

//SLICE: Nos devuelve una porción de cadena, que nosotros indiquemos entre dos numeros
document.write(frase.slice(2,8))

//SMALL: Nos divide el string en substring que podemos en cuantas porciones dividimos el string principal
document.write(frase.small())
document.write(frase)

//SPLIT: Nos divide el string en substring que podemos en cuantas porciones dividimos el string principal
document.write(frase.split(' ', 10))

//STARWIDTH: Nos da true y false en funcion si el primer caracter empieza por la letra que pasemos por el argumento que hace distincion entre mayusculas y minusculas
document.write(frase.startsWith('M'))

//SUB: Nos da el string como si fuera un subtitulo
document.write(frase.sub())

//SUBSTRING: Nos devuelve una porcion de cadena 