//read json file with ajax
import * as $ from 'jquery';

//read json file with ajax
export function readJsonFile(url: string) {
    return $.getJSON(url);
}

let json = readJsonFile('./prompt.json');
console.log(json);

let arr = jsonToStringArray(json);
//json to  string array
export function jsonToStringArray(json: any) {
    let arr: string[] = [];
    for (let i = 0; i < json.length; i++) {
        arr.push(json[i].prompt);
    }
    return arr;
    //console.log(arr);
}

//array for each
let main = document.createElement("div");
main.setAttribute("id", "main");
document.body.appendChild(main);

arr.forEach(function (value) {
    let div = document.createElement("div");
    div.setAttribute("class", "prompt");
    div.innerHTML = value;
    main.appendChild(div);
});

document.body.appendChild(main);
