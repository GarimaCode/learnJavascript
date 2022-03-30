import {newFunction} from "./util.js";

//Javascript is compiled or execute by java script engines
//JIT compilers are faster than lanaguage which are intepreted executes in native machine code. 
//JIT complier translates source code at run to machine lanuage before executing
// Javasctipt run through havascript engines, 
            /**V8 — used by Google Chrome
            Rhino — used by Java applications
            SpiderMonkey — used by Mozilla Firefox
            JavaScriptCore — used by Swift, Objective-C, and C-based apps and also Safari
            Chakra (JavaScript) — used by Microsoft Edge
            Nashorn — used by JVM
            JerryScript — used by the Internet of Things**/

//Hello World
console.log("Hello World!!");
//Object console and call its method log to write onto console the argument
//console object is part of the DOM objects family. 


//Values in Javascript
            /**Example	Type
            "Hello"	String
            [1, 2, 3]	Array
            function run(a, b)	Object
            true	Boolean
            {"a": 1, "b": 2, "c": 3}	Object
            100000	Number ***/


//Variable declaration and assignment 
let variable1; // variable declaration
variable1 = 5000 //variabnle assigment
let variable2 = 20; // variable declaration and assignment
console.log("variable1: "+variable1);
console.log("variable2: "+variable2);// varriable printing
let variable3 = 234;// declaring and assigning without let,var or const
console.log(variable3);
/**variable4;
console.log(variable4);//Uncaught ReferenceError: variable4 is not defined**/
let variable5;
console.log(variable5);//undefined


//variable mutation
        // is reassigning to another value. done with operatior =
 
let variable_1 = 1234;
console.log("variable_1: "+variable_1);
/**variable_1;
console.log("variable_1: "+variabel_1);// undefined**/
variable_1 = 234; // assigning 234 to varibale_1
console.log("variable_1: "+variable_1);

let variable_a = 12;
let variable_b = variable_a; //assign to value of variable_a

console.log("variable_a: "+variable_a);
console.log("variable_b: "+variable_b);

variable_a = 23;
console.log("variable_a: "+variable_a); //23
console.log("variable_b: "+variable_b); //12

/* Problem statement
You are given three variables named var1, var2 and var3. Write code such that the following is satisfied:

var1 contains the value of var2
var2 contains the value of var3
var3 contains the value of var1
 */

//Solution

let var1 = 1;
let var2 = 2;
let var3 = 3;
let tempVariable;
console.log("given Vriables values : "+var1, var2, var3);

tempVariable = var1;
var1 = var2;
var2 = var3;
var3 = tempVariable;

console.log("after juggling Vriables values : "+var1, var2, var3);


//Operators
    /* 
    Arithmetic operators - +,-.%,*,/,**,++,--
    Comparison operators == >= != < <=  ===
    Logical operators && || !
    Assignment operators = += -= *= /= %=
    Conditional operators let a = <condition> ? <value if true> : <value if flase>
    */

let variable_assigment = 10;
console.log("variable :  "+variable_assigment);
variable_assigment *= 10
console.log("variable*=10 :  "+variable_assigment);

let value = variable_assigment == 100 ? "assignment oprator is correct" : "assignment operator is incorrect"
console.log(value);

//Opearatorprecedence
//In javascript every line is parsed first and then iterpreted

let order_variable = 1 + 2 * 3;
console.log("order_variable : " +order_variable);


//Problem statement 
    /* 
    For 2 variables, x and y, find twice the value of the sum of the two variables.
    The variables x and y are defined for us. Store the value in the ans variable.'
    */

    let variable_x = 2;
    let variable_y = 3;
    let variable_ans = 2*(variable_x + variable_y)
    console.log("value : "+variable_ans);

    /*“
    For a certain value, find its remainder when divided by 10 and add it to its original value.”
    This time, you are only given ans. Use ans wisely.
    */

    let variable_certain = 4;
    variable_certain += variable_certain % 10;
    console.log("answer" + variable_certain);

    /*
    “For the values x and n, find the resulting value when x is multiplied to its original value n times.”
     */

    let variable_x1 = 10;
    let variable_n = 20;
    
    variable_ans = variable_x1 ** variable_n;
    console.log("answer is : "+variable_ans);

    /**
     * For a certain value a, divide it by the product of x, y, and z. x is the sum of a and 10. 
     * y is the difference between a and 10. Lastly, z is the remainder when a is divided by 10.
     */

    let var_a = 21;
    variable_ans = var_a / ((var_a + 10) * (var_a - 10) * (var_a % 10));
    console.log("answer is:",variable_ans); 
    /*The , separator adds space between the two values that are to printed in console.log function. So this is the correct answer.*/

    //TYPES
    /**
     * Primitive values --> immutaable , cannot be modified but new primitives can be created
     *      Boolean
            Number
            Null
            Undefined
            String
            Symbol

     * Objects and functions --> can be maniuplated directly in code.
     */


//booleans
let bool_true = true;
let bool_false = new Boolean(false);
console.log("the values are:",bool_false,bool_true);
console.log("the types are", typeof(bool_false),typeof(bool_true));

let number1 = 12;
let number2 = new Number(2);
console.log("the values are:",number1,number2);
console.log("the types are", typeof(number1),typeof(number2));

let string1 = 'garima';
let string2 = new String('jain');
let string3 = `my name is ${string1} ${string2}`;
let string4 =  'my name is '+ string1 +' '+string2;
console.log("the values are:",string1,string2);
console.log("the types are", typeof(string1),typeof(string2));
console.log(string3);
console.log(string4);


let nullValue = null;
console.log("they type are",typeof(nullValue));

let symbol1 = Symbol('first'); // allow us to include unique indetifiers in code // used for unique value.
let symbol2 = Symbol('first');
console.log("the values are:",symbol1.description,symbol2.description);
console.log("the types are", typeof(symbol1),typeof(symbol2));
// print equality
console.log('Are they equal?',symbol1==symbol2 , symbol1===symbol2);


//Objects
//Objects are created using the {} operator

let objectObj ={name: "garima", 'age': 30};// declare object

// print value
console.log('our obj is', objectObj);
console.log('type of our object is ',typeof(objectObj));

objectObj.number = 13; // defining property and assigning values using . operator
objectObj['credited'] = true; // defining property and assigning values using [] operator

// print value
console.log('our obj is', objectObj);
console.log('type of our object is ',typeof(objectObj));


// Date
let objectDate = new Date();
console.log('Date object is',objectDate);
console.log(objectDate.getDate());

//Array
let objectArray = new Array(1,2,'Hello');
let objectArray1 = ['hello','how',5];
console.log("array1:",objectArray);
console.log("array2",objectArray1);
console.log(`type of array 1 ${typeof(objectArray)} and array 2 ${typeof(objectArray1)}`);
console.log('sorted array',objectArray.sort());
console.log('length of array',objectArray1.length);

//Conversion -we need to change value types in programs
//Implicit conversion
//implicit type conversion, also known as type coercion
console.log(1+'1', typeof(1+'1'));

//explicit conversion
let testNumber = 1;
let testString_num = new String(testNumber).valueOf();
console.log(`value is ${testNumber} and ${testString_num}`);
console.log(`type is ${typeof(testNumber)} and ${typeof(testString_num)}`);

let testBoolean_num = new Boolean(testNumber).valueOf();
console.log(`value is ${testNumber} and ${testBoolean_num}`);
console.log(`type is ${typeof(testNumber)} and ${typeof(testBoolean_num)}`);
//Using Boolean('false') will give you true. For strings, only Boolean('') will give you false.

let testNumber_string = new Number(testString_num).valueOf();
console.log(`value is ${testString_num} and ${testNumber_string}`);
console.log(`type is ${typeof(testString_num)} and ${typeof(testNumber_string)}`);

//Static vs dynamic type checking.
//static type checking occurs before the code is run. C++, Go, and other languages use this technique for checking types.

/*
Dynamic type checking is the process where type is checked and assigned during run time. 
This happens on the fly. Languages that use this technique are interpreted or use a JIT compiler. 
JavaScript uses this technique.
*/


/**
 * Weakly-typed languages make conversions between unrelated types implicitly, 
 * while a strongly-typed language usually does not allow implicit conversions between unrelated types. 
 * The type coercion is determined by whether the language is strongly-typed or weakly-typed. 
 * For instance, Python would throw a type mismatch error, despite using dynamic type checking
 * */ 

//Problem
/*A librarian wants you to take a set of primitive values and store references to all in one object for convenience. 
Due to inexperience with JavaScript, the librarian entered all data with string type. You also have to change the types accordingly. 
Use your knowledge of type conversion to solve the problem
 
 id = id; // id String
 available = available; // available String saying 'true' / 'false'
 count = count; // count String
 nameValue=nameValue; // name String 
 author=author; // author String
 ans={
     'id': '',
     'available': '',
     'count': '',
     'name': '',
     'author': '',
 }; // assign final answer to ans variable
*/

//solution
let id = '123';
let available = 'true';
let count = '1';
let nameValue = 'garima';
let author = 'jain';

let ans = {
    'id': id, 
    'available': available,
    'count': count,
    'nameValue': nameValue,
    'author': author
};

console.log(ans);

let id_updated = new Number(id).valueOf();
let available_updated = available === 'true';
let count_updated = new Number(count).valueOf();

ans = {
    'id': id_updated, 
    'available': available_updated,
    'count': count_updated,
    'nameValue': nameValue,
    'author': author
};

console.log(ans);

//Conditions
let variableValue = 0;
if (variableValue === 0){
    variableValue = 1;
}
if (variableValue === -1){
    variableValue = 0;
}
if (variableValue === 1){
    variableValue = 0;
}
console.log("variable value is :",variableValue);

if (variableValue === 0){
    variableValue = 1;
}
else if (variableValue === -1){
    variableValue = 0;
}
else if (variableValue === 1){
    variableValue = 0;
}
else{
    console.log("the variable value is neither -1,1, or 0");
}
console.log("variable value is :",variableValue);

//Ternary operators.
//<condition?<expression if true>:<condition if false>;

variableValue = variableValue === 0 ? 1 : 0;
console.log("variable value is :",variableValue);

variableValue = variableValue === 0 ? 1 
    : variableValue === -1 ? 0
    : variableValue === 1 ? 0 
    : variableValue ;

console.log("variable value is :",variableValue);

/**
 * Problem Statment 
 * You are given three variables named left_operand, right_operand, and operator. Write code for operator values so that each value does the following:

'+': Add left_operand to right_operand and assign the result to ans.
'-': Subtract left_operand from right_operand and assign the result to ans.
'*': Multiply left_operand with right_operand and assign the result to ans.
'/': Divide left_operand with right_operand and assign the result to ans.
For any other operator, assign NaN to ans.
Remember, there are a lot of ifs to what the operator is. Find a solution to all ifs.
 */

let ansValue ;
let left_operand = 3;
let right_operand = 2;
let operator = '-';

ansValue = operator === '+' ? right_operand + left_operand
    : operator === '-' ? right_operand - left_operand
    : operator === '*' ? right_operand * left_operand
    : operator === '/' ? right_operand / left_operand
    : 'Nan';

console.log ("Answer is ",ansValue);

//Arrays
/**
 * Arrays are objects with methods and properties suitable for managing data items in an orderly fashion. 
 * They are list-like data structures that group data together, making them accessible through numerical indices.
 */

/**
They are dynamic.
They can be sparse or dense.
They are objects and so are mutable.
They have methods and properties to make managing elements more convenient.
 */

let arr = [1,2,3,4,5,6];

let arr1 =  new Array();
let arr2 =  [];
let arr3 = new Array(1,2,3,4,5);
console.log(arr1, arr2, arr3);

let arr4 = arr3.slice();// copy of arr3
console.log("arr4 is "+arr4);
let arr5 = arr4.slice(0,3);
console.log("arr5 is "+arr5);
let arr6 = Array.from(arr5);
console.log("arr6 is",arr6);
let arr7 =  [...arr3];
console.log("arr7 is", arr7);

/**
 * Properties of an array
    > length
    > prototype
Methods of an array
    > push() and pop()
    > unshift() and shift()
    > toString()
 */
console.log('length of arr is',arr3,arr3.length);

console.log("intial array prototype:",Array.prototype);
Array.prototype.newValue = "Added New property";
console.log("updated array prototype",Array.prototype);
console.log("new prototype" ,arr7.newValue);

/**
 * method 
 */
arr7.push(6);
console.log(arr7);
arr7.pop();
console.log(arr7);

arr7.unshift(0);
console.log(arr7);
arr7.shift();
console.log(arr7);

console.log(arr7.toString());

console.log(arr7.splice(2,4));//remove 4 elements from index 2

console.log("merge 2 array",arr7.concat(arr3));
console.log("merge 2 array using prototype",Array.prototype.concat(arr7,arr3));

//Multi Dimenstional Array
let arr8 = [["Car", 2000], ["Truck", 500], ["Bike", 6500]]; // Create array
console.log(arr8); // Print entire array
console.log('Access "Car":');
console.log("arr[0][0]:", arr8[0][0]); // Access "Car" at [0][0]
console.log("Access 500:");
console.log("arr[1][1]:", arr8[1][1]); // Access 500 at [1][1]

//add new row
let newRow = ["Auto", 1000];
arr8.push(newRow);
console.log("Added new row",newRow,"updated array is",arr8);

//add new column
let clmn_row1 = ["Ford"];
let clmn_row2 = ["Hunda"];
let clmn_row3 = ["Pulse"];
let clmn_row4 = ["yellow"];

arr8[0].push(clmn_row1)
arr8[1].push(clmn_row2)
arr8[2].push(clmn_row3)
arr8[3].push(clmn_row4)

console.log("after adding new column value is :"+arr8);

/**
 * Problem Statement
 * You are given four variables: raw_array, row, s, and e. Each variable represents the following:

raw_array: variable to which the data set in a two-dimensional array is assigned
row: row index in which the sub-array resides
s: starting index of the sub-array in raw_array
e: last index of the sub-array in raw_array
Create a copy of the single-dimension sub-array at row index row which starts from index s and ends at index e. Assign it to ans.
 */

let raw_array = [[1,2],[3,4][5,6],[7,8]];
let row = 2;
let s = 0;
let e = 1;
ans = row < 0 ? undefined
    : row > raw_array.length ? undefined
    : e < 0 ? undefined
    : s < 0 ? undefined
    : s > e ? unefined
    : s > raw_array[row].length ? undefined
    : e > raw_array[row].length ? undefined
    : raw_array[row].slice(s,e+1); // slice till end+1 
console.log("answer is: "+ans);

console.log(ans.slice(0,10));

//Loop
let countValue = 0;
while (countValue < 5){
    console.log("count is now:",++countValue);
}
/**
    while – While loop
    do/while – Do - While loop
    for – For loop
    for/in – For - in loop
    for/of – For - of loop
    forEach – For each loop
 */

countValue = 0;
do{
    console.log("count is now:",++countValue);
}while(countValue < 5);

for(countValue = 0; countValue < 5 ; countValue++){
    console.log("count is now:",countValue);
}

// Loop to print all odd numbers from 0 to 9
for(var i = 0; i < 10; i++){ // For loop to make 10 iterations
    if (i % 2 === 0){ // See if even number
        continue; // continue to next iteration
    }
    console.log('i value', i); // Print i value
}
console.log('Program ended.') // Print statement to tell the program ended`1e4r5][pomifdz .p]




//flow
for(let i =0; i<5; i++){
    if (i==3){
        continue;
        console.log("this will not be printed");
    }
    console.log("number printed is:",i);
}
console.log("program ended");

for (let i =0; i<5; i++){
    if (i==3){
        break;
    }
    console.log("number printed is:",i);
} 
console.log("program ended");

//iterating through arrays
let arraySample = [10,20,30,40];

for (let i = 0; i < arraySample.length; i++){
    console.log("array printed",arraySample[i]);
}

//iterating through multi dimensional array

let multiArraySample = [[10,'A'],[20,'B'],[30,'C']];
for (let i=0;i < multiArraySample.length; i++){
    for(let j =0; j < multiArraySample[i].length;j++){
        console.log("array printed",multiArraySample[i][j]);
    }
}

//forEach

arraySample.forEach(element => {console.log(element)});

//iterating objects

let sampleObject = {'one':1,'two':2,'three':3,'four':4};
console.log(''+Object.keys(sampleObject));
console.log(''+Object.values(sampleObject));
console.log(''+Object.entries(sampleObject));

for(let i in sampleObject){
    console.log(sampleObject[i]);
}

/**
 * Your task: is to find the sum of the population in a two-dimensional array of objects 
 * which reside in a region of temperature less than or equal to 10Â°C. Each object consists of the region information.
 */
let populationArray = 
[
    [
      {name: "NewYork", population: 1, temp: 6.0, currency: 'USD'}, 
      {name: "Boston", population: 1, temp: 2.0, currency: 'USD'}, 
      {name: "Los Angeles", population: 1, temp: 13.0, currency: 'USD'}
    ],
    [
      {name: "San Francisco", population: 1, temp: 12.0, currency: 'USD'}, 
      null, 
      {name: "Charlottesville", population: 1, temp: 8.0, currency: 'USD'}
    ],
    [
      null, 
      {name: "Seattle", population: 1, temp: 4.0, currency: 'USD'}, 
      null
    ],
  ]; // initialise the two-dimensional array of objects

  let finalPopulation = 0;
  console.log("start the program");
  for (let i = 0; i < populationArray.length; i++){
      for (let j = 0; j < populationArray[i].length; j++){
          if(populationArray[i][j] !== null){
              if(populationArray[i][j].temp <=10.0){
                    finalPopulation +=populationArray[i][j].population;
              }
          }
      }
  }
  console.log("final population which reside in a region of temperature less than or equal to 10Â° is :",finalPopulation)

  //Javascrit functions
  /**
   * Functions are a set of organized instructions used to carry out a task. 
   * They provide a modular way to reuse code anywhere in the program.
   */

  function sampleFunction (sampleArgument){
      return returnValue
  }

  function addAandB(inputA, inputB){
      return inputA+inputB;
  }
  console.log("sum of 2 given numbers 3 and 5 is:",addAandB(3,5));

  //assigning a varibale to function
  let sum = function addAandB_variable(inputA,inputB){
      return inputA+inputB;
  }
  console.log("sum of 2 given numbers 5 and 5 is:",sum(5,5));

  //function invoked at declaration
  let sum_invokeAtDeclaration = function addAandB_atInvocation(inputA,inputB){
    return inputA+inputB;
  }(2,2);
  console.log("sum of 3 given numbers 2 and 2 is:",sum_invokeAtDeclaration);

  //function without argument
  function withoutArgument(){
      let name = 'sampleName';
      return name;
  }
  console.log("without argument function returned value:",withoutArgument());

  //function without return statement
  function withoutReturnStatement(name){
      console.log("input argument is :",name);
  }
  withoutReturnStatement('garima');


  //nested functions
  function outerFunction(variableOuter){
      console.log("outer function",variableOuter);
      function innerFunction(variableInner){
          console.log("inner function",variableInner);
          return;
      }
      innerFunction(variableOuter)
      return;
  }
  outerFunction(2)
  
  /**
   * Arrow function or an arrow function expression is the more concise syntax for writing regular function expressions. 
   * Also known as a fat arrow function, they utilize => token, which is shaped like a fat arrow. 
   * With their concise syntax, we avoid writing return tokens, function token, and curly brackets. Letâ€™s look at the following syntax.
   */

  let farArrowVariable = variablesValue => {
      return;
  }

  let multiplyAandB = (a,b) => {
      return a*b;
  }
  console.log("multiplyAandB returns", multiplyAandB(2,3));

  multiplyAandB = (a,b) => a*b;
  console.log("multiplyAandB returns", multiplyAandB(2,3));

  let doubleNumber = a => a*2;
  console.log("double of 2 is",doubleNumber(2));

  let withoutArgumentFunction = () => "hello";
  console.log("print", withoutArgumentFunction());

  let objectFunction = (a) => ({1:a});
  let objectFunction1 = (a) => { return {1:a}};
  console.log("get value from objectFunction", objectFunction("hello garima")[1])
  console.log("get value from objectFunction1", objectFunction1("how are you garima")[1])

  /**
   * NOTE: If we wrote the above code as var func = a => {'1': a };, it would throw an error as JavaScript expects the parentheses to contain instructions for the body of the function.
   */

  //function as argument
  /**
   * The functions that take other functions as an argument or return functions are called higher-order functions. 
   * Meanwhile, functions passed as arguments are called callback functions
   */


  function printHello (){
      console.log("hello");
  }

  function higherOrder_function (callback_function){
        callback_function();
  }

  higherOrder_function(printHello)

  higherOrder_function (function () {
      console.log("hello");
  })

  higherOrder_function(() => printHello())

  //returning function from a function

  function foo(){
      function printHello(){
          console.log("hello foo");
      }

      return printHello;
  }
  let a = foo();
  a();

  function foo_fatArrow(){
      return () => console.log("hello foo_fatArrow");
  }
  
  let b = foo_fatArrow();
  b();

  let sampleArray = [10,20,30,40];
  let arrNew = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
  console.log(arrNew[1]);
  arr.forEach((val, ind, array) => { // arrow function to print arguments // forEach is a overloaded argument and can take 3 argument element,index and array
      console.log("Value:", val, " Index:", ind, " arr:",array); // print values
      });
  console.log(arrNew); // print array assigned to arr

  arr.forEach((_,index) => {
      console.log("print index", index);
  });

  //filter method
  /**
   * The filter method above takes a function as an argument that is invoked for each element in the array. 
   * The function that will be passed is given arguments in the following order by the filter method.
   */

   let arrFilter = arrNew.filter(a => a > 30); // Filter elements greater than 30
   console.log("arr:",arrNew); // print original array
   console.log("elements greater than 30:",arrFilter); // print filtered array
   
   let findVariable = arr.find(a => a >30);
   console.log("varible found is :",findVariable);

   let newArray = arr.map(a => a*2);
   console.log("new array is :",newArray);
   console.log("orignal array is:",arr);

   let sumValue = arr.reduce((prev,curr) => prev+curr);
   console.log("reduced value of array is:",sumValue);

   let sumOfNewArray = (arr.map(a => {return a*2})).reduce((prev,curr) => prev+curr);
   console.log("sum of new array is :",sumOfNewArray);

   /**
    * find number of strings in an array
    */
   let problemArray =["hello",1,2,NaN,"garima",true];
   let countOfStrings = (problemArray.map(ele => {
                                        return typeof ele === 'string' ? 1 : 0
                                    }))
                        .reduce((prev, curr) => prev +curr);

    console.log("number of string elements in problemArray is:",countOfStrings);

    /**
     * find number of elements in 2d array
     */

    let twoDarray =[[1,2],[3,4],[5,6],[]];
    let sumOfTwoDarray = twoDarray.map (
        ele => ele.length
        ).reduce(
            (prev,curr) => prev+curr
            )
    
    console.log("number of elemnets in  2D array is :",sumOfTwoDarray);

//Problem
/**
 * 
 * The game designer gives you three arguments: length, width, and pieces. Each argument is as follows:

length (First argument): This is the length of the outer array of the two-dimensional array representation of the board.
width (Second argument): This is the length of the inner arrays of the two-dimensional array representation of the board.
pieces (Third argument): This is an array of objects where each object has the following properties:
row: Has a number value representing the index of the outer array of two-dimensional array representations of the board.
col: Has a number value representing the index of the inner array of two-dimensional array representations of the board.
value: Is the string value representing the piece that will be assigned to the respective index inside the two-dimensional array representation of the board.
Create a two-dimensional array of the respective length and width and populate it with the piecesâ€™ 
values of the objects residing in the array, passed to the third (pieces) argument. 
All unpopulated indices will be assigned to " " value (a string with only a single space character).
 */

let sample_pieces = [
        {row : 0, col : 0, value: 'X'}, {row : 0, col : 1, value: 'O'},
        {row : 0, col : 2, value: 'O'}, {row : 1, col : 0, value: 'X'},
        {row : 1, col : 1, value: 'X'}, {row : 1, col : 2, value: 'O'},
        {row : 2, col : 0, value: 'X'}, {row : 2, col : 1, value: 'O'},
        {row : 2, col : 2, value: 'O'}, {row : 4, col : 3, value: 'W'},
    ];

let generate = function (length, width, pieces) {
    let board = new Array(length).fill(" ");
    board = board.map(_ => new Array(width).fill(" "));
    
    pieces.forEach(piece =>{
        // Create check for out of bounds
        // If out of bounds, return
        if(piece['row'] >= length || piece['col'] >= width)
            return;
        if(piece['row'] < 0 || piece['col'] < 0)
            return;
        // The piece is not out of bounds and so it is assigned to the board
        //board[piece['row']][piece['col']] = piece['value'];
        board[piece['row']][piece['col']] = piece['value'];
    })
    return board;
}


var board = generate(3 , 3, sample_pieces); // Generate board
console.log(board);

//Scope
let a1 = 10;
var b1 = 20;

const c1 = 30;

function scope(){
    var testVarriable = " scope is outside";
    console.log("a is accesible:" ,a1);
    console.log("b is accesible:" ,b1);
    console.log("c is accesible:" ,c1);
    return ('function ended');
}

console.log(scope());
//console.log(testVarriable)

/**
 * To import a variable from a module, use the following syntax.

import {variable_names} from "./module_name";
Using the keyword import, we import all variables named in the curly brackets {} from the module name as string after the keyword from.

Meanwhile, for the import to be successful, the corresponding module needs to export the variables too. Here is the syntax:

export {variable_names};
 */


newFunction();

//problem

/**
 * u have a function assigned to square which calculates the square of the number passed as argument n. The following lines need to be updated.

Line 9: Replace NaN with an appropriate number that satisfies the conditional.
Line 15: Replace NaN with an appropriate number that satisfies the conditional.
Line 20: Replace the two NaN values with the appropriate numbers that satisfy the conditional.
Line 25: Replace NaN with the variable that will be returned to give the correct answer.
Read the code to figure out the correct replacements. With the correct replacements, all test cases should pass smoothly. Keep an eye out of the scope of variables.

Good luck coding!
 */

var square = function(n)
{
    var a = 5;
    let b = 6;
    const c = 7;
    var total = 0;
    var sum = function (arg1 , arg2){ // This function takes the sum of two numbers
        let b = 7 
        if (c === 7){ // <----- fix this
            b = b + a;
            total = arg1 + arg2;
            return;
        }
    }
    if (total === 0){ // <----- fix this
        let loopSum = 0;
        let a = 6;
        for (var i = 0; i < n; i++){
            loopSum = total;
            if(a === 6 && b === 6){ // <----- fix this
                sum(loopSum, n);
            }
        }
    }
    return total; // <----- fix this
}


//find max number in  array recursive

function max(inputArr){
    if(inputArr.length === 0){
        //best case scenario;
        return -1;
    }

    if(inputArr === 1){
        //best case scenario 2 , return value at 0 position.
        return inputArr[0];
    }

    else{
        var max_subarray = max_helper(arr.slice(1)); 
        // compare the max of remaining array with your value and return accordingly
        if(arr[0] > max_subarray)
            return arr[0];
        else
            return max_subarray;
    }
}

//fibonnachi series

function fibonachi(inputNumber){
    if(inputNumber === 0){
        return 0;
    }
    if(inputNumber === 1){
        return 1;
    }

    return fibonachi(inputNumber - 1) + fibonachi(inputNumber - 2);
}

let number = 10;
console.log(`${number} fibonachi number is  ${fibonachi(number)}`);

//pascals triangle

function getpascalline(linenumber){

    if (linenumber === 0){
        return [1];
    }

    else{
        let line = [1];
        let previousline = getpascalline(linenumber-1);

        for (let i = 0;i<previousline.length -1;i++){
            line.push(previousline[i] + previousline[i+1]);
        }

        line.push(1);

        return line;
    }

}

console.log(getpascalline(3));