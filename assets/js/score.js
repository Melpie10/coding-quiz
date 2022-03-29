

function printScoreboard() {
    // either get scores from localstorage or set to empty array
    var scoreboard = JSON.parse(window.localStorage.getItem("scoreboard")) || [];
  
    // sort scoreboard by score property in descending order
    scoreboard.sort(function(a, b) {
      return b.score - a.score;
    });
  
    scoreboard.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("scoreboard");
      olEl.appendChild(liTag);
    });
  }
  
  function clearScoreboard() {
    window.localStorage.removeItem("scoreboard");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearScoreboard;
  
  // run function when page loads
  printScoreboard();