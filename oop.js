/**
 * Object-oriented programming (OOP) is a style of programming, 
 * not a tool. 
 * Despite being old, it is popular and widely used. 
 * This style involves breaking a program into segments of objects that can communicate with each other.
 * Each object is defined by its own set of properties. 
 * These properties can then be accessed and modified through various operations.
 */

//Prototype based
/***
 * JavaScript relied on prototype-based programming. 
 * In this programming style, the object encapsulates the properties, its methods and data, instead of a class. 
 * You can add new properties to this object whenever you want
 * All JavaScript objects have the property prototype. They go under the property name __proto__
 */
 let vehicle = { wheels : 4 }; // object assigned to variable named vehicle
 let car = { seats : 5 , __proto__ : vehicle}; // object assigned to variable named car
 let driver = {name : 'self'} // empty object assigned to variable named driver

Object.setPrototypeOf(vehicle,driver)

 
 // Print all objects and __proto__ property for each variable
 console.log(`vehicle:`, vehicle, Object.getPrototypeOf(vehicle));
 console.log(`car:`, car, car.__proto__);
 console.log(`driver:`, driver, driver.__proto__);



//class based
/**
 * The class-based programming was introduced in the ES2015 version of JavaScript
 *  and allows using the class token in implementation. Furthermore, 
 * they assist in inheritance and in implementing OOPs through constructor, extend, super, and static keywords. 
 * This new syntax is clearer and easier to use.
 */


//Construtor functions
function Employee(_name,_age,_designation){
    //Property assignment as arguments.
    this.name = _name;
    this.age = _age;
    this.designation = _designation;

    //method
    this.setAge = newAge => {
        this.age = newAge;
    }
    //Property assigned by constructor function
    this.companyName = 'Myfuture';
}

Employee.gender = '';//this wil not add property to the constructor.

var employee1 = new Employee('Mark', 12, 'Manager'); // create Employee object
// Print Employee object assigned to employee1
console.log(`employee1 name: ${employee1.name} age: ${employee1.age}`)
console.log(`employee1 company: ${employee1.companyName}`)
employee1.setAge(20); // call method to set age of employee1
console.log(`employee1 name: ${employee1.name} age: ${employee1.age}`)

employee1.gender = 'Male';//property can be added to created objects
console.log(`employee1 name: ${employee1.name} age: ${employee1.age} gender: ${employee1.gender}`)

var employee2 = new Employee('susan', 14, 'IC');
console.log(`employee1 name: ${employee2.name} age: ${employee2.age} gender: ${employee2.gender}`)
//gender comes undefined as propert gender was added to object not the constructor

//Prototype property
Employee.prototype.gender = 'male';
console.log(`${employee1.name} is ${employee1.gender}`);
console.log(`${employee1.name} is ${employee2.gender}`);

//classes
class EmployeeClass{
    constructor(_name,_age,_designation){
        //Property assignment as arguments.
        this.name = _name;
        this.age = _age;
        var _yearsEx = _age+10;// throw yearsEx is not defined as var makes skome limited to inside constructor
        this.designation = _designation;
    
        //method
        this.setAge = newAge => {
            this.age = newAge;
        }
        //Property assigned by constructor function
        this.companyName = 'Myfuture';
    }

    printAge(){
        console.log(`${this.name} is ${this.age} yeard old`);
        //console.log(`${this.name} is ${_yearsEx} exp`); //this will throw error
    }

    static compareAge(object1,object2){
        return object1.age - object2.age
    }
}

var employee1 = new EmployeeClass('Garima','31','Manager');
employee1.printAge();
var employee2 = new EmployeeClass('Nitin','31','Manager');

// Call method
console.log("compareAge method:",EmployeeClass.compareAge(employee2,employee1));

//Inheritence
/**
 * Inheritance in OOPs is the ability for a class to take properties of another class. 
 * It derives a new class based on a pre-existing one where the base class inherits properties from the super class.
 */

let sampleCar = { 
    seats : 5, 
    __proto__ : vehicle // __proto__ property assigned to vehicle
}

let bmwCar = {
    price : 10000,
    owner : 'Bob',
    luxury : true,
    __proto__ : sampleCar
}

let hyndaiCar = {
    price : 1000,
    owner : 'sam',
    luxury : false,
    __proto__ : sampleCar
}

console.log(`car is ownwed by ${bmwCar.owner} and is worth ${bmwCar.price} 
${bmwCar.luxury === true ? 'it is aluxury car' : 'it is not a luxury car'} 
it has ${bmwCar.seats} seats and has ${bmwCar.wheels} wheals`);

console.log(`car is ownwed by ${hyndaiCar.owner} and is worth ${hyndaiCar.price} 
${hyndaiCar.luxury === true ? 'it is aluxury car' : 'it is not a luxury car'} 
it has ${hyndaiCar.seats} seats and has ${hyndaiCar.wheels} wheals`);

//call method

function Human(_name,_age){
    this.name = _name;
    this.age = _age;

    this.arms = 2;
    this.legs = 2;
}

function UpdatedEmployee(_name,_age,_designation){
    Human.call(this,_name,_age);

    this.designation = _designation;

    //method
    this.setNewAge = newAge => {
        this.age = newAge;
        return this.age;
    }

    this.companyName = 'Microsoft'
}

var employee1 = new UpdatedEmployee('Garima','31', 'Manager')
UpdatedEmployee.prototype.gender = 'Female';

console.log(`name is the employee is ${employee1.name}`);
console.log(`age of the employee is ${employee1.age}`);
console.log(`gender of the employee is ${employee1.gender}`);
console.log(`age is updated from ${employee1.age} to ${employee1.setNewAge(32)}`)

//Human.prototype.feet = 2; incorrect way
//correct way
UpdatedEmployee.prototype = Object.create(Human.prototype);
UpdatedEmployee.prototype.constructor = UpdatedEmployee; 
Human.prototype.feet = 2;

console.log(`employee has ${employee1.legs} legs`);
console.log(`employee has ${employee1.arms} arms`);
console.log(`employee has ${employee1.feet} feet`);

//inheritence 
class Animal{
    constructor (_legs,_food){
      // Properties assignment passed as arguments
      this.legs = _legs;
      this.food = _food;
    }

    isHerbivour(){
        return this.food === 'Meat' ? false : true ;
  }
  }
  
  class Lion extends Animal{
    constructor(_legs, _food, _offspring){
      // Properties assignment passed as arguments
      // this.name = _name;
      // this.age = _age;
      super(_legs, _food); // use super to use properties from animal class
      this.offspring = _offspring;
      // Property assigned by constructor function
      this.name = 'Lion';
    }
    isHerbivour(){ // method override.
        console.log("lion eats meat");
        // return this.food === 'Meat' ? false : true ;
  }
  }

  class Cow extends Animal{
    constructor(_legs, _food, _offspring){
        // Properties assignment passed as arguments
        // this.name = _name;
        // this.age = _age;
        super(_legs, _food); // use super to use properties from animal class
        this.offspring = _offspring;
        // Property assigned by constructor function
        this.name = 'Cow';
    }
  }

  let lionObject = new Lion(4,'Meat','Cub');
  let cowObject = new Cow(4,'Leaves','Calf');


  console.log(`${cowObject.name} has ${cowObject.legs} , offsprint is ${cowObject.offspring} and ${cowObject.isHerbivour() === true ? 'is a herbivorus' : 'is a carnivorus'}`);
  console.log(`${lionObject.name} has ${lionObject.legs} , offsprint is ${lionObject.offspring} and ${lionObject.isHerbivour() === true ? 'is a herbivorus' : 'is a carnivorus'}`);



  //Problem
  /**
   * Implement classes or constructor functions for Shape and Rectangle where the Rectangle class/constructor 
   * function will inherit from the Shape class/constructor function.
   */

  class Shape{
      constructor(name){
          var _name = name;
          this.getname = () => {return _name};
      }

  }

  class Rectangle extends Shape{
      constructor(_side1,_side2,name){
          
          super(name);
          this.side1 = _side1;
          this.side2 = _side2;

      }

      getArea(){
          return this.side1*this.side2
      }

      isSquare(){
          return this.side1 === this.side2 ? true : false;
      }
  }

  var rectangleObject = new Rectangle(12,12,'Rectangle');
  console.log(`name of the object is ${rectangleObject.getname()}`);
  console.log(`area of the object is ${rectangleObject.getArea()}`);
  console.log(rectangleObject.isSquare() === true ? 'object is a square' : 'object is not a square');