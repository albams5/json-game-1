function getMandatoryInput(){
    const username = document.querySelector("#input-username");
    const usernameValue = username.value;

    if(!usernameValue){
        alert("ingresa username");
    } else {
        const playerName = document.getElementById("player-name");
        const buttonStart = document.getElementById("button-start");
        playerName.classList.add("hide");
        buttonStart.classList.remove("hide");
    }
}
document.getElementById("start-game").addEventListener("click", getMandatoryInput);

function startGame(){
    showForm();
    let result = 0;
    const getClicks = () => {
        result++;
        console.log("hola", result);
    };
    const clickHere = document.getElementById("click-here-btn");
    clickHere.addEventListener("click", getClicks);
    setTimeout(()=> {
        clickHere.removeEventListener("click", getClicks);
        const buttonToGame = document.getElementById("game-display");
        buttonToGame.classList.add("hide");
        const yourScore = document.getElementById("your-score");
        yourScore.classList.remove("hide");

    }, 10000);
}

document.getElementById("game-button").addEventListener("click", startGame);

function showForm(){
    const buttonStart = document.getElementById("button-start");
    const buttonToGame = document.getElementById("game-display");
    buttonStart.classList.add("hide");
    buttonToGame.classList.remove("hide");   
}
