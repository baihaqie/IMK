var useranswers = new Array();
var answered = 0;
var i = 0;

function renderQuiz() 
{
	for(i;i<10;i++) 
	{	
		if(i===0)
		{
			document.write('<div id ="'+ i +'" style="display: block;">');
		}
		else
		{
			document.write('<div id ="'+ i +'" style="display: none;">');
		}
		var next=i+1;
    var back=i-1;
    document.write('<B>Soal' +next+ '</B>');
		document.write('<p class="question">' + questions[i] + ' <span id="result_' + i + '"><img src="blank.gif" style="border:0" alt="" /></span></p>');
    	for(j=0;j<choices[i].length;j++) 
    	{
      		document.write('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />');
    	}

    if(i===0)
    {
      document.write('<button class="btn btn-medium btn-success" type="submit" onclick="showStuff(\''+ next +'\'); hideStuff(\''+ i +'\'); return false;"> Next </button> <br>');

    }
    else if(i===9)
    {
      document.write('<button class="btn btn-medium btn-info" type="submit" onclick="showStuff(\''+ back +'\'); hideStuff(\''+ i +'\'); return false;"> Back </button> <br>');
      document.write('<p><input type="submit" value="Show Score" onclick="showScore()" /> <input type="submit" value="Reset Quiz" onclick="resetQuiz(true)" /></p><p style="display:none"><img src="correct.gif" style="border:0" alt="Correct!" /><img src="incorrect.gif" style="border:0" alt="Incorrect!" /></p>');
    }
    else
    {
      document.write('<button class="btn btn-medium btn-info" type="submit" onclick="showStuff(\''+ back +'\'); hideStuff(\''+ i +'\'); return false;"> Back </button> <button class="btn btn-medium btn-success" type="submit" onclick="showStuff(\''+ next +'\'); hideStuff(\''+ i +'\'); return false;"> Next </button> <br>');
    }
    document.write('</div>');    
  }
}

function resetQuiz(showConfirm) {
  if(showConfirm)
    if(!confirm("Anda ingin memulai dari awal?"))
      return false;
  document.location = document.location;
}

function submitAnswer(questionId, obj, classId, labelId) {
  useranswers[questionId] = obj.value;
  document.getElementById(labelId).style.fontWeight = "bold";
  disableQuestion(classId);
  showResult(questionId);
  answered++;
}

function showResult(questionId) {
  if(answers[questionId] == useranswers[questionId]) {
    document.getElementById('result_' + questionId).innerHTML = '<img src="img/correct.gif" style="border:0" alt="Correct!" />';
  } else {
    document.getElementById('result_' + questionId).innerHTML = '<img src="img/incorrect.gif" style="border:0" alt="Incorrect!" />';
  }
}

function showScore() {
  if(answered != answers.length) {
    alert("You have not answered all of the questions yet!");
    return false;
  }
  questionCount = answers.length;
  correct = 0;
  incorrect = 0;
  for(i=0;i<questionCount;i++) {
    if(useranswers[i] == answers[i])
      correct++;
    else
      incorrect++;
  }
  pc = Math.round((correct / questionCount) * 100);
  alertMsg = "You scored " + correct + " out of " + questionCount + "\n\n";
  alertMsg += "You correctly answered " + pc + "% of the questions! \n\n";
  if(pc == 100)
    alertMsg += response[0];
  else if(pc >= 90)
    alertMsg += response[1];
  else if(pc >= 70)
    alertMsg += response[2];
  else if(pc > 50)
    alertMsg += response[3];
  else if(pc >= 40)
    alertMsg += response[4];
  else if(pc >= 20)
    alertMsg += response[5];
  else if(pc >= 10)
    alertMsg += response[6];
  else
    alertMsg += response[7];
  if(pc < 100) {
    if(confirm(alertMsg))
      resetQuiz(false);
    else
      return false;
  } else {
    alert(alertMsg);
  }
}

function disableQuestion(classId) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}

function showStuff(id) {
  document.getElementById(id).style.display = 'block';
}

function hideStuff(id) {
  document.getElementById(id).style.display = 'none';
}