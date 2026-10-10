
const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// Morgan logs HTTP requests
app.use(morgan("dev"));

// Home route
app.get("/", (req, res) => {
    res.send("Hello Aniket! NPM Practical is Working 🚀");
});

// Student route
app.get("/students", (req, res) => {
    const students = [
        { id: 1, name: "Aniket", course: "B.Tech CSE" },
        { id: 2, name: "Sakshi", course: "B.Tech CSE" },
        { id: 3, name: "Akshay", course: "B.Tech CSE" }
    ];

    res.json(students);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
