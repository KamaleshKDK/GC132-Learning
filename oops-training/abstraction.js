function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    let yearlyBonus = 500;
    this.getEmployeeDetail = function () {
        console.log(this.name + " has " + this.age + "  age and he earn " + this.salary);
    }
    this.annualSalary = function () {
        console.log(this.salary + yearlyBonus + " is annual yearly")
    }
}

let empOne = new Employee("Jhon", 22, 10000);
empOne.getEmployeeDetail() ;
empOne.yearlyBonus = 1000;
empOne.annualSalary();