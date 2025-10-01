// console.log("welcome to tutedude");


// function Logger(){
//     console.log("Hello ji mitron!!");
//     console.log("Aaj mossam is very good");
// }


// Logger()//call//invoke//run
// Logger()
// Logger()



//Function declarations //function definations


// Function signature -> parameter

// let electricity=true// global

// function Juicer(apples, oranges){
//     //Parameters are local variables
//     let juice = `Juice with ${apples} apples and ${oranges} oranges`

//     return juice
    
// }


// const glass=Juicer(3,4)

// console.log(glass);


// Bowler Bowling -> speed
// over 1 2 3 4 5 6


// Multiple ways of functions to be written in js

// Function expression , arrow function

// Hoisting

// Ques -> cal your age

// function calAge(birthYear){
//     const age=2025 - birthYear
//     return age
// }

// const output=calAge(2000)

// console.log(output);


// anonymus -> identity

// const CalAge=function(birthYear){
//     const age=2025 - birthYear
//     return age
// }


// console.log(CalAge);

// let output=CalAge(2001)
// console.log(output);


// Juicer(2,2)

// const Juicer=function (apples, oranges){
//     //Parameters are local variables
//     let juice = `Juice with ${apples} apples and ${oranges} oranges`
//     console.log(juice);
//     return juice
    
// }


// normal fns , fn expressions , Arrow fns => value


// const CalAge=function(birthYear){
//     const age=2025 - birthYear
//     return age
// }
// calAge(2001)

// ()=>{} //logic single line

// const calAge = () => 0;

// console.log(calAge());


// const calAge = birthYear => 2025 - birthYear;

// console.log(calAge(2000));


// const Retirement = birthYear => {
//     const age = 2025 - birthYear
//     let retire_duration = 50 - age

//     return retire_duration
// }

// console.log(Retirement(2001));


// Fns -> multiple parameters ?

// const Retirement = (birthYear,firstName) => {
//     const age = 2025 - birthYear
//     let retire_duration = 50 - age

//     return `${firstName} retires in ${retire_duration} years`
// }

// console.log(Retirement(2001,"Pankaj"));


// How do default parameters works in js


// function greeting (name , message="Namaste"){
//     console.log(`${message} ${name}`);
// }

// greeting("Khushi")

// greeting("Rajat","Hello")


// Rest Parameters / multiple parameters
// function sayHello(message,...names){
//     names.forEach(person => console.log(`${message} ${person}`))
// }


// sayHello("Hello","Pankaj","Bhavuk","Khushi","Rajat")


// const CutPieces=function(fruit){
//     return fruit * 4;
// }

// const Juicer=function (apples, oranges){
//     let applePieces = CutPieces(apples)
//     let OrangePieces = CutPieces(oranges)

//     let juice = `Juice with ${applePieces} apples and ${OrangePieces} oranges`

//     return juice
    
// }


// let glass=Juicer(4,5)

// console.log(glass);



// UserLogin
// function loginUser(UserName , redirect){
//     console.log(`User ${UserName} logged in`);
//     redirect()
// }

// function redirect(){
//     console.log("Redirecting to Dashboard....");
// }

// loginUser("Pankaj",redirect)


// HigherOrder Functions -> String Manipulator

// function stringManipulator(str,func){
//     console.log(func);
//     return func(str)
// }


// function reverseString(s){
//     let reversed = ""
//     for(let i = s.length-1 ; i>=0 ; i--){
//         reversed = reversed + s[i]
//     }
//     return reversed
// }

// function CalVowels(s){ H/W

// }

// let finalOutput=stringManipulator("hello",reverseString)

// console.log(finalOutput);


// let a=10
// let b=20

// function parentFunc()
// {
//     let name = "Pankaj"
//     function childFunc(){
//         console.log(`${name} is ${a+b} years old`);
//     }
//     childFunc()
// }

// parentFunc()



// function parentFunc(){
//     let c = 30
// }
// console.log(c);


function A(){
    var x=5

    function B(){
        console.log(x);
    }
    
    return B
}

let C=A()

C()

































// Juicer(2,2)  Hoisting


// function Juicer(apples, oranges){
//     //Parameters are local variables
//     let juice = `Juice with ${apples} apples and ${oranges} oranges`
//     console.log(juice);
//     return juice
    
// }






