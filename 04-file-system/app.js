const fs = require("node:fs");

const fileName = "student.txt";

// 1. Create and write file
fs.writeFileSync(
    fileName,
    "Student Name: Aniket\nCourse: B.Tech CSE\nTraining: Node.js"
);

console.log("1. File created and data written successfully!");

// 2. Read file
const data = fs.readFileSync(fileName, "utf8");

console.log("\n2. File Content:");
console.log(data);

// 3. Update file
fs.appendFileSync(
    fileName,
    "\nStatus: Learning Node.js"
);

console.log("\n3. Data updated successfully!");

// Read updated file
const updatedData = fs.readFileSync(fileName, "utf8");

console.log("\nUpdated File Content:");
console.log(updatedData);