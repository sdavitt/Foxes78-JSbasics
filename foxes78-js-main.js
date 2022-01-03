// single-line comment

/*
 Multi
 Line
 Comment
*/

// functions are called in the same manner: function_name(inputs)

// print()
console.log('Hello, Foxes!');

/* To run a JS file in your command prompt/terminal
$ node filename.js
after installing node (and adding node to your PATH variables)
*/
console.log('This JavaScript file is being run by Node in our command prompt :)');

// basic types in JavaScript
// aka primitive types in JavaScript
// strings (same as python strings)
// boolean (almost same as python booleans)
// numeric (encompasses both integers and floats)

// variable definition and declaration
var animal_name = 'Fennec Fox';

/*
in JavaScript - indentation does not matter - whitespace does not matter
*most of the time
Why?
JavaScript is a compiled language. Python is not - python is an interpreted language.
In an interpreted language, the computer does all of the work at runtime. The code that we write is actually what the computer reads/translates.
In a compiled language, the computer does some of the work before runtime at the compile stage. This means that what we write isn't exactly what the computer reads.
A compiler does some translation before the computer reads the code. One of the things that the compiler does is remove all whitespace.

In python - we control line endings with a newline (hitting enter). We control code blocks with indentation and colons (hitting tab).
In javascript - we control line endings with semicolons ; and we control code blocks with curly brackets {}
*/
if(true){console.log('This is inside the if statements code block. It is inside the curly brackets');}console.log('This is outside of the if statement code block.');
console.log('\n\n');
// whats going on with var?
// we need to tell the computer that we're making a variable before we make it
// so instead of just x = 3
// we have to say var x = 3; ("Hey computer, I'm about to make a variable")

// This can be split up into 2 steps - variable declaration and variable definition
var x; // this is variable declaration - we told the computer that a variable named x should exist (we can't do this in python)
console.log(x); // a variable declared but not defined has value undefined

x = 3; // this is variable definition - we're telling the computer what value the previously declared variable should have.
console.log(x);

// and of course we can combine these steps into one line
var y = 5;

// you must declare your variables
//  z = 7; // definition without declaration -> bad practice - creates a variable associated with a specific global object that can cause weird and unexpected errors

console.log('\n\n','Primitive Types:');
// strings are just like strings in python
var my_string = 'Orca';

// typeof keyword - similar to python's type() function
console.log(my_string, typeof my_string);

// booleans - same as python - hold either True or False
// difference is that booleans in JS are lowercase instead of uppercase
var bool1 = true;
var bool2 = false;
console.log(typeof bool1, bool1);

// Numeric datatype (encompasses both integers and floats)
var num1 = 4;
console.log(typeof num1, num1);

var num2 = 4.0;
console.log(typeof num2, num2);


/* 
Python - two most commonly used data structures: Lists and Dictionaries
JavaScript - has arrays (same as lists) and simple objects (same as dictionaries)
*/

// array - square brackets just like a python list
var some_array = [4, 'Fennec Fox', 'array is like a list', 3.1415];
console.log(typeof some_array, some_array);

// simple object - curly brackets just like a python dictionary - key:value pairs just like a python dictionary
// keys are strings - they will be automatically converted if possible
var my_simple_object = {'one': 1, 2: 'two', 'key': 'value', true: 'nah'}
console.log(typeof my_simple_object, my_simple_object);


console.log('\n\n','Variable Hoisting:');
/* 
A quick aside about variable definition and declaration - VARIABLE HOISTING *might get asked what variable hoisting is on an interview
variable hoisting is an automatic process during compiling that brings all variable declarations to the front of the javascript to be executed
aka varaible declarations will run before any of your other code
*/
console.log(my_hoisting_example);
var my_hoisting_example = 'Why is this message not console logging.';

// specific scenario of hoisting allowing us to avoid an error:
var y2 = -5;
if (y2 > 0){
    var x1 = y2+1;
}
if (x1 == undefined){
    console.log('no error, thanks hoisting.');
}

console.log('\n\n','Basic Math Operations:');
// Basic math operations

// addition, subtraction, multiplication, exponents, normal division, modulo are all the same
var sum = 7.0 + 8;
console.log(typeof sum, sum);
var subtracted = 7.0 - 8;
var multiplied = 7*8;
var exponential = 8**2;
console.log(typeof exponential, exponential);

var division = 7/8;
console.log(typeof division, division);

// modulo aka remainder division
var modulo = 7%2;
console.log(typeof modulo, modulo)

// floor division in python is done with // - in javascript we use Math.floor() and normal division
var floor_div = Math.floor(7/2);
console.log(typeof floor_div, floor_div);

// other math conversions -> Math.floor() rounds down to the nearest integer, Math.ceil() rounds up to the nearest integer, Math.round() does normal rounding
var rounded = 3.5;
console.log(Math.floor(rounded));
console.log(Math.ceil(rounded));
console.log(Math.round(rounded));


/* JS mind bender #1 :)
what happens if we add a string to an integer?
*/
var int1 = 1
var str1 = 'bagel'
console.log(int1 + str1);
// what's happening here? automatic type conversion
var result1 = int1 + str1;
console.log(typeof result1, result1);
// the int1 is being converted to a string so that it can be added to the other string with normal string concatenation (same as python adding two strings)
// other examples of weird JS automatic type conversion
console.log(undefined + 0);
console.log(undefined + []);
console.log(0 + []);
console.log(true + undefined);
console.log(false + 0);
console.log(true + null); // null is the JS equivalent of python's None
// dynamic typing - no variable's type cannot be changed


// ok - some of this system is a little too flexible
// what can we do to improve it? - this is a constant question when it comes to JavaScript for developers all over the world
// there are two most popular solutions nowadays
// 1. Write ES6 aka EcmaScript6 - it is a modern standardization of JavaScript (which compiles right back to 'vanilla' JavaScript)
        // this is what we'll be doing mostly
// 2. Write TypeScript - TypeScript is a modern alternative to JavaScript which is much more its own language (however it still compiles right back to 'vanilla' JavaScript)
        // TypeScript was written by a bunch of Microsoft devs who got tired of JavaScripts automatic conversions and type flexibility
        // it is much the same as JavaScript just with static typing

// the biggest difference with ES6 is the way that we do variable declaration and definition
// in ES6 we don't use var
// instead we use the let and const keywords
// let is most commonly used - let is for variable declaration

console.log('\n\n','Let and Const:');

// var - redeclaration and redefinition
// let - redefinition but no redeclaration - good

let animal1; // declaration with let - a variable declared with let cannot be redeclared unlike var
// let does not support redeclaration
animal1 = 'Fennec Fox';
// let does support redefinition
animal1 = 'Panda';

let animal2 = 'Red Panda';

animal2 = 'Raccoon'; // redefinition

// const - a new keyword for declaring an immutable variable
// no redeclaration or redefinition
const animal3 = 'Penguin';

console.log('\n\n','Functions:');

/* Functions:
 for the most part - functions are very similar in python and javascript
 the concept is the same - define a process with a certain number of parameters/input variables
 and have that process be repeatable (callable)
 */

 // function definition - similar to python
 function addNums(){
     let num1 = 3.14;
     let num2 = 7;
     return num1 + num2
 }

 // function call - same as python
 console.log(addNums());

 // same function but with input
 function addNums2(num1, num2){
     return num1 + num2
 }

 console.log(addNums2(100, 202));

 // more modern way to define functions - the ES6 arrow function
// an arrow function is written kind of like a variable assignment but with extra steps
let addNumsArrow = (num1, num2) => { return num1 + num2 }

// arrow function with 1 input
// parenthesis around input not needed if there is only one input in the arrow function
let squareNum = num => { return num**2 }

// arrow function without input
let helloWorld = () => {console.log('Hello, World.');}

console.log(addNumsArrow(100, 202));
console.log(squareNum(70));
helloWorld();

// JavaScript Closure
// aka a Self-Invoking Function
// javascript's version of an anonymous function
// aka a function that is called as soon as it is defined
// we have a function definition using the arrow function syntax where the function name ordinarily would be in a function
console.log((num => {return num**2})(70));

(name => {console.log(name);})('Devon');

console.log('\n\n','Conditionals:');
/* JS Conditionals and Control Flow
*/

let age = 35;
if (age < 20){
    console.log('Child');
}
else if (age < 65){
    console.log('Adult');
}
else {
    console.log('Senior');
}

// some operators are slightly different in javaScript than they are in python - they work the same way but they might be written differently
// https://www.w3schools.com/js/js_operators.asp
// and &&
// or ||

// biggest difference -> equality of value and type
console.log('4' == 4); // this would be false in python
// the double equals == in python and JavaScript are DIFFERENT THINGS
// javaScript's == doesn't exist in python
// JS == tests equality of value but not equality of type
// aka the string 4 and number 4 are considered equal

// the python == is the same as the JS === triple equals
// === in JS tests for equality of value and type
console.log('4' === 4);

// JS loves having many ways to do the same thing and ES6 loves shorthand
// TERNARY OPERATOR
// shorthand for conditionals
// replaces if (condition){operation}else if (condition){operation}
// condition ? operation : condition ? operation
let age2 = 35;
age2 < 20 ? console.log('Child') : age2 < 65 ? console.log('Adult') : console.log('Senior');


let howOld = age => { return age < 18 ? 'Child' : age >= 18 && age <= 65 ? 'Adult' : 'Senior' }
console.log(howOld(12));

// Looping :)
console.log('\n\n', 'Looping!');

// just like most other in JS we have a lot of different ways to loop
// some are similar to python
// some are new
// I would recommend spending time getting comfortable with javascript's normal for loop first

// the javascript normal for loop is most similar to python's index loop aka 
// for i in range(len(iterable)):
// becomes
// for(let i = 0; i < iterable.length; i++){}
// for(<counter variable>; <condition>; <step>){}

// example: loop through every other number from 0 to 20
// i++ is an operation we can do in JS that is the same as python's i = i+1 or i+=1
for(let i=0; i<20; i+=2){
    //console.log(i);
}

// JS while loop - exactly the same as python
let counter = 100;
while (counter < 10){
    console.log(counter);
    counter++;
}

// what about a little bit of a different while loop
// JS do-while loop
// a do-while loop will always run at least once -> a do while loop's condition is checked at the end of the loop instead of the start
let n = 100;
do {
    console.log(n);
    n++;
} while (n < 10);

// looping with arrays

// declaring and defining our array
let animals = ['Sea Urchin', 'Bengal Tiger', 'Eurasian Elephant', 'Sea Whale', 'Fennec Fox', 'Siberian Tiger', 'Sea Otter'];
// indexing an array is the exact same as a python list
console.log(animals[1]); // Bengal Tiger

// Method #1 - normal for loop
// i represent the array indexes
// array.length is the same as len(array)
for(let i=0; i<animals.length; i++){
    //console.log(`Array value at index ${i}: ${animals[i]}`);
}

// JS f-string: `${} ${}` replacing python f'{} {}' 

// Method #2 - not my preferred way
// a will represent index numbers not values in the array
for(indicesA in animals){
    //console.log(indicesA);
}

// another way to 'loop' an array
// similar to a for-in loop in python or the python map function
// through the array method Array.forEach()
// Array.forEach() takes a function as a parameter and runs that function on each value in the array
//console.log(animals);

animals.forEach( element => console.log(`This is a ${element}`) );


// other array methods
console.log('\n\n', 'Array Methods!');

// toString and join
// conversion from an array to a string
// array.toString() takes in no parameters
let animalsStr = animals.toString()
console.log(typeof animalsStr, animalsStr);

// array.join()
// this is just like python's join but with the parameters flipped
// python: delimiter.join(List)
// JS: array.join(delimiter)
let animalsStr2 = animals.join(' | ');
console.log(typeof animalsStr2, animalsStr2);


// Array.map(<callback function>)
// map is very similar to forEach and to python's map
// whatever the callback function returns is the value added to the new array
let sea_animals = animals.map( element => {
    if (element.includes('Sea')) {
        return element
    }
    else {
        return false
    }
});
console.log(sea_animals);

// array.filter(<callback function>);

let my_callback_func = element => {
    if (element.includes('Sea')) {
        return element
    }
    else {
        return false // filter removes any elements that the callback functions returns false for
    }
}

let only_sea_animals = animals.filter(my_callback_func);
console.log(only_sea_animals);


// reduce - less commonly used - pretty easy to just use a for loop instead for the same thing
let nums = [4.99, 5.99, 7.99, 2, 39];
// reduce is used with numerical arrays to boil them down to a single value
// reduce needs a callback function with two parameters
    // an accumulator (aka what will become our answer)
    // a parameter to represent each element
let one_num = nums.reduce( (accumulator, current_num) => { return accumulator*current_num } ); // 4.99 * 5.99 * 7.99 * 2 * 39 = 18628.108122
console.log(one_num);

// you can't always trust computer decimals -> floats/decimals are not exact
// sometimes you may see 14.000000001 -> thats actually just 14, your computer is confused about what is exactly 14
// you can always fix that with Math.round() or Number.toFixed()
console.log(Math.round(14.0000000001));
console.log(3.1415.toFixed(2)); // Number.toFixes(<number of decimal places>)

// Array.slice(), Array.splice()
// these can both be considered similar to Python list slicing but they're slightly different

//Array.slice() is just like list[:]
    // however Array.slice() does not give an option for a step
let animalsSlice = animals.slice(1, 3); //give me a copy of index 1 up to but not including index 3 from the animals list
console.log(animalsSlice)

// Array.splice() is rather different -> splice is an in-place
// Array.splice(<starting index>, <number of indexes to remove>, <optional replacement values (can be fewer or more than the number removed)>);
console.log('\nbefore splice', animals);
console.log(animals.splice(1, 3, 'Siberian Tiger', 'African Elephant', 'Hippopotamus', 'Thylacene', 'Hagfish'));
console.log('\nafter splice', animals);

// normal Array operations
// remove a value from the end of the array: Array.pop()
console.log(animals);
animals.pop(); // array.pop() in JS is different than python -> it can ONLY remove the last value from the list
console.log(animals);

// the thing that Sam always forgets - there is no built-in Array.remove()
// removing a value from an array by value requires a loop
// you can use splice to remove a value at a specific index
animals.splice(2, 1); // removes just the item at index #2

// you can use a loop and delete or a loop and splice
for(let i=0; i<animals.length; i++){
    if (animals[i] == 'Hagfish'){
        //delete animals[i] // not recommended, leaves an empty slot
        animals.splice(i, 1);
    }
}
console.log(animals)

// we could save this as our own custom remove method just like the python remove
let remove = (element, arr) => {
    for(let i=0; i<arr.length; i++){
        if (arr[i] == element){
            //delete animals[i] // not recommended, leaves an empty slot
            return arr.splice(i, 1)
        }
    }
}

remove('Thylacene', animals)
console.log(animals);

// JS does have a version of list.append()
// Array.push()
// adds the specified element to the end of the array
animals.push('Arctic Fox');
console.log(animals);