// We need: a start button
// high scores - add event listener for it to show up after amount of time or at the end
// event listeners for submit button after quiz ends
// add to event listeners event.preventDefault()
//write out real questions


const start_btn = document.querySelector('#start_btn');//(".start_btn button");
const quiz_box = document.querySelector('#quiz_box');//(".quiz_box");
const result_box = document.querySelector('#result_box');//(".result_box");
const option_list = document.querySelector('#option_list'); //(".option_list");

//const submit = result_box.querySelector(".buttons .restart");
//const quit_quiz = result_box.querySelector(".buttons .quit");

let timeValue =  60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;



function showQuestions(index){
  const que_text = document.querySelector(".que_text");
  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag
  
  const option = option_list.querySelectorAll(".option");
  // set onclick attribute to all available options
  for(i=0; i < option.length; i++){
      option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on option
// function optionSelected(answer){
//   clearInterval(counter); //clear counter
//   clearInterval(counterLine); //clear counterLine
//   let userAns = answer.textContent; //getting user selected option
//   let correcAns = questions[que_count].answer; //getting correct answer from array
//   const allOptions = option_list.children.length; //getting all option items
  
//   if(userAns == correcAns){ //if user selected option is equal to array's correct answer
//       userScore += 1; //upgrading score value with 1
//       answer.classList.add("correct"); //adding green color to correct selected option
//       answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
//       console.log("Correct Answer");
//       console.log("Your correct answers = " + userScore);
//   }else{
//       answer.classList.add("incorrect"); //adding red color to correct selected option
//       answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
//       console.log("Wrong Answer");
//       for(i=0; i < allOptions; i++){
//           if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
//               option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
//               option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
//               console.log("Auto selected correct answer.");
//           }
//       }
//   }
//   for(i=0; i < allOptions; i++){
//       option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
//   }
//   next_btn.classList.add("show"); //show the next button if user selected any option
// }


//global variables
var final

var count = 60;
var timer = setInterval(function() {
  //console.log(count);
  count--;
  if(count === 0) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}


// start_btn.onclick = ()=>{
//   quiz_box.classList.add("activeQuiz"); //show quiz box
//       showQuestions(0); //calling showQuestions function
//       queCounter(1); //passing 1 parameter to queCounter
//       startTimer(60); //calling startTimer function
//       startTimerLine(0); //calling startTimerLine function
//   }

// start_btn.addEventListener("click", function(event) {
//   quiz_box.classList.add("activeQuiz"); //show quiz box
//   showQuestions(0); //calling showQuestions function
//   queCounter(1); //passing 1 parameter to queCounter
//   startTimer(60); //calling startTimer function
//   startTimerLine(0); //calling startTimerLine function
// })