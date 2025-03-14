const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const validationMiddleware = (req, res, next) => {
    const currentTime = new Date().toUTCString();  
    const route = req.originalUrl;  
    const testValidation = req.query.test_validation || "No test_validation provided";

    console.log(`[${currentTime}] Middleware triggered on route: ${route}`);
    console.log(`test_validation: ${testValidation}`);

    next(); 
};

app.get("/", (req, res) => {
    res.send("Welcome to our server");
});

app.get("/route_test", validationMiddleware, (req, res) => {
    res.send("Middleware executed successfully!");
});

app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
