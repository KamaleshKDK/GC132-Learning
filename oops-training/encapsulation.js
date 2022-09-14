
class Car {
    seCarDetail(name, speed) {
        this.name = name;
        this.speed = speed;
    
    }
    getCarName(){
        return this.name
    }
    getCarSpeed(){
        return this.speed
    }
}

let car2 = new Car()
car2.seCarDetail("Ford", 150)
console.log(car2.getCarName())
console.log(car2.getCarSpeed())




// ----------------------OR---------------------




class Car {
    constructor (){
        let name;
        let price;
    }    

    setName (name){
        this.name = name;
    }    
    setPrice (price){
        this.price = price;
    }    
    getName(){
        return this.name;
    }    
    getPrice(){
        return this.price;
    }    

}    

let car1 = new Car();

car1.setName("BMW");
car1.setPrice(1000000);

console.log(car1.getName())
console.log(car1.getPrice())
