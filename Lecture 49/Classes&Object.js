console.log("Hello Mitron!!");

// let Cartoon = {
//   name1: "Shinchan",
//   channel: "Hungama",
//   family: 4,
//   genre: function () {
//     console.log("funny");
//   },
// };

// console.log(Cartoon);

// console.log(typeof Cartoon);

// let arr = ["Rajat", "Aakash", "Bhavuk"];

// console.log(typeof arr);

// console.log(arr);

// UserDefined Prototypes

// const Developer = {
//   skill: function () {
//     console.log("Can do programing!");
//   },
// };

// const Pankaj = {
//   Salary: 100000,
// };

// Pankaj.__proto__ = Developer;

// console.log(Pankaj);

// console.log(Pankaj.skill());

//data member are by default public
//access specifiers -> private
//Bank application -> password
// class Player {
//   health;
//   level;
//   #Dresscode = "Batman";

//   fight() {
//     console.log("Player can fight");
//   }

//   run() {
//     console.log("Playercan run");
//   }
// }

// let shinchan = new Player(); //reference of your player class

// let doremon = new Player(); //reference of your player class

// console.log(shinchan.fight());

// console.log(shinchan.run());

// shinchan.level = 3;
// shinchan.health = 100;

// console.log(shinchan.level);

// console.log(doremon.level);

// console.log(shinchan);

// Initialze
// class HDFC {
//   name = "User";
//   balance;
//   constructor(name) {
//     this.balance = 0;
//     console.log("You are a new customer");
//     this.name = name;
//     console.log(`Welcome ${this.name}`);
//   }

//   debit() {
//     console.log("You can debit your money");
//   }

//   credit(balance) {
//     this.balance += balance;
//     console.log("Money Credited");
//   }

//   showbalance() {
//     console.log("Your current balance is : " + this.balance);
//   }
// }

// let Ram = new HDFC();
// let Sham = new HDFC();
// let Ghansham = new HDFC();

// Ram.showbalance();

// Ram.credit(100);

// Ram.showbalance();

// let user1 = new HDFC(); //default

// let user2 = new HDFC("Pankaj"); //paramterized

// class BankAccount {
//   accNo;
//   Name;
//   Balance;

//   constructor(accNo, Name, Balance) {
//     this.accNo = accNo;
//     this.Name = Name;
//     this.Balance = Balance;
//   }

//   deposit(amount) {
//     this.Balance += amount;
//     console.log(`${this.Name} deposited ${amount}. `);
//   }

//   withdraw(amount) {
//     if (amount > this.Balance) {
//       console.log(`Insufficient funds for ${this.Name}`);
//     } else {
//       this.Balance -= amount;
//       console.log(`${this.Name} withdraw ${amount}`);
//     }
//   }

//   checkBalance() {
//     console.log(`${this.Name}'s Balance : ${this.Balance}`);
//   }
// }

// let user1 = new BankAccount(101, "Pankaj", 20000);

// let user2 = new BankAccount(102, "Rajat", 10000);

// user1.checkBalance();
// user2.checkBalance();

// user1.deposit(2000);
// user1.checkBalance();

// user1.withdraw(21000);
// user1.checkBalance();

// class Employee {
//   name;
//   #salary;

//   constructor(name, salary) {
//     this.name = name;
//     this._salary = salary;
//   }

//   set salary(amount) {
//     if (amount > 0) {
//       this._salary = amount;
//     }
//   }

//   get salary() {
//     return this._salary;
//   }
// }

// let emp = new Employee("Pankaj", 5000);

// console.log(emp.name);
// console.log(emp.salary);

// emp.salary = 6000;
// console.log("Through getter " + emp.salary);

// class Vehicle {
//   brand;
//   model;
//   year;

//   constructor(brand, model, year) {
//     console.log("into Parent constructor");
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     console.log("Exit Parent");
//   }

//   displayInfo() {
//     console.log(`Details of your vehicle
//                   ${this.brand},${this.model},${this.year}`);
//   }
// }

// class Car extends Vehicle {
//   fueltype;
//   constructor(fueltype, brand, model, year) {
//     console.log("Into child constructor");
//     super(brand, model, year);
//     this.fueltype = fueltype;
//     console.log("Exit child");
//   }

//   getFuelType() {
//     return this.fueltype;
//   }

//   drive() {
//     super.displayInfo();
//     console.log("We drive this car");
//   }
// }

// let scorpio = new Car();

// scorpio.brand = "Mahindra";
// console.log(scorpio.brand);

// scorpio.drive();

// let brezza = new Car("Petrol");

// let swift = new Car("Petrol", "Maruti", "Top Variant", 2025);

// swift.displayInfo();

// swift.drive();

// console.log(brezza.getFuelType());

// question -> Student Report Card

// 1. class student 2. name , marks[] 3.getaverage() 4.compareStudents -> name? marks?

// class Student {
//   name;
//   marks;
//   constructor(name, marks) {
//     this.name = name;
//     this.marks = marks;
//   }

//   getAverage() {
//     let sum = this.marks.reduce((a, b) => a + b, 0);
//     let Avg = sum / this.marks.length;

//     console.log(`${this.name} have ${Avg} Average`);
//     return Avg;
//   }

//   static compareStudents(s1, s2) {
//     return s1.getAverage() > s2.getAverage() ? s1.name : s2.name;
//   }
// }

// let St1 = new Student("Pankaj", [90, 80, 90]);

// let St2 = new Student("Khushi", [70, 80, 90]);

// // St1.getAverage(); //HW .2

// console.log("Higher Average : ", Student.compareStudents(St1, St2));

// Question -> online Course Managment

// 1.Class course 2. title ,student[] 3. addStudent , UpdateProgress() , showReport()

// Learning hours

class Course {
  title;
  students;

  constructor(title) {
    this.title = title;
    this.students = [];
  }

  addStudent(name) {
    this.students.push({ name, progress: 0 });
    console.log(`${name} enrolled in ${this.title} course`);
  }

  updateProgress(name, progress) {
    let student = this.students.find((s) => s.name === name);

    if (student) {
      student.progress = progress;
      console.log(`${name}'s progress updated to ${progress}%`);
    }
  }

  showReport() {
    console.log(`\nCourse: ${this.title}`);
    this.students.forEach((s) => {
      console.log(`${s.name} - Progress : ${s.progress}`);
    });
  }
}

let WebDev = new Course("Mern 0 to Advance");

WebDev.addStudent("Pankaj");
WebDev.addStudent("Aakash");
WebDev.addStudent("Rajat");

WebDev.updateProgress("Pankaj", 80);
WebDev.updateProgress("Aakash", 60);
WebDev.updateProgress("Rajat", 100);

WebDev.showReport();
