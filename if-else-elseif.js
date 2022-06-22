// Condicional if
if (true) {
    console.log('La condicion es verdadera');
}


// Uso de else
if (false) {
    console.log('La condicion es verdadera');
}
else {
    console.log('La condicion es falsa');
}


// Uso de elseif
if (false) {
    console.log('La condicion es verdadera');
}
else if (true) {
    console.log('La condicion es verdadera');
}
else {
    console.log('La condicion es falsa');
}


// Ejemplo
var edad = 18;

if(edad === 18) {
    console.log('Puedes votar, sera tu 1ra votacion');
} else if(edad > 18) {
    console.log('Puedes votar de nuevo');
} else {
    console.log('Aun no puedes votar');
}


// Ejemplo 2
conditio ? true : false;

var numero = 1;
var resultado = numero === 1 ? 'Si soy un uno' : 'No soy un uno';