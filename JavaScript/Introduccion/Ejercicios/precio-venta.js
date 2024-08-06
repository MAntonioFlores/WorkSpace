let vv = 0, igv = 0, pv = 0;

//Entrada de datos
vv = parseFloat(prompt('Ingrese Valor de Venta!!!'));

//Proceso
igv = vv * 0.19;
pv = vv + igv;

//Salida
// document.write('Valor de venta: ', vv, '<br>');
// document.write('IGV: ', igv, '<br>');
// document.write('Precio de venta: ', pv);

document.write(`<pre>
                Valor de venta  : ${vv}
                IGV             : ${igv}
                Precio de venta : ${pv} 
                </pre>`);

console.log(`Valor de venta\t:${vv}\nIGV\t\t\t\t:${igv}\nPrecio de venta\t:${pv}`);