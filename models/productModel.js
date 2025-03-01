const { getDB } = require("../config/db");

const addProduct = async (service) => {
    const db = getDB();
    return await db.collection("product").insertOne(service);
};

const getAllProduct = async () => {
    const db = getDB();
    return await db.collection("product").find().toArray();
};

const getFeaturedProduct = async () => {
    const db = getDB();
    return await db.collection("product").find({featured:true}).toArray();
};

module.exports = { addProduct, getAllProduct, getFeaturedProduct };
