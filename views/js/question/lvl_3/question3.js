function question3() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d

	lvl3 = 
	[
		{question:difficultyEasy[20].question, correct:difficultyEasy[20].correct_answer,
		a:difficultyEasy[20].incorrect_answers[0], b:difficultyEasy[20].correct_answer,
		c:difficultyEasy[20].incorrect_answers[1], d:difficultyEasy[20].incorrect_answers[2]},

		{question:difficultyEasy[21].question, correct:difficultyEasy[21].correct_answer,
		a:difficultyEasy[21].correct_answer, b:difficultyEasy[21].incorrect_answers[0],
		c:difficultyEasy[21].incorrect_answers[1], d:difficultyEasy[21].incorrect_answers[2]},

		{question:difficultyEasy[22].question, correct:difficultyEasy[22].correct_answer,
		a:difficultyEasy[22].incorrect_answers[0], b:difficultyEasy[22].correct_answer,
		c:difficultyEasy[22].incorrect_answers[1], d:difficultyEasy[22].incorrect_answers[2]},

		{question:difficultyEasy[23].question, correct:difficultyEasy[23].correct_answer,
		a:difficultyEasy[23].incorrect_answers[0], b:difficultyEasy[23].incorrect_answers[1],
		c:difficultyEasy[23].correct_answer, d:difficultyEasy[23].incorrect_answers[2]},

		{question:difficultyEasy[24].question, correct:difficultyEasy[24].correct_answer,
		a:difficultyEasy[24].incorrect_answers[0], b:difficultyEasy[24].incorrect_answers[1],
		c:difficultyEasy[24].incorrect_answers[2], d:difficultyEasy[24].correct_answer},

		{question:difficultyEasy[25].question, correct:difficultyEasy[25].correct_answer,
		a:difficultyEasy[25].correct_answer, b:difficultyEasy[25].incorrect_answers[0],
		c:difficultyEasy[25].incorrect_answers[1], d:difficultyEasy[25].incorrect_answers[2]},

		{question:difficultyEasy[26].question, correct:difficultyEasy[26].correct_answer,
		a:difficultyEasy[26].incorrect_answers[0], b:difficultyEasy[26].correct_answer,
		c:difficultyEasy[26].incorrect_answers[1], d:difficultyEasy[26].incorrect_answers[2]},

		{question:difficultyEasy[27].question, correct:difficultyEasy[27].correct_answer,
		a:difficultyEasy[27].incorrect_answers[0], b:difficultyEasy[27].incorrect_answers[1],
		c:difficultyEasy[27].correct_answer, d:difficultyEasy[27].incorrect_answers[2]},

		{question:difficultyEasy[28].question, correct:difficultyEasy[28].correct_answer,
		a:difficultyEasy[28].incorrect_answers[0], b:difficultyEasy[28].incorrect_answers[1],
		c:difficultyEasy[28].incorrect_answers[2], d:difficultyEasy[28].correct_answer},

		{question:difficultyEasy[29].question, correct:difficultyEasy[29].correct_answer,
		a:difficultyEasy[29].correct_answer, b:difficultyEasy[29].incorrect_answers[0],
		c:difficultyEasy[29].incorrect_answers[1], d:difficultyEasy[29].incorrect_answers[2]},
	]

	randomQuest(lvl3);
	
}