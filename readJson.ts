import * as file from "./questionsInput.json";

interface Question {
    question: string;
    options: string[];
    answer: string;
    worth: number;
}

interface QuestionList {
    category: string;
    questions: Question[];
}

interface RootInput {
    questionsList: QuestionList[];
}

function main() {
    const userInput: RootInput = file;
    const final: Question[] = userInput.questionsList[0].questions;
    console.log(final);
}
main();
