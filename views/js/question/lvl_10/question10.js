function question10() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d

	lvl10 = 
	[
		{question:difficultyHard[20].question, correct:difficultyHard[20].correct_answer,
		a:difficultyHard[20].incorrect_answers[0], b:difficultyHard[20].correct_answer,
		c:difficultyHard[20].incorrect_answers[1], d:difficultyHard[20].incorrect_answers[2]},

		{question:difficultyHard[21].question, correct:difficultyHard[21].correct_answer,
		a:difficultyHard[21].correct_answer, b:difficultyHard[21].incorrect_answers[0],
		c:difficultyHard[21].incorrect_answers[1], d:difficultyHard[21].incorrect_answers[2]},

		{question:difficultyHard[22].question, correct:difficultyHard[22].correct_answer,
		a:difficultyHard[22].incorrect_answers[0], b:difficultyHard[22].correct_answer,
		c:difficultyHard[22].incorrect_answers[1], d:difficultyHard[22].incorrect_answers[2]},

		{question:difficultyHard[23].question, correct:difficultyHard[23].correct_answer,
		a:difficultyHard[23].incorrect_answers[0], b:difficultyHard[23].incorrect_answers[1],
		c:difficultyHard[23].correct_answer, d:difficultyHard[23].incorrect_answers[2]},

		{question:difficultyHard[24].question, correct:difficultyHard[24].correct_answer,
		a:difficultyHard[24].incorrect_answers[0], b:difficultyHard[24].incorrect_answers[1],
		c:difficultyHard[24].incorrect_answers[2], d:difficultyHard[24].correct_answer},

		{question:difficultyHard[25].question, correct:difficultyHard[25].correct_answer,
		a:difficultyHard[25].correct_answer, b:difficultyHard[25].incorrect_answers[0],
		c:difficultyHard[25].incorrect_answers[1], d:difficultyHard[25].incorrect_answers[2]},

		{question:difficultyHard[26].question, correct:difficultyHard[26].correct_answer,
		a:difficultyHard[26].incorrect_answers[0], b:difficultyHard[26].correct_answer,
		c:difficultyHard[26].incorrect_answers[1], d:difficultyHard[26].incorrect_answers[2]},

		{question:difficultyHard[27].question, correct:difficultyHard[27].correct_answer,
		a:difficultyHard[27].incorrect_answers[0], b:difficultyHard[27].incorrect_answers[1],
		c:difficultyHard[27].correct_answer, d:difficultyHard[27].incorrect_answers[2]},

		{question:difficultyHard[28].question, correct:difficultyHard[28].correct_answer,
		a:difficultyHard[28].incorrect_answers[0], b:difficultyHard[28].incorrect_answers[1],
		c:difficultyHard[28].incorrect_answers[2], d:difficultyHard[28].correct_answer},

		{question:difficultyHard[29].question, correct:difficultyHard[29].correct_answer,
		a:difficultyHard[29].correct_answer, b:difficultyHard[29].incorrect_answers[0],
		c:difficultyHard[29].incorrect_answers[1], d:difficultyHard[29].incorrect_answers[2]},
	]

	randomQuest(lvl10);
	
}