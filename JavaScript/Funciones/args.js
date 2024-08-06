//... sirven para n numeros

function sumar(...args){
    let suma = 0
    for (let n of args){
        suma += n;
    }
    return suma;
}

const s = sumar(10,10,10,10);

console.log(`La Suma es : ${s}`)