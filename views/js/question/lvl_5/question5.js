function question5() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d

	lvl5 = 
	[
		{question:difficultyMedium[0].question, correct:difficultyMedium[0].correct_answer,
		a:difficultyMedium[0].incorrect_answers[0], b:difficultyMedium[0].correct_answer,
		c:difficultyMedium[0].incorrect_answers[1], d:difficultyMedium[0].incorrect_answers[2]},
		
		{question:difficultyMedium[1].question, correct:difficultyMedium[1].correct_answer,
		a:difficultyMedium[1].correct_answer, b:difficultyMedium[1].incorrect_answers[0],
		c:difficultyMedium[1].incorrect_answers[1], d:difficultyMedium[1].incorrect_answers[2]},

		{question:difficultyMedium[2].question, correct:difficultyMedium[2].correct_answer,
		a:difficultyMedium[2].incorrect_answers[0], b:difficultyMedium[2].correct_answer,
		c:difficultyMedium[2].incorrect_answers[1], d:difficultyMedium[2].incorrect_answers[2]},

		{question:difficultyMedium[3].question, correct:difficultyMedium[3].correct_answer,
		a:difficultyMedium[3].incorrect_answers[0], b:difficultyMedium[3].incorrect_answers[1],
		c:difficultyMedium[3].correct_answer, d:difficultyMedium[3].incorrect_answers[2]},

		{question:difficultyMedium[4].question, correct:difficultyMedium[4].correct_answer,
		a:difficultyMedium[4].incorrect_answers[0], b:difficultyMedium[4].incorrect_answers[1],
		c:difficultyMedium[4].incorrect_answers[2], d:difficultyMedium[4].correct_answer},

		{question:difficultyMedium[5].question, correct:difficultyMedium[5].correct_answer,
		a:difficultyMedium[5].correct_answer, b:difficultyMedium[5].incorrect_answers[0],
		c:difficultyMedium[5].incorrect_answers[1], d:difficultyMedium[5].incorrect_answers[2]},

		{question:difficultyMedium[6].question, correct:difficultyMedium[6].correct_answer,
		a:difficultyMedium[6].incorrect_answers[0], b:difficultyMedium[6].correct_answer,
		c:difficultyMedium[6].incorrect_answers[1], d:difficultyMedium[6].incorrect_answers[2]},

		{question:difficultyMedium[7].question, correct:difficultyMedium[7].correct_answer,
		a:difficultyMedium[7].incorrect_answers[0], b:difficultyMedium[7].incorrect_answers[1],
		c:difficultyMedium[7].correct_answer, d:difficultyMedium[7].incorrect_answers[2]},

		{question:difficultyMedium[8].question, correct:difficultyMedium[8].correct_answer,
		a:difficultyMedium[8].incorrect_answers[0], b:difficultyMedium[8].incorrect_answers[1],
		c:difficultyMedium[8].incorrect_answers[2], d:difficultyMedium[8].correct_answer},

		{question:difficultyMedium[9].question, correct:difficultyMedium[9].correct_answer,
		a:difficultyMedium[9].correct_answer, b:difficultyMedium[9].incorrect_answers[0],
		c:difficultyMedium[9].incorrect_answers[1], d:difficultyMedium[9].incorrect_answers[2]},
	]

	randomQuest(lvl5);
	
}