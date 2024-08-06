// let n = 7;
let v = 'A';

// let r = (n > 0 ) ? 'Es Positivo' : 'Es Negativo';

let r =  (v === 'a' || v === 'A') ? `${v} es VOCAL`
        :(v === 'e' || v === 'E') ? `${v} es VOCAL`
        :(v === 'i' || v === 'I') ? `${v} es VOCAL`
        :(v === 'o' || v === 'O') ? `${v} es VOCAL`
        :(v === 'u' || v === 'U') ? `${v} es VOCAL`
        : `${v} NO es VOCAL`


console.log(r);