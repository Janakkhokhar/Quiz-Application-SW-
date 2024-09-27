const express = require("express");

const routes = express.Router();

const quizcontroller = require('../controller/quizcontroller')


routes.post("/addQuiz",quizcontroller.addQuiz);

routes.get('/getAllQuizzes',quizcontroller.getAllQuizzes);

routes.get('/getQuizById/:id',quizcontroller.getQuizById);


routes.post('/submitQuiz/:id',quizcontroller.submitQuiz);



module.exports = routes;