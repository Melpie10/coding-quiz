
const start_btn = document.querySelector('#start_btn');
const quiz_box = document.querySelector('#quiz_box');
const result_box = document.querySelector('#result_box');
const option_list = document.querySelector('#option_list'); 

//const submit = result_box.querySelector(".buttons .restart");
//const quit_quiz = result_box.querySelector(".buttons .quit");

let timeValue =  60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;





// submit initials
submitBtn.onclick = saveHighscore;

// start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;