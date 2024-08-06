// function saludar(){
//     console.log('hola, desde la función saludar');
// }

// saludar();


//Con Parametros
// function saludar(nombre){
//     console.log(`hola, ${nombre} desde la función saludar`);
// }

// saludar('Mark');

//Con retorno
// function saludar(nombre){
//     return `hola, ${nombre} desde la función saludar`
// }

// const s = saludar('Mark');

// console.log(s)


function sumar(a = null, b = null){
    if(a === null || b === null){
        console.log('Error: debes enviar ambos numeros a la función');
        return '';
    }
    return a + b;
}

const r = sumar (4, 5);
console.log(r);