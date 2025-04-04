const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());

// Routes
const recipeRouter = require('./routers/recipes_router');
app.use('/recipe', recipeRouter);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'recipe_db' 
  }).then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Recipe Server is running!');
  });
  