const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours > 12 ? `오후` : 오전} ${hours > 10 ? `${hours - 12}` : hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분 ${seconds < 10 ?`0${seconds}` : seconds}초`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();