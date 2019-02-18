/*const title = document.querySelector("#title");

function handleOnClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleOnClick);

if (100231203 > 12302235183) {
    console.log("yes");
} else {
    console.log("fuck");
}

const age = prompt("나이가 어떻게 되세요? 씨발럼아")

console.log(age);

const calculator = {
    plus: function (a, b) {
        return a + b;
    }
}*/

const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 12, 32)";
const OTHER_COLOR = "#123d23";

function handleOnClick() {
    const currentColor = title.style.color;
    if (currentColor == BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("onclick", handleOnClick);
}

init();