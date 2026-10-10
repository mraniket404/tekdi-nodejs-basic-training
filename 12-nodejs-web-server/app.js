
const http = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // 1. Homepage
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to Aniket's Node.js Web Server!");
    }

    // 2. About route
    else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("This is the About Page.");
    }

    // 3. Contact route
    else if (req.url === "/contact" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Contact: aniket@example.com");
    }

    // 4. Student information in JSON
    else if (req.url === "/student" && req.method === "GET") {
        const student = {
            name: "Aniket",
            course: "B.Tech CSE",
            subject: "Node.js Web Server",
            status: "Learning"
        };

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(student));
    }

    // 5. Check server status
    else if (req.url === "/health" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            success: true,
            message: "Server is running!"
        }));
    }

    // 6. Handle unsupported HTTP methods
    else if (req.method !== "GET") {
        res.writeHead(405, {
            "Content-Type": "text/plain"
        });

        res.end("405 - Method Not Allowed");
    }

    // 7. Handle unknown routes
    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }
});

// Start server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log("Press Ctrl + C to stop the server.");
});

// Handle server errors
server.on("error", (error) => {
    console.error("Server error:", error.message);
});
