// another alternative to conditionals: the switch case or case switch statement
// works much the same as a if elif elif elif else structure

let day = new Date().getDay(); // new keyword is related to object instantiation - we're instantiating a new Date object here

let literal_day = new Date().toString();

console.log(day);
console.log(literal_day);

// build a little case switch for days of the week
// syntax for a switch case: switch(<parameter>){case <value>: <code> break; case <value>: <code> break;}
switch(day){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break; // break tells the switch code block to end
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
}

switch(literal_day.slice(0,3)){
    case 'Sun':
        console.log('Sunday');
        break;
    case 'Mon':
        console.log('Monday');
        break;
    case 'Tue':
        console.log('Tuesday');
        break; // break tells the switch code block to end
    case 'Wed':
        console.log('Wednesday');
        break;
    case 'Thu':
        console.log('Thursday');
        break;
    case 'Fri':
        console.log('Friday');
        break;
    case 'Sat':
        console.log('Saturday');
        break;
}

console.log('\n\n JavaScript Objects!')
/* JS Objects!
JS simple objects (and complex objects) are equivalent to python's dictionary
*/

// the keys in a JS object don't need to be in quotation marks - they're automatically strings when they need to be, otherwise they're just variable names
// this has to do with the fact that the JS object shares some characteristics with the python object and the python dictionary
let person = {
    name: 'Joao',
    age: '27',
    favorite_number: '27'
}

// accessing the data in our JS object is the same as python
// but we have two options - one like python's dictionaries, one like python's objects

// bracket notation
console.log(person['name']); // just like python dictionary

// dot notation
console.log(person.name); // just like a python object

// more complex JavaScript Objects

let person2 = {
    name: 'Joao Cancelo',
    age: '27',
    favorite_number: '27',
    teams: ['Manchester City', 'Juventus', 'Portugal', 'Benfica', 'Valencia', 'Inter Milan'],
    positions: ['RB', 'LB'],
    favorite_foods: {
        italian: ['pasta', 'pizza']
    }
}

// accessing nested data in our JS object is just like accessing nested data in our python dictionaries
// the first team name
console.log(person2.teams[0]);

// get the string 'pasta'
console.log(person2['favorite_foods'].italian[0]);

// a couple JavaScript Object Prototype Methods - literal Object that most things are built on
// Object.keys(<object>) and Object.values(<object>) are similar to python's dict.keys() and dict.values()
console.log(Object.keys(person2));
console.log(Object.values(person2));

/* Looping an object in JS */
console.log('\n\n Object Looping:');

// for-in loop is nearly identical to how we loop through a python dictionary
for(k in person2){
    console.log(`Value at key ${k}: ${person2[k]}`); //must use bracket notation to access the values in this kind of loop
}

// can use the standard JS for loop alongside Object.keys() or Object.values() because those methods return arrays
let p2keys = Object.keys(person2)
for(let i=0; i<p2keys.length; i++){
    console.log(`Key: ${p2keys[i]} - Value in original object: ${person2[p2keys[i]]}`);
}

// creating a custom object / our own Object Prototype - with ES6 method syntax
// similar to creating a python object but we're using a function
// note: hey sam stop using arrow functions for this, they don't work for function-based object prototypes :)
console.log('\n\n Custom Object Prototype:')
// JS 'this' is equivalent to Python 'self'

function Animal(name, species, habitat, color){
    this.name = name;
    this.species = species;
    this.habitat = habitat;
    this.color = color;

    // JS prototype object can have methods
    this.printInfo = () => {
        console.log(`This is a ${this.species} named ${this.name} who lives in the ${this.habitat} and is ${this.color} colored.`);
    }
}

// instantiate an instance of our object prototype
let fennec = new Animal('Doug', 'Fennec Fox', 'desert', 'brown');
let orca = new Animal('Larry', 'Orca', 'ocean', 'panda');
// access the attributes
console.log(fennec.name);
// call the method
fennec.printInfo();
orca.printInfo();

// -- JS class based object --
// very similar to a python class based object

class AnimalClass{
    constructor(name, species, habitat, color){ // constructor here is just like __init__ in python
        this.name = name;
        this.species = species;
        this.habitat = habitat;
        this.color = color;
    }

    printInfo(){
        console.log(`This is a ${this.species} named ${this.name} who lives in the ${this.habitat} and is ${this.color} colored.`);
    }
}

console.log('\n Class-based example:')
let fennecclass = new AnimalClass('Doug', 'Fennec Fox', 'desert', 'brown');
let orcaclass = new AnimalClass('Larry', 'Orca', 'ocean', 'panda');
// access the attributes
console.log(fennecclass.name);
// call the method
fennecclass.printInfo();
orcaclass.printInfo();


// javascript class-based inheritance
// just like a python object can inherit properties, methods, behaviour from another object
// a javascript class-based object can inherit from another JS class-based object

class Fox extends AnimalClass{
    constructor(name, species, habitat, color){
        super(name, species, habitat, color);
        this.genus = 'True Fox';
        this.scientific_genus = 'Vulpes';
    }

    printFox(){
        console.log(`This is a ${this.scientific_genus} aka ${this.genus}. Inherits from AnimalClass.`);
    }
}

let arcticfox = new Fox('Snowflake', 'Arctic Fox', 'tundra', 'white');
console.log(arcticfox.name);
arcticfox.printInfo();
arcticfox.printFox();