let numero;
let total = 0;
let promedio = 0;

let ingreso = prompt("¿Necesita correr el programa para averiguar su promedio? 1: SI 2: NO");

while(ingreso == 1){
    for(let i = 0; i < 2; i++){
        if(i == 0){
            numero = parseInt(prompt("Ingrese nota del primer parcial: "));
        }
        if(i == 1){
            numero = parseInt(prompt("Ingrese nota del segundo parcial: "));
        }
        total = total + numero;
    }
    
    promedio = parseFloat(total / 2)
    
    alert("El promedio es: " + promedio);
    //console.log("El promedio es: " , promedio);
    total = 0;
    ingreso = prompt("¿Necesita correr nuevamente el programa para averiguar su promedio? 1: SI 2: NO");
}