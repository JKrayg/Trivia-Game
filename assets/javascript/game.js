var number = 10;
var intervalId;


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {
    number--;
    $("#timeremaining").html("Beat the clock! " + "<h2>" + number + "</h2>");

    if (number === 0) {
        stop();
        alert("Time Up! Lets see how you did!");
    }
  }

function stop() {
    clearInterval(intervalId);
  }
  run()