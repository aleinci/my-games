function question7() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d

	lvl7 = 
	[
		{question:difficultyMedium[20].question, correct:difficultyMedium[20].correct_answer,
		a:difficultyMedium[20].incorrect_answers[0], b:difficultyMedium[20].correct_answer,
		c:difficultyMedium[20].incorrect_answers[1], d:difficultyMedium[20].incorrect_answers[2]},

		{question:difficultyMedium[21].question, correct:difficultyMedium[21].correct_answer,
		a:difficultyMedium[21].correct_answer, b:difficultyMedium[21].incorrect_answers[0],
		c:difficultyMedium[21].incorrect_answers[1], d:difficultyMedium[21].incorrect_answers[2]},

		{question:difficultyMedium[22].question, correct:difficultyMedium[22].correct_answer,
		a:difficultyMedium[22].incorrect_answers[0], b:difficultyMedium[22].correct_answer,
		c:difficultyMedium[22].incorrect_answers[1], d:difficultyMedium[22].incorrect_answers[2]},

		{question:difficultyMedium[23].question, correct:difficultyMedium[23].correct_answer,
		a:difficultyMedium[23].incorrect_answers[0], b:difficultyMedium[23].incorrect_answers[1],
		c:difficultyMedium[23].correct_answer, d:difficultyMedium[23].incorrect_answers[2]},

		{question:difficultyMedium[24].question, correct:difficultyMedium[24].correct_answer,
		a:difficultyMedium[24].incorrect_answers[0], b:difficultyMedium[24].incorrect_answers[1],
		c:difficultyMedium[24].incorrect_answers[2], d:difficultyMedium[24].correct_answer},

		{question:difficultyMedium[25].question, correct:difficultyMedium[25].correct_answer,
		a:difficultyMedium[25].correct_answer, b:difficultyMedium[25].incorrect_answers[0],
		c:difficultyMedium[25].incorrect_answers[1], d:difficultyMedium[25].incorrect_answers[2]},

		{question:difficultyMedium[26].question, correct:difficultyMedium[26].correct_answer,
		a:difficultyMedium[26].incorrect_answers[0], b:difficultyMedium[26].correct_answer,
		c:difficultyMedium[26].incorrect_answers[1], d:difficultyMedium[26].incorrect_answers[2]},

		{question:difficultyMedium[27].question, correct:difficultyMedium[27].correct_answer,
		a:difficultyMedium[27].incorrect_answers[0], b:difficultyMedium[27].incorrect_answers[1],
		c:difficultyMedium[27].correct_answer, d:difficultyMedium[27].incorrect_answers[2]},

		{question:difficultyMedium[28].question, correct:difficultyMedium[28].correct_answer,
		a:difficultyMedium[28].incorrect_answers[0], b:difficultyMedium[28].incorrect_answers[1],
		c:difficultyMedium[28].incorrect_answers[2], d:difficultyMedium[28].correct_answer},

		{question:difficultyMedium[29].question, correct:difficultyMedium[29].correct_answer,
		a:difficultyMedium[29].correct_answer, b:difficultyMedium[29].incorrect_answers[0],
		c:difficultyMedium[29].incorrect_answers[1], d:difficultyMedium[29].incorrect_answers[2]},
	]

	randomQuest(lvl7);
	
}