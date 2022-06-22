// Ejemplos en los que Boolean devuelve Falso:
Boolean(0);     //false
Boolean(null);  //false
Boolean(NaN);   //false
Boolean(undefined); //false
Boolean(false); //false
Boolean('');    //false

// Ejemplos en los que Boolean devuelve Verdadero:
Boolean(1);     //true para cualquier numero distinto de cero
Boolean('a');   //true para cualquier caracter
Boolean([]);    //true para cualquier array aun si esta vacio
Boolean({});    //true para cualquier objeto aun si esta vacio
Boolean(function(){})   //true para cualquier funcion