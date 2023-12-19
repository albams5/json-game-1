import { elements } from './domReferences.js';

function getMandatoryInput(){
    const {usernameInput, playerName, buttonStart}= elements;
    const usernameValue = usernameInput.value;

    if(!usernameValue){
        alert("ingresa username");
    } else {
        playerName.classList.add("hide");
        buttonStart.classList.remove("hide");
    }
}
document.getElementById("start-game").addEventListener("click", getMandatoryInput);

function startGame(){
    const {clickHereBtn, gameDisplayBtn, yourScore, totalClicks, buttonStart} = elements;
    showForm(buttonStart, gameDisplayBtn);
    let result = 0;
    const getClicks = () => {
        result++;
        console.log("hola", result);
    };
    clickHereBtn.addEventListener("click", getClicks);
    setTimeout(()=> {
        clickHereBtn.removeEventListener("click", getClicks);
        gameDisplayBtn.classList.add("hide");
        yourScore.classList.remove("hide");
        totalClicks.textContent = result;
    }, 10000);
}

document.getElementById("game-button").addEventListener("click", startGame);

function goBacktoStart(){
    const {playerName, yourScore, usernameInput} = elements;
    yourScore.classList.add("hide");
    playerName.classList.remove("hide");
    usernameInput.value = "";
}
document.getElementById("play-again-btn").addEventListener("click", goBacktoStart);


function showForm(buttonStart, gameDisplayBtn){
    buttonStart.classList.add("hide");
    gameDisplayBtn.classList.remove("hide");
}
