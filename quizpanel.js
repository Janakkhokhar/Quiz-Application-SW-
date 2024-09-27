const mongoose = require('mongoose');


const questionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        
    },
    answerChoices: [{
        type: String,
        
    }],
    correctAnswer: {
        type: String,
        
    }
});


const quizSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    questions: [questionSchema],
    createdAt: {
        type:String
    }
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
