const palindromo = (palabra) => {

    palabra = palabra.replace(/\s+/g, '');///\s+/g es una expresion regular la cual quita todos los espacios en blanco y la es que buscara globalmentge y no se quedara con el primero que encuentre.
    console.log(palabra);
    palabra = palabra.toLowerCase();
    

    let palabraReversa = palabra.split('').reverse().join('');


    if (palabra === palabraReversa) {
        return true;
    }else{
        return false;
    }
}

// console.log(palindromo('Anita Lava La Tina'));
let palabra = prompt('Ingrese una palabra');

let esPalindromo = palindromo(palabra);

if (esPalindromo) {
    document.write('Es Palindromo');

}else{
    document.write('No es Palindromo');
}