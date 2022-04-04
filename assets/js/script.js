// elements in html ir order of how i used them (ids)
var timerEl = document.querySelector('#timer');
//var start_box = document.querySelector('#start_box');
var start_btn = document.querySelector('#start_btn');
var questionsEl = document.querySelector('#questions');
var questions_title = document.querySelector('#questions_title');
var optionsEl = document.querySelector('#options'); 
//var results_box = document.querySelector('#results_box');
//var final_score = document.querySelector('#final_score');
//var score_initials = document.querySelector('#score_initials');
var initialsEl = document.querySelector('#initials');
var submit = document.querySelector("#submit");
var resultsEl = document.querySelector('#results');

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;



// hide start screen
function startQuiz() {
  
  var start_boxEl = document.getElementById("start_box");
  start_boxEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  // start timer
  // timerId = setInterval(clockTick, 600);

  // // show time
  // timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl= document.getElementById("question_title");
  titleEl.textContent = currentQuestion.title;

  // clear out old question options
  optionsEl.innerHTML = "";

  // loop over options
  currentQuestion.options.forEach(function(option, i) {
    // create new button for each option
    var optionNode = document.createElement("button");
    optionNode.setAttribute("class", "option");
    optionNode.setAttribute("value", option);

    optionNode.textContent = i + 1 + ". " + option;

    // attach click event listener to each option
    optionNode.onclick = questionClick;

    // display on the page
    optionsEl.appendChild(optionNode);
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
    // timerEl.textContent = time;
    resultsEl.textContent = "Wrong!";
  } else {
    resultsEl.textContent = "Correct!";
  }

  // flash right/wrong results
  resultsEl.setAttribute("class", "results");
  setTimeout(function() {
    resultsEl.setAttribute("class", "results hide");
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
  var results_boxEl = document.getElementById("results_box");
  results_boxEl.removeAttribute("class");

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
  var initials = initialsEl.value.trim();

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

// start quiz
start_btn.onclick = startQuiz;

initials.onkeyup = checkForEnter;