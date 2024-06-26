const mongoose = require("mongoose");

// Define the Login schema
const LoginSchema = new mongoose.Schema({
    gmail: String,
    password: String
});

// Create and export the Login model
const model = mongoose.model('Login', LoginSchema);

model.create({
    "email":"xyz@gmail.com",
    "password":"abc"
})

module.exports = model;