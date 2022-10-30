//We no longer use the Lecture 6 JS anymore, we use ES6.
//the old js we used var x;
//Also in the old JS we could declare the same variable more than once such as: var x = 10;
//                                                                              var x = 7;
//any variable declared without a keyword will be var, so y = 7 is basically var y = 7

//########################
//          ES6
//########################


//#################
//       let
//#################

//in the new JS we use "let" not "var"
//"let" does not allow us to redeclare a variable, so we can not do "let x = 0;" and then "let x = 7;" (DOES NOT WORK)
//"let" can not be declared after its use such as: "x=0" then "let x;" (DOES NOT WORK), unlike var which can be done
//"let" respects block scope

for(var i = 0; i<5; i++){
    console.log(i) // this loop will output 0, 1, 2, 3, 4
}
console.log(i) // since i will be considered as a global varibale using "var" in JS so this will output 5 as 5 is the stopping condition of the loop.

//BUT if we use "let" it will respect the block scope and "i" will no longer be a global variable

for(let i = 0; i<5; i++){
    console.log(i) // this loop will output 0, 1, 2, 3, 4
}
console.log(i) //this will give an error since i is not global

//BUT if we want to use let and have i as global we declare i before the loop such as:

let i
for(i = 0; i<5; i++){
    console.log(i) // this loop will output 0, 1, 2, 3, 4
}
console.log(i) //this will output 5

function fct(){
    var i = 0 //var has something called a functional scope so unlike the for loop it will not be global outside of the function
    console.log(i) //prints 0
}
fct() //do not forget to call the function (pay attention in exam)
console.log(i) //error sine i is local to the function

//same for let i;

//#################
//    constant
//#################

//in "let" we can re initialize! but constant we can not re initialize.

//all the variables are constant until proven otherwise
//implement "const" always until proven othereise
//arrays and objects are always constant (constant as in the reference to the array or object is constant, we can still change or add values inside)

//const cannot be re-declared and re-assigned, we can not do:
//              const x = 0         const x = 0
//              x = 5               const x = 10

//const cannot be declared after its use
//also respects block scope

const numbers = [0,4,5]
numbers[1] = 2 //this works
numbers.push(10) //this also works
//numbers = [0,1,2] //this does NOT work because arrays are constant and this changes the reference to the numbers array, we can change the values in the array BUT not the array itself

//Objects

const human = {fname:"Fred", lname: "Abi Chahine", age:"22"}
human.age = 16 //this works
human.major = "BIF" //this works, adds key major with value BIF
//but we can not put human = something...

//functions are declared as constants

//we have different ways of writing a function

//1
let hello = function(){
    return "Hi there!"
}

//2
hello = () => "Hi there!" //this is an arrow function
hello = () => {return "Hi there!"} //if the function only has a return statement we can remove the return and only type what we need to return (like above)

let a = sum(4)
sum = (a,b) => a+b //here we put parenthesis () around a,b since we have more than one parameter
sum = a => a+4 //here we only have one parameter so we can omit the parenthesis
