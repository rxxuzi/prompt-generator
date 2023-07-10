const list = document.createElement("list");
for (let i = 0; i < 7; i++) {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = `Button ${i}`;
    item.appendChild(button);
    list.appendChild(item);
}
document.body.appendChild(list);
