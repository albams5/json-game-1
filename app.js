import { elements } from './domReferences.js';

window.addEventListener("DOMContentLoaded", fillScores)

function fillScores(){
    const salchichas = JSON.parse(localStorage.getItem("arrayWinners"))||[];
    const {userScores} = elements;
    userScores.innerText = "";
    for(let i = salchichas.length-1; i > salchichas.length-5 && i > 0; i--){
        const span = document.createElement("p");
        span.classList.add("span-scores");
        span.textContent = salchichas[i].username + ": " + salchichas[i].result;
        userScores.appendChild(span);
    }
}

function getMandatoryInput(){
    const {usernameInput, playerName, buttonStart}= elements;
    const usernameValue = usernameInput.value;
    if(!usernameValue){
        alert("ingresa username");
    } else {
        showForm(playerName, buttonStart);
        localStorage.setItem("username", JSON.stringify(usernameValue));
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
        localStorage.setItem("result", JSON.stringify(result));
        const objeto = {
            username: JSON.parse(localStorage.getItem("username"))||"",
            result: JSON.parse(localStorage.getItem("result"))||0
        }
        const arrayWinners = JSON.parse(localStorage.getItem("arrayWinners"))||[];
        arrayWinners.push(objeto);
        localStorage.setItem("arrayWinners", JSON.stringify(arrayWinners));
    }, 10000);
}

document.getElementById("game-button").addEventListener("click", startGame);

function goBacktoStart(){
    const {playerName, yourScore, usernameInput} = elements;
    showForm(yourScore, playerName);
    usernameInput.value = "";
    fillScores();
}
document.getElementById("play-again-btn").addEventListener("click", goBacktoStart);


function showForm(sectiontoHide, sectiontoShow){
    sectiontoHide.classList.add("hide");
    sectiontoShow.classList.remove("hide");
}


