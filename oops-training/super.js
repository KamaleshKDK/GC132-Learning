// working of super - keyword


class Animal {
    constructor(animalType) {
        this.animalType = animalType;

    }

    typeOfanimal() {
        console.log("The type of animal is " + this.animalType);
    }
}

class Falcon extends Animal {
    constructor(animalType, color) {
        super(animalType);
        this.color = color;
    }
    birdColor() {
        console.log("The color of Falcon is " + this.color);
    }

}

let bird = new Falcon("Bird", "black");

bird.birdColor();
bird.typeOfanimal();