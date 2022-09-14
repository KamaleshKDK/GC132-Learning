// OverLoading.........

class A {
    one (){
        console.log("One");
    }
    one (){
        console.log("Two");
    }
}
let test = new A();
test.one();


// OverRiding..........


class AA {
    firstOne (){
        console.log("First One is Printed");
    }
}

class BB extends AA {
    firstOne(){
        super.firstOne();// if we want to print the Parent method also ,we use this
        console.log("Second One is Printed");
    }
}

let test2 = new BB();

test2.firstOne();