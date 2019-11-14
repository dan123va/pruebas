"use strict";
const { MongoClient } = require("mongodb");

const {} = process.env;
const mongoUrl = "mongodb://localhost:27017/nuevaBase";
let connection;
async function connectDB() {
  if (connection) return connection;

  let client;

  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true
    });
    connection = client.db("");
  } catch (error) {
    console.error("Could not connect to db", mongoUrl, error);
    process.exit(1);
  }
  return connection;
}

module.exports = connectDB;
