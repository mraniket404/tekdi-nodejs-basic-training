
const fs = require("node:fs");
const { Buffer } = require("node:buffer");
const { Readable, Writable, Transform } = require("node:stream");

console.log("===== 1. BUFFER BASICS =====");

// Create a buffer from text
const buffer = Buffer.from("Hello Aniket!");

console.log("Buffer:", buffer);
console.log("Buffer to String:", buffer.toString());
console.log("Buffer Length:", buffer.length);


console.log("\n===== 2. BUFFER FROM ARRAY =====");

const arrayBuffer = Buffer.from([65, 66, 67, 68]);

console.log("Array Buffer:", arrayBuffer);
console.log("Converted Text:", arrayBuffer.toString());


console.log("\n===== 3. CREATE A TEXT FILE =====");

fs.writeFileSync(
    "student.txt",
    "Aniket is learning Node.js Streams and Buffer.\n" +
    "Streams process data in chunks."
);

console.log("student.txt created successfully!");


console.log("\n===== 4. READ FILE USING STREAM =====");

const readStream = fs.createReadStream("student.txt", {
    encoding: "utf8"
});

readStream.on("data", (chunk) => {
    console.log("Received Chunk:");
    console.log(chunk);
});

readStream.on("end", () => {
    console.log("File reading completed.");
});

readStream.on("error", (err) => {
    console.error("Read Error:", err.message);
});


console.log("\n===== 5. WRITE FILE USING STREAM =====");

const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello Aniket!\n");
writeStream.write("This file was created using a Write Stream.\n");

writeStream.end("Writing completed successfully.\n");

writeStream.on("finish", () => {
    console.log("output.txt written successfully!");
});

writeStream.on("error", (err) => {
    console.error("Write Error:", err.message);
});


console.log("\n===== 6. CUSTOM READABLE STREAM =====");

const readable = Readable.from([
    "Node.js ",
    "Streams ",
    "are useful!"
]);

readable.on("data", (chunk) => {
    console.log("Readable Data:", chunk.toString());
});

readable.on("end", () => {
    console.log("Readable stream ended.");
});


console.log("\n===== 7. CUSTOM WRITABLE STREAM =====");

const writable = new Writable({
    write(chunk, encoding, callback) {
        console.log("Writable received:", chunk.toString());
        callback();
    }
});

writable.write("First message\n");
writable.write("Second message\n");
writable.end("Final message\n");


console.log("\n===== 8. TRANSFORM STREAM =====");

const transform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});

transform.on("data", (chunk) => {
    console.log("Transformed:", chunk.toString());
});

transform.write("hello aniket");
transform.end(" learning node.js");


console.log("\n===== ALL STREAMS AND BUFFER PRACTICALS STARTED =====");
