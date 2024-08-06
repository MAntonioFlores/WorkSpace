let n = -8, print = '';

if (n !== 0) {
    if (n > 0) {
        if (n % 2 === 0) {
            print = `El numero ${n} es PAR POSITIVO`
        } else {
            print = `Es IMPAR POSITIVO`
        }
    }else{
        if (n % 2 === 0) {
            print = `El numero ${n} es PAR NEGATIVO`
        } else {
            print = `Es IMPAR NEGATIVO`
        }
    }
} else {
    print = `El numero ${n} es NEUTRO`
}

console.log(print)