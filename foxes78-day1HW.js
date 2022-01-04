//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["max","HAS","PuRple","dog"];

// a string
// an array
// I need to loop the array and search the string for each word in the array
// use the string.search() method to search the dog_string for each dog name

/* if using a normal function
 line 18 would be as follows:
 function findWords(str, names) {
*/
let findWords = (str, names) => {
    // Your code goes here
    let matched = false;
    for (let i=0; i<names.length; i++){
        if (str.search(names[i]) != -1){ // i know search found something if its return value is not -1 
            console.log(`Matched dog_name ${names[i]}.`);
            matched = true;
        }
    }
    if (matched === false){
        console.log('No matches.');
    }
}
//Call function here with parameters
findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

// go through my array and replace each even index with "even index"
// how might i do this with splice? arr.splice(<index to start at>, <number of items to remove>, <items to add>);
// i want to start at any even index, remove 1 item, and add one 'even index'
// arr.splice(<any even index>, 1, 'even index')

function replaceEvens(arr){
    //code goes here
    for(let i=0; i<arr.length; i+=2){
        arr.splice(i, 1, 'even index');
    }
}

//replaceEvens(arr1); // in-place answer
console.log(arr1);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// exercise #2 done with map - out of place answer

let replaced_evens = arr1.map( element => {
    if (arr1.indexOf(element)%2 === 0){
        return 'even index'
    }
    return element
}
)

console.log(replaced_evens);