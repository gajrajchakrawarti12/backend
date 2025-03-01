const { getDB } = require("../config/db");

const createUser = async (user) => {
    const db = getDB();
    console.log(db);
    
    return await db.collection("users").insertOne(user);
};

const findUserByEmail = async (email) => {
    const db = getDB();
    return await db.collection("users").findOne({ email });
};

module.exports = { createUser, findUserByEmail };
