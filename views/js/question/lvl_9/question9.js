function question9() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d

	lvl9 = 
	[
		{question:difficultyHard[10].question, correct:difficultyHard[10].correct_answer,
		a:difficultyHard[10].incorrect_answers[0], b:difficultyHard[10].correct_answer,
		c:difficultyHard[10].incorrect_answers[1], d:difficultyHard[10].incorrect_answers[2]},

		{question:difficultyHard[11].question, correct:difficultyHard[11].correct_answer,
		a:difficultyHard[11].correct_answer, b:difficultyHard[11].incorrect_answers[0],
		c:difficultyHard[11].incorrect_answers[1], d:difficultyHard[11].incorrect_answers[2]},

		{question:difficultyHard[12].question, correct:difficultyHard[12].correct_answer,
		a:difficultyHard[12].incorrect_answers[0], b:difficultyHard[12].correct_answer,
		c:difficultyHard[12].incorrect_answers[1], d:difficultyHard[12].incorrect_answers[2]},

		{question:difficultyHard[13].question, correct:difficultyHard[13].correct_answer,
		a:difficultyHard[13].incorrect_answers[0], b:difficultyHard[13].incorrect_answers[1],
		c:difficultyHard[13].correct_answer, d:difficultyHard[13].incorrect_answers[2]},

		{question:difficultyHard[14].question, correct:difficultyHard[14].correct_answer,
		a:difficultyHard[14].incorrect_answers[0], b:difficultyHard[14].incorrect_answers[1],
		c:difficultyHard[14].incorrect_answers[2], d:difficultyHard[14].correct_answer},

		{question:difficultyHard[15].question, correct:difficultyHard[15].correct_answer,
		a:difficultyHard[15].correct_answer, b:difficultyHard[15].incorrect_answers[0],
		c:difficultyHard[15].incorrect_answers[1], d:difficultyHard[15].incorrect_answers[2]},

		{question:difficultyHard[16].question, correct:difficultyHard[16].correct_answer,
		a:difficultyHard[16].incorrect_answers[0], b:difficultyHard[16].correct_answer,
		c:difficultyHard[16].incorrect_answers[1], d:difficultyHard[16].incorrect_answers[2]},

		{question:difficultyHard[17].question, correct:difficultyHard[17].correct_answer,
		a:difficultyHard[17].incorrect_answers[0], b:difficultyHard[17].incorrect_answers[1],
		c:difficultyHard[17].correct_answer, d:difficultyHard[17].incorrect_answers[2]},

		{question:difficultyHard[18].question, correct:difficultyHard[18].correct_answer,
		a:difficultyHard[18].incorrect_answers[0], b:difficultyHard[18].incorrect_answers[1],
		c:difficultyHard[18].incorrect_answers[2], d:difficultyHard[18].correct_answer},

		{question:difficultyHard[19].question, correct:difficultyHard[19].correct_answer,
		a:difficultyHard[19].correct_answer, b:difficultyHard[19].incorrect_answers[0],
		c:difficultyHard[19].incorrect_answers[1], d:difficultyHard[19].incorrect_answers[2]},
	]

	randomQuest(lvl9);
	
}