const message = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button = document.querySelector("button");
const wording = [
    "Do you like JavaScript as much as i do?",
    "Hope you are having fun,Do you like JavaScript as much as i do?",
    "No source code available you are on your own, hope you like this and have fun",
];
let startTime, endTime;

playText.style.display = "block";

button.addEventListener("click", function () {
    if (this.innerText == "start") {
        playText.disabled = false;
        playGame();
    } else if (this.innerText == "Done") {
        playText.disabled = true;
        button.innerText = "start";
        endPlay();
    }
});

function playGame() {
    let randomNum = Math.floor(Math.random() * wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
    playText.value = "";
}

function endPlay() {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime) / 1000;
    let str = playText.value;
    let wordCount = wordCounter(str);

    let speed = Math.round((wordCount / totalTime) * 60);
    let finalmessage = `You typed at ${speed} words per minut.`;
    if (str != message.innerText) {
        let wc = compareWord(message.innerText, str);
        finalmessage = finalmessage + '<br>' + `${wc} correct out of ${message.innerHTML.split(' ').length}`;
    } else {
        finalmessage += '<br>' + `All correct.`
    }
    message.innerHTML = finalmessage;
}

function wordCounter(wordstr) {
    let count = wordstr.split(" ").length;
    return count;
}

function compareWord(str1, str2) {
    let ss1 = str1.split(" ");
    let ss2 = str2.split(" ");
    let count = 0;

    for (let i = 0; i < ss1.length; i++) {
        if (ss1[i] === ss2[i]) {
            count++;
        }
    }

    return count;
}