var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`)
}

// Loop: For
for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

// Loop: For of
for(var x of estudiantes) {
    saludarEstudiantes(x);
}