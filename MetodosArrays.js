const frutas=['sandia',
    'manzana',
    'pera',
    'melon',
    'uva',
    'banana',
    'sandia'
]

const verduras=['lechuga',
    'pepino',
    'tomate'
]

const empresa=[
    {
        id:0,
        nombre: "Javier",
        apellidos: "Perez Gomez",
        edad: 34
    }, 

    {
        
        id:1,
        nombre: "Andres",
        apellidos: "Segovia Lopez",
        edad: 34
    }, 
    
    
    { 
        id:2,
       nombre: "Belen",
       apellidos: "Suarez Flores",
       edad: 22
    }

]
/*
//CONCAT: Une dos arrasy o añade elemetos al array
console.log(frutas.concat('limon'));

//EVERY: Nos obliga a que todos los elementos del array cumplan una determinada condicion
frutas.every(fruta=>{
    console.log(fruta=='sandia')
})

//SOME: Devuelve elemento por elemento si son true o false
frutas.some(fruta => {
    console.log(fruta==='sandia')
})

//FILTER: Filtra el array y nos devuelve otro array con las condiciones que le indiquemos
frutas.filter(fruta => {
    if(fruta.lenght>5){
        console.log(`${fruta} tiene más de 5 caracteres`)
    }
    else{
        console.log(`${fruta} tiene menos de 5 caracteres`)
    }

})

//FIND: Busca las coincidencias que le digamos
frutas.find(fruta =>{
    if (fruta==='sandia') {
        console.log(fruta)
    }
})

//FOREACH: Por cada elemento nos recorre array
frutas.forEach(fruta =>{
    if (fruta.length>=6){
        console.log(fruta)
    }
})

//INCLUDES: Nos da true o false en funcion si existe ese elemento del array
console.log(frutas.includes('banana'));

//INDEXOF: Nos devuelve un numero negativo si no encuentra el elementos en el array y si lo encuentra nos dice la posicion que ocupa
console.log(frutas.indexOf('uva'))

//JOIN: Nos separa los elementos del array según le indiquemos
console.log(frutas.join('-'))

//LASTINDEXOF: DEvuelve la ultima posicion en donde se encuentra el elemento
console.log(frutas.lastIndexOf('sandia'))

//LENGHT (propiedad)

let casa= "chalet"
console.log(frutas.length)
console.log(casa.length)*/

//MAP:Nos itera arrays y arrays de objetos y nos devuelve un array
empresa.map(em=>{
    document.body.innerHTML+=`

   <ul>
    <li>
        Id:${em.id}<br>
        Nombre:${em.nombre}<br>
        Apellido:${em.apellidos}<br>
        Edad:${em.edad}
    </li>
   <ul>
  `
})


/*//POP: Elimina el ultimo elemento de un array y nos lo devuelve
console.log(frutas.pop())
console.log(frutas)

//PUSH: Agrega al final del array el nuevo elemento que le indiquemos y nos devuelve la longitud del array con el nuevo elemento
console.log(frutas.push('fresa'))
console.log(frutas)

//REDUCE: Reduce el array a un solo elemento
frutas.reduce(fruta=>{
    console.log(fruta)
})

//REVERSE: Nos devuelve el array invertido
console.log(frutas.reverse())

//SLICE: Nos devuelve los indices comprendidos entre el primer indice que le indiquemos  y el segundo no incluido
console.log(frutas.slice(1,4))

//SORT: Nos ordena el array alfabeticamente
console.log(frutas.sort())

//UNSHIFT: Nos elimina el primer elemento del array
console.log(frutas.unshift('uva'))*/

//SHIFT: Nos elimina el primer elementos del array
console.log(frutas.shift())
console.log(frutas)