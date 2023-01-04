import { commerce } from 'faker';

function generateQuestions () {
  let questions = [];

  for (var id = 0; id < 50; id++) {
    var questionText = commerce.questionText();
    var answerOptions = commerce.answerOptions();

    questions.push({
      "id": id,
      "questionText": questionText,
      "answerOptions": answerOptions,
    });
  }

  return { "questions": questions };
}

// json-server requires that you export
// a function which generates the data set
export default generateQuestions();