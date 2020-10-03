"use strict";
exports.__esModule = true;
var file = require("./questionsInput.json");
function main() {
    var userInput = file;
    console.log(userInput.questionsList[0].category);
}
