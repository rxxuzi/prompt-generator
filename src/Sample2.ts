const div0 = document.createElement("div");
div0.className = "main";

const div1 = document.createElement("div");
div1.className = "prompt-list-genre";
div0.appendChild(div1);

const div2 = document.createElement("div2")
div2.className = "description";
div1.appendChild(div2);

for (let  i = 0 ; i < 10 ; i ++ ){

    const btn0 = document.createElement("button");
    btn0.textContent = `BUTTON - ${i}`;
    btn0.className = "button";
    btn0.appendChild(div2);

}

const div_ex = document.createElement("div");

for (let i = 0; i < 10; i++) {
    const text = document.createElement("label");
    text.textContent = `${i} : Content`;
    const btn = document.createElement("button");
    btn.textContent = "Submit";
    div_ex.appendChild(text);
    const br = document.createElement("br");
    div_ex.appendChild(btn);
    div_ex.appendChild(br);

}

document.body.appendChild(div_ex);
