// Async JavaScript - Callbacks and Promises :)

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic example of the event loop flipping the expected order of results

let first = () => {
    console.log('first');
}

let second = () => {
    console.log('second');
}

// execute first and second
first();
second();

// let's change first - let's mimic a longer process by artificially increasing the runtime of the first function
first = () => {
    //setTimeout(() => {console.log('first')}, 5000); // this delays the console.log by 5000 milliseconds
}

console.log('\nFirst Delayed:')
// execute first and second again
first();
second();


/* let's look at a simple example of solving an event loop issue with a callback */

function doneWithClass(callback){
    //alert('Click through when you are done with class');
    callback();
}

// so when we call done with class -> we can pass in a function to be the callback function that executes when the alert is clicked through
doneWithClass(() => {console.log('Yay class is over now I get to go do codewars :)')})


/* solving event loop execution order with callbacks introduces a new problem: callback hell
 what if I had another function that had to execute after the callback function that was doing the console.log?
 I guess I could do another callback? make that function a callback of the callback?
 but what if there was another function that had to happen after that other one
 you can see where im going:

 Callback hell:
function1( () => {
    function2 ( () => {
        function3 ( () => {
            function4 ( () => {
                function 5 ( () => {
                    //maybe something actually happens here!
                })
            })
        })
    })
})
*/

/* 
Solving callback hell: *ish*
JS has two systems designed to be more readable/approachable ways to work with callbacks
Method #1 - promises
Method #2 - async/await
*/

// difficult thing: an asynchronous process (promise and/or async/await) must remain an asynchronous process
// so you cannot save an async process' results directly as a variable in the global scope

console.log('\n\n Promises')

// create a promise
// a function will return a promise
// that promise is JS saying "I'll get you the result of this process when I'm done with it"
// promises have different statuses - promises can be unresolved or resolved (done or not done)
// and when they finish they must either resolve or reject (successfully run or fail)

const isFox = (name) => {
    return new Promise( (resolve, reject) => {
        if (name.includes('Fox')){
            resolve(name) // resolve is another function (it's a callback)
        } else {
            reject(name) // reject is also a callback
        }
    })
}

// use that promise
/* let promiseThingy = isFox('Fennec Fox')
.then(
    // happy resolve success path
    (result) => {console.log(`This is a fox! ${result}`)}
)
.catch(
    // bad reject path
    (result) => {console.log(`This is not a fox. ${result}`)}
);
 */
//console.log(promiseThingy);


/* Async/Await
Aysnc/await is a more modern approach to using promises through keywords with the goal of introducing less confusing syntax
one reminder: async processes are independent of the global scope and therefore async processes must remain asynchronous
*/

// function that happens slowly - THIS IS NOT USING ASYNC, this is using a promise because it's easier for me to do the artificial delay with a promise
// this is just mimicking some process that takes a couple seconds (like maybe an api call)
let slow_raises = (n1, n2) => {
    return new Promise( (resolve) => { setTimeout(() => resolve(n1+n2), 2000) } );
}

// non-async function with a callback to slow_raises (that 2 second long process)
// our data will not be properly displayed because slow_raises won't have finished when we try to use the relevant data
// an event loop problem -> the console log and the return will execute before slow_raises finishes executing
let increase_salary = (base, raise) => {
    const new_salary = slow_raises(base, raise);
    console.log(`New Salary: ${new_salary} - base: ${base}`)
    return new_salary
}

increase_salary(60000, 5000);

//async await introduces a way to solve this

let async_increase_salary = async (base, raise) => {
    const new_salary = await slow_raises(base, raise);
    console.log(`New Salary: ${new_salary} - base: ${base}`)
    return new_salary
}

console.log(async_increase_salary(60000, 5000));