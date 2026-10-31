require("dotenv").config({ path: "src/.env" });

const express = require("express");
const mongoose = require("mongoose");

const restaurantRoutes = require("./src/routes/restaurantRoutes");
const menuRoutes = require("./src/routes/menuRoutes");

const app = express();

app.use(express.json());

// Routes
app.use("/api/restaurants", restaurantRoutes);
app.get("/test", (req, res) => {
    res.send("Server route working");
});
app.use("/api/menu-items", menuRoutes);

// MongoDB Connection
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed:", error.message);
        throw error;
    }
}

// Start Server
async function startServer() {
    try {
        await connectDB();

        app.listen(5001, () => {
            console.log("Server started on port 5001");
        });
    } catch (error) {
        console.log("Server could not start");
    }
}

startServer();