window.addEventListener("load", renderQuestion, false);

var position = 0;
var test;
var testStatus;
var question;
var choices;
var choiceA;
var choiceB;
var choiceC;
var correct = 0;

var questions = [
		["What is 10 + 4?", "12", "14", "16", "B"],
		["What is 12 + 4?", "12", "14", "16", "C"],
		["What is 9 + 4?", "13", "14", "16", "A"]
];


function getElement(x)
{
	return document.getElementById(x);
}

function renderQuestion()
{
	test = getElement("test");

	testStatus = getElement("testStatus");

	if (position >= questions.length)
	{
		testStatus.innerHTML = "Test Completed";

		test.innerHTML = "<h2> You Got " + correct + " of " + questions.length + " Questions Correct</h2> <br>"
						+"<button onclick='restartTest()'> Restart </button>";
	}

	else
	{
		testStatus.innerHTML = "Question " + (position+1) + " of " + questions.length;
		question = questions[position][0];
		choiceA = questions[position][1];
		choiceB = questions[position][2];
		choiceC = questions[position][3];

		test.innerHTML = "<h3>" + question + "</h3>"
						+"<input type='radio' name='choices' value='A'> " + choiceA + "<br>"
						+"<input type='radio' name='choices' value='B'> " + choiceB + "<br>"
						+"<input type='radio' name='choices' value='C'> " + choiceC + "<br><br>"
						+"<button onclick='checkAnswer()'> Submit </button> <button onclick='restartTest()'> Restart </button>";
	}
}


function restartTest()
{
	position = 0;
	correct = 0;
	renderQuestion();
}


function checkAnswer()
{
	choices = document.getElementsByName("choices");

	for (var i = 0; i < choices.length; i++)
	{
		if (choices[i].checked)
		{
			choice = choices[i].value;
		}
	}

	if (choice == questions[position][4])
	{
		correct++;
	}

	position++;
	renderQuestion();
}

