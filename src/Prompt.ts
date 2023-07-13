//load json file
//parse json
//get all the data
//get all the data from the json

import { readFileSync } from "fs";

const file = readFileSync("./prompt.json", );
const data = JSON.parse(file.toString());
const prompt = data.prompt;
const answers = data.answers;
const choices = data.choices;
const correct = data.correct;

console.log(prompt);
console.log("hello");
