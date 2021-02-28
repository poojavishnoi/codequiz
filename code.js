var readlineSync = require('readline-sync');
var score = 0;
var name = readlineSync.question("What is your name?");
console.log("Hi!!" + name)

console.log("---------------------")
console.log("Lets play a quiz")
console.log("How much you know coding...")

console.log("---------------------")
var questionOne  = {
  question: "what the sign we use to store data in c language ?",
  answer: "&"
}

var questionTwo = {
  question: "What is the pointer gives?",
  answer: "address"
}

var question = [questionOne, questionTwo];

for(var i=0; i < question.length; i++){
  var currentQuestion = question[i];

  var userAnswer=readlineSync.question(currentQuestion.question);

  if(userAnswer === currentQuestion.answer){
    console.log("Correct!")
    score++
  }else{
    console.log("Wrong")
  }
  console.log("score is "+ score)
}