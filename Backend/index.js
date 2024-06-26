const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // Assuming your model is exported with module.exports
const Login=require("./models/login");
const app = express();

// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Connect to MongoDB Atlas cluster
mongoose.connect("mongodb+srv://Edukate-Database:8Dwx5W2oZyst89Rc@edukate.dpczvin.mongodb.net/?retryWrites=true&w=majority&appName=Edukate")
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// POST endpoint for user login
app.post("/api/v1/login", async (req, res) => {
    const { gmail, password } = req.body;

    try {
        // Check if a user with the given email and password exists
        const existingUser = await Login.findOne({ gmail, password });

        if (existingUser) {
            // User found, respond with success message or user data
            res.status(200).json({ message: "Login successful", user: existingUser });
        } else {
            // User not found, respond with error message
            res.status(404).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        // Error occurred during database operation, respond with error message
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Start the server
const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
