function question4() 
{
	//question = pregunta
	//a = respuesta a
	//b = respuesta b
	//c = respuesta c
	//d = respuesta d
	//correct = a respuesta correcta debe ser igual a alguna respuesta a,b,c o d

	lvl4 = 
	[
		{question:difficultyEasy[30].question, correct:difficultyEasy[30].correct_answer,
		a:difficultyEasy[30].incorrect_answers[0], b:difficultyEasy[30].correct_answer,
		c:difficultyEasy[30].incorrect_answers[1], d:difficultyEasy[30].incorrect_answers[2]},

		{question:difficultyEasy[31].question, correct:difficultyEasy[31].correct_answer,
		a:difficultyEasy[31].correct_answer, b:difficultyEasy[31].incorrect_answers[0],
		c:difficultyEasy[31].incorrect_answers[1], d:difficultyEasy[31].incorrect_answers[2]},

		{question:difficultyEasy[32].question, correct:difficultyEasy[32].correct_answer,
		a:difficultyEasy[32].incorrect_answers[0], b:difficultyEasy[32].correct_answer,
		c:difficultyEasy[32].incorrect_answers[1], d:difficultyEasy[32].incorrect_answers[2]},

		{question:difficultyEasy[33].question, correct:difficultyEasy[33].correct_answer,
		a:difficultyEasy[33].incorrect_answers[0], b:difficultyEasy[33].incorrect_answers[1],
		c:difficultyEasy[33].correct_answer, d:difficultyEasy[33].incorrect_answers[2]},

		{question:difficultyEasy[34].question, correct:difficultyEasy[34].correct_answer,
		a:difficultyEasy[34].incorrect_answers[0], b:difficultyEasy[34].incorrect_answers[1],
		c:difficultyEasy[34].incorrect_answers[2], d:difficultyEasy[34].correct_answer},

		{question:difficultyEasy[35].question, correct:difficultyEasy[35].correct_answer,
		a:difficultyEasy[35].correct_answer, b:difficultyEasy[35].incorrect_answers[0],
		c:difficultyEasy[35].incorrect_answers[1], d:difficultyEasy[35].incorrect_answers[2]},

		{question:difficultyEasy[36].question, correct:difficultyEasy[36].correct_answer,
		a:difficultyEasy[36].incorrect_answers[0], b:difficultyEasy[36].correct_answer,
		c:difficultyEasy[36].incorrect_answers[1], d:difficultyEasy[36].incorrect_answers[2]},

		{question:difficultyEasy[37].question, correct:difficultyEasy[37].correct_answer,
		a:difficultyEasy[37].incorrect_answers[0], b:difficultyEasy[37].incorrect_answers[1],
		c:difficultyEasy[37].correct_answer, d:difficultyEasy[37].incorrect_answers[2]},

		{question:difficultyEasy[38].question, correct:difficultyEasy[38].correct_answer,
		a:difficultyEasy[38].incorrect_answers[0], b:difficultyEasy[38].incorrect_answers[1],
		c:difficultyEasy[38].incorrect_answers[2], d:difficultyEasy[38].correct_answer},

		{question:difficultyEasy[39].question, correct:difficultyEasy[39].correct_answer,
		a:difficultyEasy[39].correct_answer, b:difficultyEasy[39].incorrect_answers[0],
		c:difficultyEasy[39].incorrect_answers[1], d:difficultyEasy[39].incorrect_answers[2]},
	]

	randomQuest(lvl4);
	
}