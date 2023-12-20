import { elements } from './domReferences.js';

function getMandatoryInput(){
    const {usernameInput, playerName, buttonStart}= elements;
    const usernameValue = usernameInput.value;

    if(!usernameValue){
        alert("ingresa username");
    } else {
        showForm(playerName, buttonStart);
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
        showForm(gameDisplayBtn, yourScore);
        totalClicks.textContent = result;
    }, 10000);
}

document.getElementById("game-button").addEventListener("click", startGame);

function goBacktoStart(){
    const {playerName, yourScore, usernameInput} = elements;
    showForm(yourScore, playerName);
    usernameInput.value = "";
}
document.getElementById("play-again-btn").addEventListener("click", goBacktoStart);


function showForm(sectiontoHide, sectiontoShow){
    sectiontoHide.classList.add("hide");
    sectiontoShow.classList.remove("hide");
}
