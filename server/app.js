const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const admin = require('./admin');
const cors = require('cors');
const projects = require('./projects')
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectScheme = new Schema({
    title: String,
    id: String,
    description: String
})

const userScheme = new Schema({
    login: String,
    password: String
});

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post('/users', function (req, res) {
    const details = req.body
    const Admin = mongoose.model("admins", userScheme);
    Admin.findOne(details).then(user => {
        if (!user) {
            res.sendStatus(401);
        }
        else {
            res.sendStatus(200)
        }
    })
        .catch(err => {
            console.log(err);
            res.sendStatus(404);
        })
});


app.get('/projects', function (req, res) {
    // const Project = mongoose.model("projects", projectScheme);
    // Project.find({}, function (err, projects) {
    //     console.log(projects)
    //     res.send(projects);
    // });
    res.status(200).send(projects);
    console.log(projects)
})

MongoClient.connect('mongodb://localhost:27017/test', function (err, db) {
    if (err) {
        throw err;
    }
    else {
        mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
        app.listen(3002, function () {
            console.log('Example app listening on port 3001!');
        });
    }
})
