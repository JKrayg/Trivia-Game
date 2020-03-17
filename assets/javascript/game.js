$(document).ready(function () {
    var number = 45;
    var intervalId;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var allAns = ["Red", "Clarinet", "Sheldon J. Plankton", "Barnacle Boy", "In his mattress", "Under a rock", "Cheeks", "Mrs.Puff"];

    /*var allQuestions = [
        
        {
            question: "What color is Spongebob's tie?", 
            choices: ["Blue", "Green", "Red", "Brown"],
            answer: "Red" }
        ,

        
        {
            question: "What instrument does Squidward play?", 
            choices: ["Trumpet", "Flute", "Trombone", "Clarinet"],
            answer: "Clarinet"}
        ,
        
        {
            question: "What is Plankton's real name?", 
            choices: ["Sheldon J. Plankton", "William P. Plankton", "Christopher J. Plankton", "Sherly J. Plankton"],
            answer: "Sheldon J. Plankton" }
        ,
        
        {
            question: "Who is Mermaid Man's sidekick?", 
            choices: ["Barnacle Man", "Flounder Man", "Barnacle Boy", "Man Ray"],
            answer: "Barnacle Boy" }
        ,
        
        {
            question: "Where does Mr.Krabs hide his money?", 
            choices: ["In his shell", "In his mattress", "In his safe", "In his boatmobile"],
            answer: "In his mattress" }
        ,
        
        {
            question: "Where does Patrick live?", 
            choices: ["In a pineapple", "On top of a rock", "In a glass dome", "Under a rock"],
            answer: "Under a rock" }
        ,
        
        {
            question: "What is Sandy's last name?", 
            choices: ["Cheeks", "Creeks", "Cheats", "Smith"],
            answer: "Cheeks" }
        ,
        
        {
            question: "What is Spongebob's driving teacher's name?", 
            choices: ["Mrs.Tough", "Mrs.Chucks", "Mr.Puff", "Mrs.Puff"],
            answer: "Mrs.Puff" }
        ];*/



    $("#correct").html("Correct: " + correct);
    $("#incorrect").html("Incorrect: " + incorrect);
    $("#unanswered").html("Unanswered: " + unanswered);
    $("#question-con").hide();
    $("#end-con").hide();

    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        number--;
        $("#timeremaining").html("Beat the clock! " + "<h2>" + number + "</h2>");

        if (number === 0) {
            stop();
            $("#hh1").text("Times Up!");
            $("#question-con").hide();
            $("#end-con").show();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }


    $("#start-btn").on("click", function () {
        runTimer()
        $("#question-con").show();
        $("#start-btn").hide();
        $("#doneBtn").html("<button>Done</button>");

    });

    $("#doneBtn").on("click", function () {
        $("#hh1").text("You beat the clock!");
        $("#question-con").hide();

        $("#end-con").show();

    });

    /* for(var i = 0; i < allAns.length; i++) {
         var allAnswers = allAns[i];
         //console.log(allAnswers);

     }
        /* $("input[type='radio']").click(function() {
             var Choices = $(this).val();
                 console.log(Choices);
             var Answer = allAnswers;
                 //console.log(Answer);
             if (Choices === Answer) {
                 correct++;
                 $("#correct").html("Correct: " + correct);
             } else if (Choices !== Answer) {
                 incorrect++;
                 $("#incorrect").html("Incorrect: " + incorrect);
             } 
         
     });*/

    $("input[type='radio']").click(function () {
        var choices = $(this).val();
        if (allAns.includes(choices)) {
            correct++;
            $("#correct").html("Correct: " + correct);
        } else if (!allAns.includes(choices)) {
            incorrect++;
            $("#incorrect").html("Incorrect: " + incorrect);
        } else {
            unanswered++;
            $("#unanswered").html("Unanswered: " + unanswered);
    }

    });

    

});

