$(document).ready(function() {
    var number = 45;
    var intervalId;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var numOfQues = 8;
    var checked = false;
    var allAns = ["Red","Clarinet","Sheldon J. Plankton","Barnacle Boy","In his mattress","Under a rock","Cheeks","Mrs.Puff"];

    /*var allQuestions = {
        
        question1: {
            question: "What color is Spongebob's tie?", 
            choices: ["Blue", "Green", "Red", "Brown"],
            answer: "Red" }
        ,

        
        question2: {
            question: "What instrument does Squidward play?", 
            choices: ["Trumpet", "Flute", "Trombone", "Clarinet"],
            answer: "Clarinet"}
        ,
        
        question3: {
            question: "What is Plankton's real name?", 
            choices: ["Sheldon J. Plankton", "William P. Plankton", "Christopher J. Plankton", "Sherly J. Plankton"],
            answer: "Sheldon J. Plankton" }
        ,
        
        question4: {
            question: "Who is Mermaid Man's sidekick?", 
            choices: ["Barnacle Man", "Flounder Man", "Barnacle Boy", "Man Ray"],
            answer: "Barnacle Boy" }
        ,
        
        question5: {
            question: "Where does Mr.Krabs hide his money?", 
            choices: ["In his shell", "In his mattress", "In his safe", "In his boatmobile"],
            answer: "In his mattress" }
        ,
        
        question6: {
            question: "Where does Patrick live?", 
            choices: ["In a pineapple", "On top of a rock", "In a glass dome", "Under a rock"],
            answer: "Under a rock" }
        ,
        
        question7: {
            question: "What is Sandy's last name?", 
            choices: ["Cheeks", "Creeks", "Cheats", "Smith"],
            answer: "Cheeks" }
        ,
        
        question8: {
            question: "What is Spongebob's driving teacher's name?", 
            choices: ["Mrs.Tough", "Mrs.Chucks", "Mr.Puff", "Mrs.Puff"],
            answer: "Mrs.Puff" }
        };*/

    

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

        $("input[type='radio']").click(function() {
            var Choices = $(this).val();
                console.log(Choices);
            //var Answer = allAnswers;
                //console.log(Answer);
            if (allAns.includes(Choices)) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if (!allAns.includes(Choices)) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } 
        
    });

});

        /*$("input[name='q1']").click(function() {
            var q1Choices = $("input[name='q1']:checked").val();
                console.log(q1Choices);
            var q1Answer = allQuestions.question1.answer;
                console.log(q1Answer);
            if (q1Choices === q1Answer) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if (q1Choices !== q1Answer) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } 
        });
            


        $("input[name='q2']").click(function() {
            var q2Choices = $("input[name='q2']:checked").val();
                console.log(q2Choices);
            var q2Answer = allQuestions.question2.answer;
                console.log(q2Answer);
            if (q2Choices === q2Answer) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if (q2Choices !== q2Answer) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } 
        });

        $("input[name='q3']").click(function() {
            var q3Choices = $("input[name='q3']:checked").val();
                console.log(q3Choices);
            var q3Answer = allQuestions.question3.answer;
                console.log(q3Answer);
            if (q3Choices === q3Answer) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if (q3Choices !== q3Answer) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } 
        });

        $("input[name='q4']").click(function() {
            var q4Choices = $("input[name='q4']:checked").val();
                console.log(q4Choices);
            var q4Answer = allQuestions.question4.answer;
                console.log(q4Answer);
            if (q4Choices === q4Answer) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if (q4Choices !== q4Answer) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } 
        });

        $("input[name='q5']").click(function() {
            var q5Choices = $("input[name='q5']:checked").val();
                console.log(q5Choices);
            var q5Answer = allQuestions.question5.answer;
                console.log(q5Answer);
            if (q5Choices === q5Answer) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if (q5Choices !== q5Answer) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } 
        });

        $("input[name='q6']").click(function() {
            var q6Choices = $("input[name='q6']:checked").val();
                console.log(q6Choices);
            var q6Answer = allQuestions.question6.answer;
                console.log(q6Answer);
            if (q6Choices === q6Answer) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if (q6Choices !== q6Answer) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } 
        });

        $("input[name='q7']").click(function() {
            var q7Choices = $("input[name='q7']:checked").val();
                console.log(q7Choices);
            var q7Answer = allQuestions.question7.answer;
                console.log(q7Answer);
            if (q7Choices === q7Answer) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if (q7Choices !== q7Answer) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } 
        });

        $("input[name='q8']").click(function() {
            var q8Choices = $("input[name='q8']:checked").val();
                console.log(q8Choices);
            var q8Answer = allQuestions.question8.answer;
                console.log(q8Answer);
            if (q8Choices === q8Answer) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if (q8Choices !== q8Answer) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } 
        });*/


        

        
            


        /*$("input[type='radio']").click(function() {
            for (var i = 0; i < allQuestions.length; i++) {
                var correctAnswers = allQuestions[i].answer;
                console.log(correctAnswers);
                var radioValue = $("input[type='radios']:checked").value;
                console.log(radioValue);
                if (radioValue === correctAnswers) {
                    correct++;
                    $("#correct").html("Correct: " + correct);
                }
            }
        })*/
            
            
            
                
                
            
            /*if ($('input[name=choice]:checked').val() === allQuestions[0].answer) {
                correct++;
                $("#correct").html("Correct: " + correct);
            } else if ($('input[name=choice]:checked').val() !== allQuestions[0].answer) {
                incorrect++;
                $("#incorrect").html("Incorrect: " + incorrect);
            } else {
                unanswered++;
                $("#unanswered").html("Unanswered: " + unanswered);
            } */
            
            
        
    
    
    


    
        
    
      /*$("#questiontwo").html("What instrument does Squidward play?");

      $("questionthree").html("What is Plankton's real name?");

      $("#questionfour").html("Who is Mermaid Man's sidekick?");

      $("#questionfive").html("What is Mr.Krabs's daughter's name?");

      $("#questionsix").html("Where does Patrick live?");

      $("#questionseven").html("What is Sandy's last name?");

      $("#questioneight").html("What is Spongebob's driving teacher's name?")*/
  