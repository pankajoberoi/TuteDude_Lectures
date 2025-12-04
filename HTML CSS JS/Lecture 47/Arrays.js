console.log("Good Morning!!!!");


// Class 
// Students

// let st1="Pankaj"
// let st2="Rahul"
// let st3="Ram"
// let st4="Shaam"



// let Students=["Pankaj","Rajat","Bhavuk","Yash","Aakash"]

// console.log(Students[4]);

// console.log(Students);


// for(let i=0;i<Students.length;i++){
//     console.log(Students[i]);
// }

// let Skills={
//     frontEnd:"React",
//     backEnd:"Express",
//     Database:"MongoDB"
// }

// const greet = ()=>{
//     console.log("Hello ji");
// }

// let EmployeeInfo=["Pankaj",true,20000.00,321,Skills,greet]

// console.log(EmployeeInfo[5]());



// Array can be created using array constructor

// default , paramterized

// let arr = new Array("Pankaj","Bhavuk","Yash")
// console.log(arr);


// let arr1=["Pankaj","Bhavuk","Yash"]

// console.log(typeof(arr));
// console.log(typeof(arr1));




// const arr=["Pankaj","Bhavuk","Yash"]


// Array mutable?
//Array const


// arr[0]="Rahul"


// console.log(arr);


// const arr=["Akkash","Yash"]


// 1.Shopping cart System

// let cart=["Milk","Bread","Eggs"]

// //Add
// cart.push("Butter")
// console.log(cart);

// cart.unshift("Juice")
// console.log(cart);


// //index? -> true -> remove

// let index=cart.indexOf("Eggs")
// console.log(index);

// if(index !== -1){
//     let deletedItems=cart.splice(index,2)//remove 1 element from arr
//     console.log(deletedItems);
// }

// console.log(cart);



// 2.Student Marks Analysis
                               
let marks=[45,67,89,32,76,99,54]


//Marks greater than 60
// 67 89 76 99
// let above60=marks.filter((item)=> item > 60)

// console.log(above60);


// filter , find -> first occurence of data

// let topper =marks.find((m)=> m > 90)

// console.log(topper);


//Average marks 

// let sum=0
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i]
// }
// console.log(sum);
// let avg=(sum)/(marks.length)

// console.log(avg);


// let totalMarks=marks.reduce((sum,m)=>{
//     sum=sum+m
//     return sum
// },0)


// let avg=(totalMarks)/(marks.length)

// console.log(avg);


// console.log(marks.sort());

// hw -> descending


// 3.Movie Ratings

// let ratings = [4.5, 3.2 ,5.0 ,2.8 ,4.7]

// //check if a movie have 5

// console.log("Has 5.0 : ",ratings.includes(5.0));


// //find index of first rating which is below 3

// let lowIndex= ratings.findIndex((r) => r < 3);

// console.log(lowIndex);


// console.log(ratings.reverse());



// Word Transformation

let words = ["hello","JI","Good","Morning"]

//convert all words into UpperCase

let upperCaseArray=words.map((w)=>w.toUpperCase())

console.log(words);

console.log(upperCaseArray);






