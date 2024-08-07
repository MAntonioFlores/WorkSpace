const esPrimo = (numero) => {
    let contador = 0;

    let numeros = [];

    for(let i = 0; i < numero; i++){
        numeros.push(i + 1);
    }
    for(let n of numeros){
        if (n === 1 || n === numero) {
            continue;
        }
        if (numero % n === 0) {
            contador ++;
        }
    }
    // console.log(numeros);
    return contador === 0
}

// esPrimo(5);

let numero = Number(prompt('Ingrese un  numero'));

if(esPrimo(numero)){
    document.write('Es Primo')
}else{
    document.write('No Es Primo')
}