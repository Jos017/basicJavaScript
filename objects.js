//Creating an object
var myCar = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    carDetail: function() {
        console.log(`Car ${this.modelo} ${this.year}`);
    }
}

//Calling specific properties
myCar.brand;
myCar.year;
myCar.carDetail();