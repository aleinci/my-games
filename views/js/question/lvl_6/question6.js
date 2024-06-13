function question6() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d

	lvl6 = 
	[
		{question:difficultyMedium[10].question, correct:difficultyMedium[10].correct_answer,
		a:difficultyMedium[10].incorrect_answers[0], b:difficultyMedium[10].correct_answer,
		c:difficultyMedium[10].incorrect_answers[1], d:difficultyMedium[10].incorrect_answers[2]},

		{question:difficultyMedium[11].question, correct:difficultyMedium[11].correct_answer,
		a:difficultyMedium[11].correct_answer, b:difficultyMedium[11].incorrect_answers[0],
		c:difficultyMedium[11].incorrect_answers[1], d:difficultyMedium[11].incorrect_answers[2]},

		{question:difficultyMedium[12].question, correct:difficultyMedium[12].correct_answer,
		a:difficultyMedium[12].incorrect_answers[0], b:difficultyMedium[12].correct_answer,
		c:difficultyMedium[12].incorrect_answers[1], d:difficultyMedium[12].incorrect_answers[2]},

		{question:difficultyMedium[13].question, correct:difficultyMedium[13].correct_answer,
		a:difficultyMedium[13].incorrect_answers[0], b:difficultyMedium[13].incorrect_answers[1],
		c:difficultyMedium[13].correct_answer, d:difficultyMedium[13].incorrect_answers[2]},

		{question:difficultyMedium[14].question, correct:difficultyMedium[14].correct_answer,
		a:difficultyMedium[14].incorrect_answers[0], b:difficultyMedium[14].incorrect_answers[1],
		c:difficultyMedium[14].incorrect_answers[2], d:difficultyMedium[14].correct_answer},

		{question:difficultyMedium[15].question, correct:difficultyMedium[15].correct_answer,
		a:difficultyMedium[15].correct_answer, b:difficultyMedium[15].incorrect_answers[0],
		c:difficultyMedium[15].incorrect_answers[1], d:difficultyMedium[15].incorrect_answers[2]},

		{question:difficultyMedium[16].question, correct:difficultyMedium[16].correct_answer,
		a:difficultyMedium[16].incorrect_answers[0], b:difficultyMedium[16].correct_answer,
		c:difficultyMedium[16].incorrect_answers[1], d:difficultyMedium[16].incorrect_answers[2]},

		{question:difficultyMedium[17].question, correct:difficultyMedium[17].correct_answer,
		a:difficultyMedium[17].incorrect_answers[0], b:difficultyMedium[17].incorrect_answers[1],
		c:difficultyMedium[17].correct_answer, d:difficultyMedium[17].incorrect_answers[2]},

		{question:difficultyMedium[18].question, correct:difficultyMedium[18].correct_answer,
		a:difficultyMedium[18].incorrect_answers[0], b:difficultyMedium[18].incorrect_answers[1],
		c:difficultyMedium[18].incorrect_answers[2], d:difficultyMedium[18].correct_answer},

		{question:difficultyMedium[19].question, correct:difficultyMedium[19].correct_answer,
		a:difficultyMedium[19].correct_answer, b:difficultyMedium[19].incorrect_answers[0],
		c:difficultyMedium[19].incorrect_answers[1], d:difficultyMedium[19].incorrect_answers[2]},
	]

	randomQuest(lvl6);
	
}