
//function used to validate data 

function validate()
{
	//declare variables 

	var correct = 0.0; //value to store total 
	var total = 10.0; // total number of questions
    
     var question = new Array(10)
	
	//store results into variables 

	question[0] = document.getElementById("associative").checked;
	question[1] = document.getElementById("3").checked;
	question[2] = document.getElementById("3").checked;
	question[3] = document.getElementById("2").checked;
	question[4] = document.getElementById("victim").checked;
	question[5] = document.getElementById("6").checked;
	question[6] = document.getElementById("4").checked;
	question[7] = document.getElementById("22").checked;
	question[8] = document.getElementById("F").checked;
	question[9] = document.getElementById("True").checked;

	//validate info and calculate total 

	for(var index = 0; index < question.length; index ++)
	{
		if(question[index])
		{
			correct ++;
		}
	}



	//display total to the user 

	alert("Thank you for taking this quiz. Your score is " + correct +"/" + total);
}