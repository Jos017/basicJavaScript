function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let autos = [];
let iterations = prompt('¿Cuantos autos desea registrar?');

for (let i = 0; i < iterations; i++) {
    let brand = prompt('Introdusca la marca del auto');
    let model = prompt('Introdusca el modelo del auto');
    let year = prompt('Introdusca el año del auto');
    autos.push(new Car(brand, model, year));
}

console.log(autos);