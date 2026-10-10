
const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

console.log("===== 1. BASIC EVENT =====");

myEmitter.on("welcome", () => {
    console.log("Welcome Aniket! Node.js Events Started.");
});

myEmitter.emit("welcome");


console.log("\n===== 2. PASSING ARGUMENTS =====");

myEmitter.on("studentRegistered", (name, course) => {
    console.log("Student Registration Successful!");
    console.log("Student Name:", name);
    console.log("Course:", course);
});

myEmitter.emit("studentRegistered", "Aniket", "B.Tech CSE");


console.log("\n===== 3. ON METHOD =====");

myEmitter.on("normalEvent", () => {
    console.log("Normal event executed.");
});

myEmitter.emit("normalEvent");
myEmitter.emit("normalEvent");


console.log("\n===== 4. ONCE METHOD =====");

myEmitter.once("singleEvent", () => {
    console.log("This event executes only once.");
});

myEmitter.emit("singleEvent");
myEmitter.emit("singleEvent");


console.log("\n===== 5. ERROR HANDLING =====");

myEmitter.on("error", (err) => {
    console.log("Error handled:", err.message);
});

myEmitter.emit("error", new Error("Something went wrong"));


console.log("\n===== 6. REMOVE LISTENER =====");

function greet() {
    console.log("Hello Aniket!");
}

myEmitter.on("greet", greet);

myEmitter.emit("greet");

myEmitter.off("greet", greet);

myEmitter.emit("greet");

console.log(
    "Remaining greet listeners:",
    myEmitter.listenerCount("greet")
);


console.log("\n===== 7. EVENT NAMES =====");

console.log("Registered event names:", myEmitter.eventNames());


console.log("\n===== ALL PRACTICALS COMPLETED =====");
