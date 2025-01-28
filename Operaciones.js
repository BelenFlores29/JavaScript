
let suma, resta, multiplicacion, division;
        
function realizarCalculos() {
        var numero1 = document.getElementById('numero1').value;
        var numero2 = document.getElementById('numero2').value;
            numero1= Number(numero1);
            numero2=Number(numero2);
            
            suma = numero1 + numero2;
            resta = numero1 - numero2;
            multiplicacion = numero1 * numero2;
            division =  numero1 / numero2;                
}
    
function mostrarResultado() {
        realizarCalculos();  
        console.log("Suma:", suma);
        console.log("Resta:", resta);
        console.log("Multiplicación:", multiplicacion);
        console.log("División:", division);
}