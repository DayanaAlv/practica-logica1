const prompt = require('prompt-sync')();

let numero1 = (prompt('ingresa un numero'))
let numero2 = (prompt('ingresa un numero'))
let numero3 = (prompt('ingresa un numero'))

let mayor, intermedio, menor;

if (numero1 === numero2 && numero2 === numero3) {
    console.log('todos los numero son iguales')
}

else {
    if (numero1 > numero2 && numero1 > numero3) {
        mayor = numero1;
        if (numero2 > numero3) {
            intermedio = numero2;
            menor = numero3;
        }
        else {
            intermedio = numero3;
            menor = numero2;

        }
    }
    else if ( numero2 > numero1 && numero2 > numero3) {
        mayor = numero2;
         if (numero1 > numero3) {
            intermedio = numero1;
            menor = numero3;
        }
        else {
            intermedio= numero3;
            menor= numero1;
        }
    } 
    else {
     mayor= numero3;
        if(numero1 > numero2) {
                intermedio= numero1;
                menor = numero2;
            } else {
                intermedio = numero2;
                menor = numero1;

            }
        }
    
    }





console.log(`tus numero de mayor a menor son: ${mayor}, ${intermedio}, ${menor}!`);
console.log(`tus numero de menor a mayor son: ${menor}, ${intermedio}, ${mayor}!`);