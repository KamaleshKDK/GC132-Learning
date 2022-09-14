class Bike {
    company;
    color;
    mileage;
    topSpeed;
    abs;
    model
    static wheels = 2; //we can write static when anything common in all ojects

    constructor(company, color, mileage, topSpeed, abs, model) {
        this.color = color;
        this.company = company;
        this.mileage = mileage;
        this.topSpeed = topSpeed;
        this.abs = abs;
        this.model = model;
    }
    startBike() {
        console.log(this.company + " " + this.model + " is Started now");
        console.log("------------------------------------")
    }

    mileageTest() {
        console.log(this.company + this.model + " mileage gives " + this.mileage + "km");
        console.log("------------------------------------")
    }

    topspeed() {
        console.log(this.company + this.model + " the top speed is " + this.topSpeed);
        console.log("------------------------------------")
    }
    printWheels() {
        console.log("Total Wheels in the bike is " + Bike.wheels);
    }

    bikeDetails() {
        console.log("The model of the bike is " + this.model);
        console.log("The company name of the bike is " + this.company);
        console.log("The color of the bike is " + this.color);
        console.log("The ABS of the bike is " + this.abs);
        console.log("The mileage of the bike is " + this.mileage + "km");
        console.log("The topSpeed of the bike is " + this.topSpeed);
        console.log("The total Wheels in the bike is " + Bike.wheels);
    }
}

let yamaha = new Bike("Yamaha", "Black", 55, 120, "Dual channel abs", "XSR-155",);

yamaha.startBike();
yamaha.mileageTest();
yamaha.topspeed();
yamaha.bikeDetails();

console.log(Bike.wheels)