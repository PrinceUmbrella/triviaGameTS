import * as file from "./questionsInput.json";

function main() {
    let userInput: any = file;

    if (checkRootList(file)) {
        console.log("");
        console.log("############################");
        console.log("--> Correct Input");
        console.log("############################");
        console.log("");
    } else {
        console.log("");
        console.log("############################");
        console.log("--> Missing or Incorrect Input");
        console.log("############################");
        console.log("");
    }
}

function checkRootList(rootList: any): Boolean {
    let isCorrectFormat: Boolean = true;
    if (!rootList.hasOwnProperty("questionsList")) {
        return false;
    }
    const userQuestions: any = rootList.questionsList;
    for (let i = 0; i < userQuestions.length; i++) {
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
