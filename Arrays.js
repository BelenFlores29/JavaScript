const datos=['persona', 34, true, 'Arlet']

console.log(datos[0])
console.log(datos.length);

for (let i=0; i<datos.length; i++){
    console.log(datos[i])
    if (datos[i] == 'Arlet'){
        console.log("Arlet tiene 22 años");
        for (let j=0; j<datos.length; j++){
            console.log(datos[j])
        }
    }
}

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
       edad: 34
    }

]

for(let i=0; i<empresa.length; i++){

    console.log("Id= " + empresa[i].id + " Nombre= " + empresa[i].nombre + " Apellido= " + empresa[i].apellidos + " Edad= " + empresa[i].edad)
}
console.log(empresa)