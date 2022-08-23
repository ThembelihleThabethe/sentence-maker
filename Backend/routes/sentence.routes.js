const express = require('express');
const app = express();
const mysql = require("mysql")
const sentenceRoute = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sentence _maker",
});

//connect to database
db.connect((err) => {
    if (err) {
        console.log("[mysql error]", err);
    }
    console.log("Connection done");
});

// Add a sentence
sentenceRoute.route('/sentence').post((req, res) => {
    let sql = "INSERT INTO sentence SET ?";
    db.query(
        sql,req.body, (err, result) => {
                if (err) return next(new AppError(err, 500));
                res.status(201).json({
                    status: "success",
                    message: "sentence created successfully",
                });
        });
});

// Get all sentences
sentenceRoute.route('/sentences').get((req, res) => {
    db.query("SELECT * FROM sentence", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})

// Get all nouns
sentenceRoute.route('/nouns').get((req, res) => {
    db.query("SELECT * FROM nouns", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})

// Get all verbs
sentenceRoute.route('/verbs').get((req, res) => {
    db.query("SELECT * FROM verbs", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})

// Get all adjectives
sentenceRoute.route('/adjectives').get((req, res) => {
    db.query("SELECT * FROM adjectives", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})

// Get all adverbs
sentenceRoute.route('/adverbs').get((req, res) => {
    db.query("SELECT * FROM adverbs", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})

// Get all pronouns
sentenceRoute.route('/pronouns').get((req, res) => {
    db.query("SELECT * FROM pronouns", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})

// Get all prepositions
sentenceRoute.route('/prepositions').get((req, res) => {
    db.query("SELECT * FROM prepositions", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})

// Get all conjunctions
sentenceRoute.route('/conjunctions').get((req, res) => {
    db.query("SELECT * FROM conjunctions", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})

// Get all determiners
sentenceRoute.route('/determiners').get((req, res) => {
    db.query("SELECT * FROM determiners", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})

// Get all exclamations
sentenceRoute.route('/exclamations').get((req, res) => {
    db.query("SELECT * FROM exclamations", function (err, data, fields) {
        if (err) return err
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
})
module.exports = sentenceRoute;