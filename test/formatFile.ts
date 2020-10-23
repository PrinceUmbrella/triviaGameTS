import fs from "fs";
import * as file from "./file.json";

const input = [];

const newfile: any = file.results;

for (var i = 0; i < newfile.length; i++) {
    var format = {
        question: newfile[i].question,
        options: [...newfile[i].incorrect_answers, newfile[i].correct_answer],
        answer: newfile[i].correct_answer,
        worth: 5,
    };
    input.push(format);
}

fs.writeFile("./newFile.json", JSON.stringify(input), function (err: any) {
    if (err) throw err;
    console.log("complete");
});
