class PromptGen{
    public static gen(cnt : number[] , list : string[]){
        var str = "";
        for(let i = 0 ; i < cnt.length ; i ++ ){
            if(cnt[i] == 1){
                continue;
            }
            const s = "( " + list[i] + " : " + cnt[i] + ") , ";
            str += s;
        }

        return str;
    }
}
let word  : { [key: string]: string } = {
    apple : 'red',
    orange : 'orange',
    mango : 'gold',
    lemon : 'yellow',
    lime : 'lime',
    pear : 'green',
    grape : 'purple',
    peach : 'pink'
};

let keys = Object.keys(word);

let range_arr : number[] = [];
let prompt_list : string[] = Object.values(word);

const main = document.createElement("div");
// main.classList.add("div0");

const div0 = document.createElement("div");
div0.className = "prompt-list";
div0.style.display = "flex";
div0.style.flexDirection = "column";
const main_prompt = document.createElement("h2");
const submite = document.createElement("button");
submite.innerText = "Submit";
submite.type = "button";

main_prompt.innerText = "Nothing";


submite.addEventListener("click", () => {
    main_prompt.innerText = PromptGen.gen(range_arr, prompt_list);
});

div0.appendChild(main_prompt);
div0.appendChild(submite);

let count = 8;

for (let i = 0; i < count; i++) {
    range_arr[i] = 0;
    const div = document.createElement("div");
    const name = document.createElement("span");

    const value = document.createElement("span");

    const input = document.createElement("input");
    const label = document.createElement("label");

    prompt_list[i] = word[keys[i]];

    div.classList.add("square");
    div.style.height = `5%`;
    div.style.marginTop = `${100 / count}%`;
    input.type = "range";
    input.min = "1";
    input.max = "30";
    input.step = "1";
    input.value = "1";
    input.id = `range${i}`;

    name.innerText = "P "+i +  ":" + keys[i];

    input.addEventListener("input", () => {
        let n : number = Number(input.value);
        range_arr[i] = n / 10 + 1;
        label.innerText = `${range_arr[i]}`;
    });

    input.addEventListener("change", () => {
        let n : number = Number(input.value);
        range_arr[i] = n / 10 + 1;
        label.innerText = `${range_arr[i]}`;
    });
    label.innerText = `${range_arr[i]}`;

    label.style.marginLeft = "5px";


    div.appendChild(name);
    div.appendChild(input);
    div.appendChild(label);
    div0.appendChild(div);
}

main.appendChild(div0);

document.body.appendChild(main);
