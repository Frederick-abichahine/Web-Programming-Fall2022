//Three types of writing for loops in ES6

const numbers = [4,5,10,2]

//the normal way:
for(let i = 0; i<numbers.length; i++){ //we CANNOT use const for i here, should be let
    console.log(numbers[i])
}

//1) The for in loop to access arrays, objects, and strings - will output the indices (order not preserved)
//###############################################################################################

for(const n in numbers) { //we can use const here instead of let since here we are not just re-declaring n each time but we are destroying n and then declaring n again so it works here
    //n is the indices
    console.log(numbers[n]) //this will display 4,5,10,2 or in another order
}

//since n here is a string that js parses automatically, but if we write n+1 it will concatenate n to 1 not add them...

//if the order the matters for us then DO NOT use for in since the same loop can give us two different outputs

const person = {fname:"Fred", lname:"Chahine"} //here in the set we do not have indices but the key replaces it such as fname and lname

for(const i in person){ //i will be fname then lname since these are the keys
    console.log(i) // -> fname
    console.log(person[i]) // -> Fred
}

//2) The for of loop to access arrays and strings - will output the elements not the indices (order is preserved) (NOT OBJECTS, ERROR)
//###############################################################################################################

for(let x of numbers){ //const works here too
    console.log(x) //this will print 4,5,10,2 in this order
}

//for(let x in numbers)
//the type of x is a string, but we do not need to parse since javascript does it automatically
//since x here is a string that js parses automatically, but if we write x+1 it will concatenate x to 1 not add them...

//for of is better used with strings and arrays
//for in is better used with objects


//3) The .forEach(fct) for arrays
//###############################

numbers.forEach(fct)

function fct(value, index, array){ //we can ommit index and array such as function fct(value){}, also the order here matters so if we swap index and value then value will be the index and index will be value
    console.log(index) //we can put anything here
}

//###############################

//we can send default values in functions if we dont send a value. EX

function sum(x, y=15){
    return x+y;
}

sum(10,2) //--> this will return 12
sum(10)   //--> this will return 25 since y has a default value
sum()     //--> this will give an error since x does not have a default value

function fct1(...args){ //if we do not know how many parameters to send we put this, now args is an array 
    args[0] //-> 4
    args[1] //-> 5
    args[2] //-> 2
}

fct1(4,5,2)

function summ(...args){ 
    add = 0
    for(let x of args){ //since args is an array
        add+=x
    }
    return add
  }
  
summ(4,5,2)

//######################
//        Class
//######################

//now we say methods instead of functions
//methods are functions that are in a class

class Car{
    constructor(model, year){
        this.model = model
        this.year = year
    }
}

const my_car = new Car("Ferrari", 2019)
my_car.year //--> outputs 2019
my_car.year = 2022 //no need for getters and setters, directly access
my_car.year //--> outputs 2022
