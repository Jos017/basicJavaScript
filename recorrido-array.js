var articulos = [
    { nombre: 'Bicicleta', costo: 3000 },
    { nombre: 'Television', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'Laptop', costo: 2500 },
    { nombre: 'Teclado', costo: 500 },
    { nombre: 'Audifonos', costo: 1700}
];

// Using method filter()
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500;
})

// Using method map()
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

// Using method find()
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === 'Laptop';
})


// Using method forEach()
var cadaArticulo = articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

// Using method some()
var articulosbaratos = articulos.some(function(articulos){
    return articulo.costo <= 700;
})