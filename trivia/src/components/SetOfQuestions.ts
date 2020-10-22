import questionList from "../data/questionsInput.json";
import { Question, Category, RootInput } from "../interfaces/gameInterfaces";

export default function listOfQuestions(): Question[] {
    const jsonFormat: RootInput = questionList;
    const allCategory: Category[] = jsonFormat.questionsList;
    let allQuestion: Question[] = [];
    allCategory.map(
        (x: Category) => (allQuestion = [...allQuestion, ...x.questions])
    );

    const levelOne: Question[] = shuffleArray(getLevelQuestion(allQuestion, 1));
    const levelTwo: Question[] = shuffleArray(getLevelQuestion(allQuestion, 2));
    const levelThree: Question[] = shuffleArray(
        getLevelQuestion(allQuestion, 3)
    );
    const levelFour: Question[] = shuffleArray(
        getLevelQuestion(allQuestion, 4)
    );
    const levelFive: Question[] = shuffleArray(
        getLevelQuestion(allQuestion, 5)
    );

    allQuestion = [
        ...levelOne.slice(0, 2),
        ...levelTwo.slice(0, 2),
        ...levelThree.slice(0, 2),
        ...levelFour.slice(0, 2),
        ...levelFive.slice(0, 2),
    ];

    allQuestion.map((question: Question) => {
        question.options = shuffleArray(question.options);
    });

    return allQuestion;
}

function getLevelQuestion(questionList: Question[], level: number): Question[] {
    let levelList: Question[] = [];
    questionList.map((x: Question) => {
        if (x.worth === level) {
            levelList = [...levelList, x];
        }
    });

    return levelList;
}

function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
