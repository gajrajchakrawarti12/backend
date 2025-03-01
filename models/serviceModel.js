const { getDB } = require("../config/db");

const addService = async (service) => {
    const db = getDB();
    return await db.collection("services").insertOne(service);
};

const getAllServices = async () => {
    const db = getDB();
    return await db.collection("services").find().toArray();
};

module.exports = { addService, getAllServices };
