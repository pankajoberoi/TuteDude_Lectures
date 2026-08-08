const fs = require("fs");

const File = "data.txt";

// function createUser(id, name, email) {
//   const user = `${id},${name},${email} \n`;

//   fs.appendFile(File, user, (err) => {
//     if (err) return "404 kuch toh hua hai!";

//     console.log("User Added successfull");
//   });
// }

// createUser(1, "Shampy", "abc@gmail.com");

// createUser(2, "Shampu", "xyz@gmail.com");

// createUser(5, "Khushi", "qwe@gmail.com");
// =============================================================================

// function getUsers() {
//   fs.readFile(File, "utf-8", (err, data) => {
//     if (err) return "Pta nhi bhai chla nii!";

//     const users = data.split("\n").filter(Boolean);truthy / falsy

//     const results = users.map((pankaj) => {
//       const [id, name, email] = pankaj.split(",");
//       return { id, name, email };
//     });

//     console.log(results);
//   });
// }

// getUsers();
// =========================================================================

// function updateUser(targetId, newName, newEmail) {
//   fs.readFile(File, "utf-8", (err, data) => {
//     if (err) return "Bhai kuch toh dikat hai!!";

//     const users = data.split("\n").filter(Boolean);

//     const result = users.map((pankaj) => {
//       const [id, name, email] = pankaj.split(",");

//       if (id == targetId) {
//         return `${id},${newName},${newEmail}`;
//       }
//       return pankaj;
//     });

//     fs.writeFile(File, result.join("\n"), (err) => {
//       if (err) return "Bhai baat nhi bani!!";

//       console.log("User updated!");
//       console.log(result);
//     });
//   });
// }

// updateUser(2, "Shampu kumar", "Loreal@gmail.com");

// ====================================================================================

// function deleteUser(targetId) {
//   fs.readFile(File, "utf-8", (err, data) => {
//     if (err) return "Bhai kuch toh dikat hai!!";

//     let users = data.split("\n").filter(Boolean);

//     users = users.filter((user) => {
//       const [id] = user.split(",");

//       return id != targetId;
//     });

//     fs.writeFile(File, users.join("\n"), (err) => {
//       if (err) return "babu bhaiya kuch dikat hai";

//       console.log("User deleted");
//     });
//   });
// }

// deleteUser(1);

// =======================================================

// fs.unlink("test.txt", (err) => {
//   if (err) {
//     console.log("error in deleting");
//   }
//   console.log("File deleted");
// });

// ================================================================

fs.copyFile("Order.txt", "data.txt", (err) => {
  if (err) {
    console.log("error in copying");
  }

  console.log("Karli na cheating fir , ho gya sab copy!!!!");
});
