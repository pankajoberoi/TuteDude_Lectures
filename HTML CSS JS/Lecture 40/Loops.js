// console.log("Hello namaskar");


// // for(pankaj=1;pankaj<=5;pankaj++){ range
// //     console.log("Student : ",pankaj);
// // }

// // let i=1 
// // while(i<=3){ jab tab
// //     console.log("Pankaj");//infinite
// //     console.log(i);
// //     i++
// // }


// // for(i=1;i<=10;i++){
// //     if(i%2==0){
// //         console.log(i);
// //     }
// // }

// // let sum=0

// // for(i=5;i>=1;i--){
// //     sum=sum+i
// //     console.log(sum);
// // }


// // for(i=1;i<=5;i++){
// //     if(i==3){
// //         continue;
// //     }
// //     else{
// //         console.log(i ," : copy checked");
// //     }
// // }

// // let num = 121
// // let original = num

// // let reverse = 0

// // while(num!==0){
// //     let digit=num%10
// //     reverse=reverse*10+digit
// //     num=Math.floor(num/10);
// // }

// // if(original == reverse){
// //     console.log("Plaindrome");
// // }
// // else{
// //     console.log("Non Plaindrome");
// // }




// // HW => Palindrome? 471 -> 174     121 -> 121



// // Pattern Bases qu


// // for(let row=1;row<=4;row++){
// //     for(let col=1;col<=row;col++){
// //         console.log("*"," \t");
// //     }
// //     console.log("\n");
// // }

// Print a table

let i=1

// let num = 4

// do{
//     console.log(4 +" x "+ i +" = ",4*i);
//     i++
// }while(i<=10)



// let num = 12

// let isPrime=true

// for(let i=2 ;i<num;i++){
//     if(num % i == 0){
//         isPrime=false
//         break;
//     }
// }

// if(isPrime==true){
//     console.log("Its a prime ");
// }
// else{
//     console.log("Not Prime");
// }


// Ticket Counter simulation


// let TicketAvailable=10

// let person=1;

// while(TicketAvailable > 0){
//     console.log("Person " + person + "bought a ticket");
//     TicketAvailable--
//     person++
// }

// console.log("Tickets Sold out");



// Bank PIN Attempt Limit

// do while


// let correntPIN="1234"
// let attempt=1

// let UserPin;

// do{
//     UserPin=prompt("Enter your PIN")
    

//     if(UserPin == correntPIN){
//         console.log("Welcome to our bank");
//         break;
//     }
//     else{
//         console.log("Wrong PIN : Attemp ",attempt);
//         attempt++
//     }

// }while(attempt <= 3)


// if(UserPin !== correntPIN){
//     console.log("Card blocked for 24 hours");
// }


// Random number guessing game
console.log("User 1 have picked a number from 1 to 100");
let User1="30"
let TotalAttempts=0
let User2;

do{
    User2=prompt("Pick a number for User 2")
    TotalAttempts++
    if(User2>User1){
        console.log("Pick a Smaller number");
    }
    else if (User2<User1){
        console.log("pick a larger number");
    }
    else{
        alert("Hurrraay game over!!!!")
    }

}while(User1!==User2)

console.log("Your TotalAttempts to guess the number are ",TotalAttempts);





