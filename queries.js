"use strict";

const connectDB = require("./db");
const { ObjectID } = require("mongodb");
const errorHandler = require("./errorHandler");

module.exports = {
  getCourses: async () => {
    let db,
      courses = [];
    try {
      db = await connectDB();
      courses = await db
        .collection("courses")
        .find()
        .toArray();
    } catch (error) {
      errorHandler(error);
    }
    return courses;
  },
  getCourse: async (root, { _id }) => {
    let db, course;
    try {
      db = await connectDB();
      course = await db.collection("courses").findOne({ _id: ObjectID(_id) });
    } catch (error) {
      errorHandler(error);
    }
    return course;
  },
  getPeople: async () => {
    let db,
      students = [];
    let studentsPopulate = [];
    let AppModel = {
      uno: "algo",
      dos: "algo dos"
    };
    try {
      db = await connectDB();
      students = await db
        .collection("students")
        .find()
        .toArray();
    } catch (error) {
      errorHandler(error);
    }
    return students;
  },
  getPerson: async (root, { _id }) => {
    let db, student;
    try {
      db = await connectDB();
      student = await db.collection("students").findOne({ _id: ObjectID(_id) });
    } catch (error) {
      errorHandler(error);
    }
    return student;
  },
  searchItems: async (root, { keyword }) => {
    let db, items, courses, people;
    try {
      db = await connectDB();
      courses = await db
        .collection("courses")
        .find({ $text: { $search: keyword } })
        .toArray();
      people = await db
        .collection("students")
        .find({ $text: { $search: keyword } })
        .toArray();
      items = [...courses, ...people];
    } catch (error) {
      errorHandler(error);
    }
    return items;
  }
};
