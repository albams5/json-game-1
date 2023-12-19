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
    const clickHere = document.getElementById("click-here-btn");
    let count = 0;
    clickHere.addEventListener("click", ()=>{
        getClicks(count)
    });
    setTimeout(startTimer, 10000);
}
document.getElementById("game-button").addEventListener("click", startGame);

function getClicks(count){
    ++count;
    console.log("hola", count);
}

function showForm(){
    const buttonStart = document.getElementById("button-start");
    const buttonToGame = document.getElementById("game-display");
    buttonStart.classList.add("hide");
    buttonToGame.classList.remove("hide");
    
}

function startTimer(){

}
