// elements in html ir order of how i used them (ids)
var timer = document.querySelector('#timer');
// var start_box = document.querySelector('#start_box');
var start_btn = document.querySelector('#start_btn');
var questions = document.querySelector('#questions');
var questions_title = document.querySelector('#questions_title');
var options = document.querySelector('#options'); 
var results_box = document.querySelector('#results_box');
var final_score = document.querySelector('#final_score');
var score_initials = document.querySelector('#score_initials');
var initials = document.querySelector('#initials');
var submit = document.querySelector("#submit");
var results = document.querySelector('#results');

let timer =  60;
let time = questions.length * 15;
let timerId;

// start quiz
start_btn.onclick = startQuiz;

// hide start screen
function startQuiz() {
  
  var start_box = document.getElementById("start_box");
  start_box.setAttribute("class", "hide");

  // un-hide questions section
  questions.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 600);

  // show time
  timer.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var title= document.getElementById("title");
  title.textContent = currentQuestion.title;

  // clear out any old question choices
  choices.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

    // display on the page
    choice.appendChild(choiceNode);
  });
}


function questionClick() {
  // check if wrong answer
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    // display new time on page
    timerEl.textContent = time;
    results.textContent = "Wrong!";
  } else {
    results.textContent = "Correct!";
  }

  // flash right/wrong results
  results.setAttribute("class", "results");
  setTimeout(function() {
    results.setAttribute("class", "results hide");
  }, 1000);

  // next question
  currentQuestionIndex++;

  // time checker
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var results_box = document.getElementById("results_box");
  results_box.removeAttribute("class");

  // show final score
  var final_score = document.getElementById("final_score");
  final_score.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timer.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveScoreboard() {
  // get value of input box
  var initials = initials.value.trim();

  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var scoreboard =
      JSON.parse(window.localStorage.getItem("scoreboard")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    scoreboard.push(newScore);
    window.localStorage.setItem("scoreboard", JSON.stringify(scoreboard));

    // redirect to next page
    window.location.href = "score.html";
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveScoreboard();
  }
}

// submit initials
submit.onclick = saveScoreboard;
initials.onkeyup = checkForEnter;