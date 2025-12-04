

console.log("Hello Mitron");

// let person={
//     firstName:"Pankaj",
//     lastName:"Oberoi",
//     Job:"Software Eng",
//     age:25,
//     JobStatus : true,
//     Salary:20000+2000
// }

// console.log(person);

// console.log(person.firstName);

// console.log(person.Salary);

// let Employee1={
//     jobId:123,
//     attendace:true,
//     Salary:100000
// }

// console.log(Employee1);


// let Employee2=Employee1


// objects => mutable ? immutable
// let Employee1={
//     firstName:'Pankaj',
//     lastName:'Oberoi',
//     jobId:123,
//     attendace:true,
//     Salary:100000
// }
// mutable
// Employee1.jobId=321

// console.log(Employee1);


// Dot operator vs bracket operator


// console.log(Employee1['Salary']);

// const nameKey = 'Name'

// console.log(Employee1['last' + nameKey]);


// const info=prompt("Enter the Info you want")

// console.log(Employee1[info]); 


// Employee1.location="Pune"


// console.log(Employee1);


// Employee1['Email']="abc@gmail.com"

// console.log(Employee1);


//User Profile

// let user={
//     name:"Choota bheem",
//     age:15,
//     city:"Dholakpur",
//     profession:"GundaGardi"
// }

// console.log("Keys : ",Object.keys(user));
// console.log("Values : ",Object.values(user));


// console.log("Has age : ",user.hasOwnProperty("LastName"));

// user.email="asd@gmail.com"

// console.log(user);


// delete user.email;

// console.log(user);



// Merging of Objects

// let obj1={a:1,b:2}

// let obj2={c:3,d:4}

// let mergedObj=Object.assign({},obj1,obj2)

// console.log(mergedObj);


// spread operator / 

// let obj3={...obj1,...obj2}

// console.log(obj3);


// Object Freeze

// let settings={
//     theme:"dark",
//     Notifications:true
// }

// logic 4-> click karne baad DOM

// Object.freeze(settings)


// settings.theme="light"

// console.log(settings);




// let settings={
//     theme:"dark",
//     Notifications:true,
//     wallpaper:function(){
//         console.log("Using this you can change your wallpaper");
//     }
// }


// console.log(settings.wallpaper());


let user={
    name:"Choota bheem",
    age:15,
    city:"Dholakpur",
    profession:"GundaGardi"
}

function printInfo(user){
    console.log(user);
}



printInfo(user)

