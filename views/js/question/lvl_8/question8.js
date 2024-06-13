function question8() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d

	lvl8 = 
	[
		{question:difficultyHard[0].question, correct:difficultyHard[0].correct_answer,
		a:difficultyHard[0].incorrect_answers[0], b:difficultyHard[0].correct_answer,
		c:difficultyHard[0].incorrect_answers[1], d:difficultyHard[0].incorrect_answers[2]},
		
		{question:difficultyHard[1].question, correct:difficultyHard[1].correct_answer,
		a:difficultyHard[1].correct_answer, b:difficultyHard[1].incorrect_answers[0],
		c:difficultyHard[1].incorrect_answers[1], d:difficultyHard[1].incorrect_answers[2]},

		{question:difficultyHard[2].question, correct:difficultyHard[2].correct_answer,
		a:difficultyHard[2].incorrect_answers[0], b:difficultyHard[2].correct_answer,
		c:difficultyHard[2].incorrect_answers[1], d:difficultyHard[2].incorrect_answers[2]},

		{question:difficultyHard[3].question, correct:difficultyHard[3].correct_answer,
		a:difficultyHard[3].incorrect_answers[0], b:difficultyHard[3].incorrect_answers[1],
		c:difficultyHard[3].correct_answer, d:difficultyHard[3].incorrect_answers[2]},

		{question:difficultyHard[4].question, correct:difficultyHard[4].correct_answer,
		a:difficultyHard[4].incorrect_answers[0], b:difficultyHard[4].incorrect_answers[1],
		c:difficultyHard[4].incorrect_answers[2], d:difficultyHard[4].correct_answer},

		{question:difficultyHard[5].question, correct:difficultyHard[5].correct_answer,
		a:difficultyHard[5].correct_answer, b:difficultyHard[5].incorrect_answers[0],
		c:difficultyHard[5].incorrect_answers[1], d:difficultyHard[5].incorrect_answers[2]},

		{question:difficultyHard[6].question, correct:difficultyHard[6].correct_answer,
		a:difficultyHard[6].incorrect_answers[0], b:difficultyHard[6].correct_answer,
		c:difficultyHard[6].incorrect_answers[1], d:difficultyHard[6].incorrect_answers[2]},

		{question:difficultyHard[7].question, correct:difficultyHard[7].correct_answer,
		a:difficultyHard[7].incorrect_answers[0], b:difficultyHard[7].incorrect_answers[1],
		c:difficultyHard[7].correct_answer, d:difficultyHard[7].incorrect_answers[2]},

		{question:difficultyHard[8].question, correct:difficultyHard[8].correct_answer,
		a:difficultyHard[8].incorrect_answers[0], b:difficultyHard[8].incorrect_answers[1],
		c:difficultyHard[8].incorrect_answers[2], d:difficultyHard[8].correct_answer},

		{question:difficultyHard[9].question, correct:difficultyHard[9].correct_answer,
		a:difficultyHard[9].correct_answer, b:difficultyHard[9].incorrect_answers[0],
		c:difficultyHard[9].incorrect_answers[1], d:difficultyHard[9].incorrect_answers[2]},
	]

	randomQuest(lvl8);
	
}