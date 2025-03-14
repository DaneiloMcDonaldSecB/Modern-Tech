import express from "express";
import cors from "cors";
import portfolioRoutes from "./routes/portfolioRoutes.js";

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", portfolioRoutes);

// Default Route to Prevent "Cannot GET /"
app.get("/", (req, res) => {
  res.send("Server is running! Navigate to /getEdu, /getExp, or /getOverview");
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
