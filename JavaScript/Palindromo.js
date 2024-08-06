const palindromo = (palabra) => {
    palabra = palabra.replace(' ', '');
    palabra = palabra.toLowerCase();

    let palabraReversa = palabra.split('').reverse().join('');

    if (palabra === palabraReversa) {
        return true;
    }else{
        return false;
    }
}

console.log(palindromo('Anita Lava La Tina'));