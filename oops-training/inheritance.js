class Animal {
    legs = 4;

    eat() {
        console.log("animal can eat food");
    }
    sleep() {
        console.log("Animal can sleep");
    }
}

class Dog extends Animal {

    bark = true;

    play() {
        console.log("Dog can Play");
    }
}

class Cat extends Dog {
    friend() {
        console.log("Cat and Dogs and Friend and also Enemy");
    }
}

let a1 = new Dog();
console.log(a1.legs);
a1.play()

let a2 = new Cat();
a2.friend();
console.log(a2.legs);

// --------------------- OR ---------------------


class Game {
    setGameDetail(name) {
        this.name = name;
    }
    release() {
        return console.log("In 90s " + this.name + " is released");
    }
    ended() {
        return console.log("In 2000 " + this.name + " is Stopped");
    }
}

class GTA extends Game {
    gameGenre(genre) {
        console.log(this.name + " is " + genre + " genre");
    }
}
let myGame = new GTA();

myGame.setGameDetail("GTA");
myGame.release();
myGame.ended();
myGame.gameGenre("Story Line")

