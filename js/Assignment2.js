var totalGamePoints = 0;
var questionOneScore = 0;
var questionTwoScore = 0;
var questionThreeScore = 0;
var questionFourScore = 0;
var questionFiveScore = 0;
var userResultText;

function hideMe() {
    document.getElementById("pageOne").style.display = "none";
    document.getElementById("section1").style.display = "block";
}

function hideMeOne() {
    document.getElementById("section1").style.display = "none";
    document.getElementById("section2").style.display = "block";
}

function hideMeTwo() {
    document.getElementById("section2").style.display = "none";
    document.getElementById("section3").style.display = "block";
}

function hideMeThree() {
    document.getElementById("section3").style.display = "none";
    document.getElementById("section4").style.display = "block";
}

function hideMeFour() {
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "block";
}

function hideMeFive() {
    document.getElementById("section5").style.display = "none";
    document.getElementById("section6").style.display = "block";

}


function question1Results() {
    var questionOneScore = document.getElementById("imaginationFrequency").value;
    console.log(questionOneScore)
    return questionOneScore;
}

function question2Results() {
    var seasonPoints = document.getElementsByName("favSeason");
    console.log(seasonPoints);
    for (var i = 0; i < seasonPoints.length; i++) {
        if (seasonPoints[i].checked) {
            questionTwoScore = seasonPoints[i].value;
            break;
        }
    }
    console.log(questionTwoScore);

    return questionTwoScore;

}

function question3Results() {

    var dreamDateText = document.getElementById("dreamDate").value;
    questionThreeScore = dreamDateText.length;
    console.log(questionThreeScore)

    return questionThreeScore
}

function question4Results() {
    var foodPoints = document.getElementsByName("foodChoice");
    var count = 0;
    for (var j = 0; j < foodPoints.length; j++) {
        if (foodPoints[j].checked) {
            count++;
        }
    }
    if (count == 1) {
        questionFourScore = 1;
    }
    else {
        questionFourScore = 5;
    }

    console.log(questionFourScore)
    return questionFourScore
}


function question5Results() {
    var notebookPoints = document.getElementById("notebookRating").value;
    questionFiveScore = notebookPoints;
    console.log(questionFiveScore)
    return questionFiveScore;
}


function calculationOfResults() {
    document.getElementById("button1").style.visibility = "hidden";

    question1Results();
    question2Results();
    question3Results();
    question4Results();
    question5Results();
    totalGamePoints = parseInt(questionOneScore) + parseInt(questionTwoScore) + parseInt(questionThreeScore) + parseInt(questionFourScore) + parseInt(questionFiveScore);
    console.log(totalGamePoints)

    if (totalGamePoints <= 10 || totalGamePoints == 0) {
        document.getElementById("printResultHere").innerHTML = "If you needed confirmation that you're NOT a romantic, then you've come to the right place... <br/> <br/> You are really not a romantic.";
    }
    else if (totalGamePoints > 10 && totalGamePoints <= 16) {
        document.getElementById("printResultHere").innerHTML = "You're not a hopeless romantic in its real definition, however you still shed a tear in a very sad movie about love. <br/> You still believe in good gestures. <br/> However, you sit on the fence as far as real romantisism is concerned.";
    }

    else if (totalGamePoints > 16 && totalGamePoints <= 27) {
        document.getElementById("printResultHere").innerHTML = "You are romantic when you want to be, you have your soft spots. However, safely don't fall into the trap of believing in 'happily ever after' or 'love at first sight' to the point of losing sight of reality. <br/>  However, you are really really close... watch out!";
    }
    else {
        document.getElementById("printResultHere").innerHTML = "YOU ARE A ROMANTIC BEYOND WORDS,<br/> You would relive the titanic for the final scene, relive The Notebook because it makes you sob every time. And, you love a good sob. You love romance, love and the way you often feel so sorry for yourself. Sometimes, you become clouded by your expectations of love, and this leaves you disappointed.";
    }

}
