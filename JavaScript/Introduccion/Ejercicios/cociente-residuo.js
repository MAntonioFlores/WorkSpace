let a, b, cociente, residuo;

a = Number(prompt('Ingrese un numero'));
b = Number(prompt('Ingrese un segundo numero'));

cociente = a / b;
residuo = a % b;

document.write('El cociente es:' + cociente + '<br>');
document.write('El Residuo es: ', residuo);