const express = require("express");
const { addService, getAllServices } = require("../models/serviceModel");

const router = express.Router();

// Add a new service
async function insertService(req, res) {
    try {
        const { title, description, icon } = req.body;
        console.log(title, description, icon);
        
        if (!title || !description || !icon) {
            return res.status(400).json({ message: "All fields are required" });
        }

        await addService({ title, description, icon, createdAt: new Date() });
        res.status(201).json({ message: "Service added successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all services
async function findServices(req, res) {
    try {
        const services = await getAllServices();
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {insertService, findServices};
