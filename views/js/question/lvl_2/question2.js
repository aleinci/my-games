function question2() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d
	
	lvl2 = 
	[
		{question:difficultyEasy[10].question, correct:difficultyEasy[10].correct_answer,
		a:difficultyEasy[10].incorrect_answers[0], b:difficultyEasy[10].correct_answer,
		c:difficultyEasy[10].incorrect_answers[1], d:difficultyEasy[10].incorrect_answers[2]},

		{question:difficultyEasy[11].question, correct:difficultyEasy[11].correct_answer,
		a:difficultyEasy[11].correct_answer, b:difficultyEasy[11].incorrect_answers[0],
		c:difficultyEasy[11].incorrect_answers[1], d:difficultyEasy[11].incorrect_answers[2]},

		{question:difficultyEasy[12].question, correct:difficultyEasy[12].correct_answer,
		a:difficultyEasy[12].incorrect_answers[0], b:difficultyEasy[12].correct_answer,
		c:difficultyEasy[12].incorrect_answers[1], d:difficultyEasy[12].incorrect_answers[2]},

		{question:difficultyEasy[13].question, correct:difficultyEasy[13].correct_answer,
		a:difficultyEasy[13].incorrect_answers[0], b:difficultyEasy[13].incorrect_answers[1],
		c:difficultyEasy[13].correct_answer, d:difficultyEasy[13].incorrect_answers[2]},

		{question:difficultyEasy[14].question, correct:difficultyEasy[14].correct_answer,
		a:difficultyEasy[14].incorrect_answers[0], b:difficultyEasy[14].incorrect_answers[1],
		c:difficultyEasy[14].incorrect_answers[2], d:difficultyEasy[14].correct_answer},

		{question:difficultyEasy[15].question, correct:difficultyEasy[15].correct_answer,
		a:difficultyEasy[15].correct_answer, b:difficultyEasy[15].incorrect_answers[0],
		c:difficultyEasy[15].incorrect_answers[1], d:difficultyEasy[15].incorrect_answers[2]},

		{question:difficultyEasy[16].question, correct:difficultyEasy[16].correct_answer,
		a:difficultyEasy[16].incorrect_answers[0], b:difficultyEasy[16].correct_answer,
		c:difficultyEasy[16].incorrect_answers[1], d:difficultyEasy[16].incorrect_answers[2]},

		{question:difficultyEasy[17].question, correct:difficultyEasy[17].correct_answer,
		a:difficultyEasy[17].incorrect_answers[0], b:difficultyEasy[17].incorrect_answers[1],
		c:difficultyEasy[17].correct_answer, d:difficultyEasy[17].incorrect_answers[2]},

		{question:difficultyEasy[18].question, correct:difficultyEasy[18].correct_answer,
		a:difficultyEasy[18].incorrect_answers[0], b:difficultyEasy[18].incorrect_answers[1],
		c:difficultyEasy[18].incorrect_answers[2], d:difficultyEasy[18].correct_answer},

		{question:difficultyEasy[19].question, correct:difficultyEasy[19].correct_answer,
		a:difficultyEasy[19].correct_answer, b:difficultyEasy[19].incorrect_answers[0],
		c:difficultyEasy[19].incorrect_answers[1], d:difficultyEasy[19].incorrect_answers[2]},
	]

	randomQuest(lvl2);
	
}