let EmpDetails = function (name, age) {
    this.name = name;
    this.age = age;
}

EmpDetails.prototype.getName = function () {
    return this.name;
}

EmpDetails.prototype.getAge = function () {
    return this.age;
}

EmpDetails.prototype.gender ="Male"

let emp1 = new EmpDetails("ram", 25);


console.log(emp1.getName())
console.log(emp1.getAge())
console.log(emp1.gender);