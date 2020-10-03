import * as file from "./questionsInput.json";
import * as jsonSchema from "./jsonSchema";
import * as schema from "./schema.json";
import Ajv from "ajv";
import { type } from "os";

function main() {
    let userInput: any = file;
    // const final: jsonSchema.Question[] = userInput.questionsList[0].questions;
    // console.log(final);

    if (checkRootList(file)) {
        console.log(1);
    }
}

function checkRootList(rootList: any): Boolean {
    let isCorrectFormat: Boolean = true;
    if (!rootList.hasOwnProperty("questionsList")) {
        return false;
    }
    const userQuestions: any = rootList.questionsList;
    for (let i = 0; i < userQuestions.length; i++) {
        // console.log(userQuestions[i], typeof userQuestions[i]);
        if (!checkQuestionsList(userQuestions[i])) {
            return false;
        }
    }

    return isCorrectFormat;
}

function checkQuestionsList(questionsList: any): Boolean {
    let isCorrectFormat: Boolean = true;
    if (
        !questionsList.hasOwnProperty("category") ||
        !questionsList.hasOwnProperty("questions")
    ) {
        return false;
    }

    const userQuestions: any = questionsList.questions;

    for (let i = 0; i < userQuestions.length; i++) {
        if (!checkQuestions(userQuestions[i])) {
            return false;
        }
    }

    return isCorrectFormat;
}

function checkQuestions(question: any): Boolean {
    return (
        question.hasOwnProperty("question") &&
        question.hasOwnProperty("options") &&
        question.hasOwnProperty("answer") &&
        question.hasOwnProperty("worth")
    );
}

main();
