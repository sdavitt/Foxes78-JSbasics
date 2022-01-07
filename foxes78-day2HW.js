//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let parseObject = (obj) => {
    for (k in person3){
        if (typeof person3[k] == 'string'){ // handles tacos and burgers - strings
            console.log(person3[k]);
        } else {
            if (typeof person3[k][0] == 'string'){ // handles pizza and ice_cream - arrays
                for (let i=0; i<person3[k].length; i++){
                    console.log(person3[k][i]);
                }
            } else { // handles the shakes - array containing an object
                for(w in person3[k][0]){
                    console.log(person3[k][0][w]);
                }
            }
        }
    }
}
//parseObject(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`This is ${this.name}, he is ${this.age}.`);
    }

    older = () => {
        console.log(`Happy Birthday, ${this.name}! You are now ${this.age+1}.`);
        this.age++;
    }

    addAge = old => {
        console.log(`Wow time went fast. ${this.name}, you were ${this.age}. You are now ${this.age+old}.`);
        this.age+=old;
    }
}

let kevin = new Person('Kevin', 76);
let derek = new Person('Derek', 12);

/* kevin.printInfo();
derek.printInfo();

kevin.older();
kevin.older();
kevin.older();
kevin.printInfo();

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age
derek.addAge(20);
derek.printInfo(); */


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

// create a function that returns a promise - that either resolves or rejects - if string length > 10, resolve - if string length < 10, reject
// .then( resolve console log was >10)
// .catch (reject log <10)

let strLong = (str) => {
    return new Promise( (resolve, reject) => {
        if (str.length>10){
            return resolve(str);
        }
        else{
            return reject(str);
        }
    })
}

strLong('Fennec Foxes')
.then( (val) => {
    console.log(`This string ${val} is longer than 10 characters.`)
})
.catch( (val) => {
    console.log(`This string ${val} is 10 or fewer characters long.`)
});