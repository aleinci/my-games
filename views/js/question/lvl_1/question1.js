function question1() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d
	
	lvl1 = 
	[
		{question:difficultyEasy[0].question, correct:difficultyEasy[0].correct_answer,
		a:difficultyEasy[0].incorrect_answers[0], b:difficultyEasy[0].correct_answer,
		c:difficultyEasy[0].incorrect_answers[1], d:difficultyEasy[0].incorrect_answers[2]},
		
		{question:difficultyEasy[1].question, correct:difficultyEasy[1].correct_answer,
		a:difficultyEasy[1].correct_answer, b:difficultyEasy[1].incorrect_answers[0],
		c:difficultyEasy[1].incorrect_answers[1], d:difficultyEasy[1].incorrect_answers[2]},

		{question:difficultyEasy[2].question, correct:difficultyEasy[2].correct_answer,
		a:difficultyEasy[2].incorrect_answers[0], b:difficultyEasy[2].correct_answer,
		c:difficultyEasy[2].incorrect_answers[1], d:difficultyEasy[2].incorrect_answers[2]},

		{question:difficultyEasy[3].question, correct:difficultyEasy[3].correct_answer,
		a:difficultyEasy[3].incorrect_answers[0], b:difficultyEasy[3].incorrect_answers[1],
		c:difficultyEasy[3].correct_answer, d:difficultyEasy[3].incorrect_answers[2]},

		{question:difficultyEasy[4].question, correct:difficultyEasy[4].correct_answer,
		a:difficultyEasy[4].incorrect_answers[0], b:difficultyEasy[4].incorrect_answers[1],
		c:difficultyEasy[4].incorrect_answers[2], d:difficultyEasy[4].correct_answer},

		{question:difficultyEasy[5].question, correct:difficultyEasy[5].correct_answer,
		a:difficultyEasy[5].correct_answer, b:difficultyEasy[5].incorrect_answers[0],
		c:difficultyEasy[5].incorrect_answers[1], d:difficultyEasy[5].incorrect_answers[2]},

		{question:difficultyEasy[6].question, correct:difficultyEasy[6].correct_answer,
		a:difficultyEasy[6].incorrect_answers[0], b:difficultyEasy[6].correct_answer,
		c:difficultyEasy[6].incorrect_answers[1], d:difficultyEasy[6].incorrect_answers[2]},

		{question:difficultyEasy[7].question, correct:difficultyEasy[7].correct_answer,
		a:difficultyEasy[7].incorrect_answers[0], b:difficultyEasy[7].incorrect_answers[1],
		c:difficultyEasy[7].correct_answer, d:difficultyEasy[7].incorrect_answers[2]},

		{question:difficultyEasy[8].question, correct:difficultyEasy[8].correct_answer,
		a:difficultyEasy[8].incorrect_answers[0], b:difficultyEasy[8].incorrect_answers[1],
		c:difficultyEasy[8].incorrect_answers[2], d:difficultyEasy[8].correct_answer},

		{question:difficultyEasy[9].question, correct:difficultyEasy[9].correct_answer,
		a:difficultyEasy[9].correct_answer, b:difficultyEasy[9].incorrect_answers[0],
		c:difficultyEasy[9].incorrect_answers[1], d:difficultyEasy[9].incorrect_answers[2]},
	]

	randomQuest(lvl1);
	
}