class Animal {
    constructor (name){
        this.name = name;

    }
    eat(){
        console.log(this.name + " eats Flesh")
    }
}
class Tiger extends Animal {
    eat(){
        console.log(this.name + " eats Human Flesh");
    }
}

let animalOne = new Tiger("Tiger");

animalOne.eat()
