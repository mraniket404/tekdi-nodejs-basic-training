
const storage = require("node-persist");

async function main() {
    try {
        // 1. Initialize storage
        await storage.init({
            dir: "./my-storage"
        });

        console.log("===== 1. STORAGE INITIALIZED =====");
        console.log("Storage is ready!");

        // 2. Save string data
        console.log("\n===== 2. SAVE DATA =====");

        await storage.setItem("studentName", "Aniket");
        await storage.setItem("course", "Node.js");

        console.log("Student name and course saved.");

        // 3. Read data
        console.log("\n===== 3. GET DATA =====");

        const name = await storage.getItem("studentName");
        const course = await storage.getItem("course");

        console.log("Student:", name);
        console.log("Course:", course);

        // 4. Save an object
        console.log("\n===== 4. SAVE OBJECT =====");

        const student = {
            name: "Aniket",
            age: 21,
            course: "B.Tech CSE",
            skills: ["JavaScript", "Node.js"]
        };

        await storage.setItem("student", student);

        const savedStudent = await storage.getItem("student");

        console.log("Student details:", savedStudent);

        // 5. Update existing data
        console.log("\n===== 5. UPDATE DATA =====");

        await storage.setItem("course", "Advanced Node.js");

        console.log(
            "Updated course:",
            await storage.getItem("course")
        );

        // 6. Check whether a key exists
        console.log("\n===== 6. CHECK STORED KEYS =====");

        const keys = await storage.keys();

        console.log("All keys:", keys);
        console.log("Total keys:", await storage.length());

        // 7. Get all values
        console.log("\n===== 7. GET ALL VALUES =====");

        const values = await storage.values();

        console.log("All stored values:", values);

        // 8. Remove one item
        console.log("\n===== 8. REMOVE DATA =====");

        await storage.setItem("temporaryData", "Delete me");
        await storage.removeItem("temporaryData");

        console.log(
            "Temporary data after removal:",
            await storage.getItem("temporaryData")
        );

        // 9. Time-to-live (TTL) example
        console.log("\n===== 9. TEMPORARY DATA =====");

        await storage.setItem(
            "temporaryMessage",
            "This message expires in 10 seconds",
            { ttl: 10000 }
        );

        console.log(
            "Temporary message:",
            await storage.getItem("temporaryMessage")
        );

        console.log("\n===== PRACTICAL COMPLETED =====");
    } catch (error) {
        console.error("Storage error:", error.message);
    }
}

main();
