
const fs = require("node:fs");
const fsPromises = require("node:fs/promises");
const { EventEmitter } = require("node:events");

console.log("===== 1. ERROR OBJECT =====");

const sampleError = new TypeError("Invalid data type");

console.log("Error name:", sampleError.name);
console.log("Error message:", sampleError.message);
console.log("Error stack available:", Boolean(sampleError.stack));


console.log("\n===== 2. TRY AND CATCH =====");

try {
    const data = JSON.parse("This is not valid JSON");
    console.log(data);
} catch (error) {
    console.log("JSON parsing failed:", error.message);
}

console.log("Program continues after handling the error.");


console.log("\n===== 3. THROW AN ERROR =====");

function square(number) {
    if (typeof number !== "number") {
        throw new TypeError(
            `Expected a number, received ${typeof number}`
        );
    }

    return number * number;
}

try {
    console.log("Square of 5:", square(5));
    console.log("Square of string:", square("8"));
} catch (error) {
    console.log("Square error:", error.message);
}


console.log("\n===== 4. ERROR-FIRST CALLBACK =====");

fs.readFile("student.txt", "utf8", (error, data) => {
    if (error) {
        console.error("File reading failed:", error.message);
        return;
    }

    console.log("File content:");
    console.log(data);
});

console.log("File reading operation started.");


console.log("\n===== 5. CALLBACK WITH CUSTOM FUNCTION =====");

function calculateSquare(number, callback) {
    setTimeout(() => {
        if (typeof number !== "number") {
            callback(
                new TypeError(
                    `Expected number, received ${typeof number}`
                )
            );
            return;
        }

        callback(null, number * number);
    }, 100);
}

calculateSquare(6, (error, result) => {
    if (error) {
        console.error("Calculation error:", error.message);
        return;
    }

    console.log("Square result:", result);
});

calculateSquare("6", (error, result) => {
    if (error) {
        console.error("Invalid calculation:", error.message);
        return;
    }

    console.log("Result:", result);
});


console.log("\n===== 6. PROMISE ERROR HANDLING =====");

function getStudentMarks(marks) {
    return new Promise((resolve, reject) => {
        if (typeof marks !== "number") {
            reject(new TypeError("Marks must be a number"));
            return;
        }

        if (marks < 0 || marks > 100) {
            reject(new RangeError("Marks must be between 0 and 100"));
            return;
        }

        resolve(marks);
    });
}

getStudentMarks(85)
    .then((marks) => {
        console.log("Valid marks:", marks);
    })
    .catch((error) => {
        console.error("Promise error:", error.message);
    });

getStudentMarks(150)
    .then((marks) => {
        console.log("Marks:", marks);
    })
    .catch((error) => {
        console.error("Invalid marks:", error.message);
    });


console.log("\n===== 7. ASYNC/AWAIT WITH TRY/CATCH =====");

async function readStudentFile() {
    try {
        const data = await fsPromises.readFile(
            "student.txt",
            "utf8"
        );

        console.log("Async/Await file content:");
        console.log(data);
    } catch (error) {
        console.error("Async file error:", error.message);
    }
}

readStudentFile();


console.log("\n===== 8. EVENT EMITTER ERROR =====");

const emitter = new EventEmitter();

emitter.on("success", (message) => {
    console.log("Success event:", message);
});

emitter.on("error", (error) => {
    console.error("Error event handled:", error.message);
});

emitter.emit("success", "Operation completed successfully");

emitter.emit("error", new Error("Something went wrong"));


console.log("\n===== 9. CUSTOM ERROR CLASS =====");

class ApplicationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ValidationError extends ApplicationError {
    constructor(message, invalidValue) {
        super(message);
        this.invalidValue = invalidValue;
    }
}

function validateStudentName(name) {
    if (typeof name !== "string" || name.trim() === "") {
        throw new ValidationError(
            "Student name cannot be empty",
            name
        );
    }

    return name;
}

try {
    console.log("Valid name:", validateStudentName("Aniket"));
    console.log("Invalid name:", validateStudentName(""));
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation error:", error.message);
        console.error("Invalid value:", error.invalidValue);
    } else {
        console.error("Unexpected error:", error.message);
    }
}


console.log("\n===== 10. OPERATIONAL ERROR EXAMPLE =====");

fs.readFile("missing-file.txt", "utf8", (error, data) => {
    if (error) {
        console.error(
            "Expected file error handled:",
            error.code
        );
        return;
    }

    console.log(data);
});


console.log("\n===== ERROR HANDLING PRACTICAL STARTED =====");
