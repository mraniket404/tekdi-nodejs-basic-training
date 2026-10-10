
const fs = require("node:fs");

console.log("===== 1. SYNCHRONOUS VS ASYNCHRONOUS =====");

console.log("1. First statement");

setTimeout(() => {
    console.log("3. Executed after 1 second");
}, 1000);

console.log("2. Last synchronous statement");


console.log("\n===== 2. CALLBACK =====");

function greetStudent(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greetStudent("Aniket", () => {
    console.log("Welcome to Node.js training!");
});


console.log("\n===== 3. ASYNCHRONOUS FILE READING =====");

fs.readFile("student.txt", "utf8", (error, data) => {
    if (error) {
        console.error("File reading error:", error.message);
        return;
    }

    console.log("File content:");
    console.log(data);
});

console.log("File reading requested...");


console.log("\n===== 4. PROMISE =====");

const studentPromise = new Promise((resolve, reject) => {
    const marks = 85;

    if (marks >= 40) {
        resolve("Student passed!");
    } else {
        reject(new Error("Student failed!"));
    }
});

studentPromise
    .then((result) => {
        console.log("Promise success:", result);
    })
    .catch((error) => {
        console.log("Promise error:", error.message);
    })
    .finally(() => {
        console.log("Promise completed.");
    });


console.log("\n===== 5. ASYNC AND AWAIT =====");

function getStudent() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Sakshi",
                course: "Node.js",
                status: "Learning"
            });
        }, 1000);
    });
}

async function displayStudent() {
    try {
        console.log("Fetching student details...");

        const student = await getStudent();

        console.log("Student details:", student);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

displayStudent();


console.log("\n===== 6. SETTIMEOUT =====");

setTimeout(() => {
    console.log("setTimeout executed");
}, 500);


console.log("\n===== 7. SETIMMEDIATE =====");

setImmediate(() => {
    console.log("setImmediate executed");
});


console.log("\n===== 8. PROMISE WITH ASYNC FUNCTION =====");

async function calculateMarks() {
    const marks = await Promise.resolve(90);

    console.log("Marks:", marks);
}

calculateMarks();


console.log("\n===== 9. PROMISE ALL =====");

const task1 = Promise.resolve("Task 1 completed");
const task2 = Promise.resolve("Task 2 completed");
const task3 = Promise.resolve("Task 3 completed");

Promise.all([task1, task2, task3])
    .then((results) => {
        console.log("All results:", results);
    })
    .catch((error) => {
        console.error("A task failed:", error.message);
    });


console.log("\n===== 10. ASYNCHRONOUS PROGRAMMING PRACTICAL STARTED =====");
