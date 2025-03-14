const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allows frontend requests
app.use(express.json()); // Parses JSON requests

// Sample Resume Data
const resumeData = {
    education: [
        { school: "Tropical College", degree: "Computer Programming", year: "2024-2025" },
        { school: "Spring College", degree: "Management Information Systems", year: "2021-2023" }
    ],
    experience: [
        { company: "Foteza Company", role: "Frontend Developer", startDate: "2024", endDate: "2025", responsibilities: ["Developed UI", "Managed state"] }
        
    ],
    overview: `
        Hi, I'm Daneilo! I'm a dedicated full-stack developer with expertise in React, Node.js, and modern web technologies.
        Over the past 2 years, I've developed responsive web applications, optimized performance, and built scalable APIs.

        🔹 Frontend: React, JavaScript, TypeScript, HTML, CSS, Bootstrap  
        🔹 Backend: Node.js, Express, SQL, MongoDB  
        🔹 Tools & Workflow: Git, GitHub, Agile Development, REST APIs  
        🔹 Soft Skills: Problem-solving, teamwork, adaptability  

        My goal is to continuously learn and grow in the software development field while contributing to impactful projects.
        I'm always excited to collaborate on innovative solutions and new technologies. Let's build something amazing together!
    `
};


// API Endpoints
app.get("/getEdu", (req, res) => res.json(resumeData.education));
app.get("/getExp", (req, res) => res.json(resumeData.experience));
app.get("/getOverview", (req, res) => {
    res.json({ overview: resumeData.overview.split("\n").map(line => line.trim()).filter(line => line.length > 0) });
});


// Default Route for Home Page
app.get("/", (req, res) => {
    res.send("Welcome to the Portfolio API! Use /getEdu, /getExp, or /getOverview to access data.");
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
