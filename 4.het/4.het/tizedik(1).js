var hotList = [];
var questioninHotList = 3;
var displayedQuestion;
var numberOfQuestions;
var nextQuestion = 1;

function init() {
    for (var i = 0; i < questioninHotList; i++) {
        hotList[i] = {
            question: {},
            goodAnswers : 0
        }
        for (var i = 0; i < questionInHotList; i++) {
            kérdésBetöltés(nextQuestion, i);
            nextQuestion++;
        }

    }
}