function car(brand, model, year) {
    this.Brand = brand;
    this.model = model;
    this.year = year;
}

var nextCar = new car('Tesla', 'Model 3', 2020);
var nextCar2 = new car('Tesla', 'Model X', 2018);
var nextCar3 = new car ('Toyota', 'Corolla', 2020);