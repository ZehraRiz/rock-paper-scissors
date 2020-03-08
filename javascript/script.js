const turnStart_ = document.querySelector('.game_start');
const gamePlay_ = document.querySelector('.game_play')
const userPickCircle_ = document.querySelector('.your_pick-circle');
const paperButton_ = document.querySelector('.circle-paper');
const scissorsButton_ = document.querySelector('.circle-scissors');
const rockButton_ = document.querySelector('.circle-rock');
const userPickImage_ = document.querySelector('.your_pick-image');
const housePickCircle_ = document.querySelector('.house_pick-circle');
const result_ = document.querySelector('#result')
const resultText_ = document.querySelector(".result-text")
const resultButton_ = document.querySelector(".result-button")
const score_ = document.querySelector(".score-value")
const rulesButton_ = document.querySelector(".rules-button");
const rulesPage_ = document.querySelector(".rules-page");


const availableOptions = ["paper", "rock", "scissors"]
var computerSelection = null;
var userSelection = null;
var score = 0;
var mq = window.matchMedia( "(max-width: 750px)" )


paperButton_.addEventListener("click", ()=>secondScreen("paper"));
scissorsButton_.addEventListener("click",()=> secondScreen("scissors"));
rockButton_.addEventListener("click",()=> secondScreen("rock"));
resultButton_.addEventListener("click",()=> setTimeout(displayInitalScreen(), 1000)) 
rulesButton_.addEventListener("click", ()=>{console.log("tf")})

function displayInitalScreen() {
    turnStart_.classList.remove("hide");
    result_.classList.add("hide");
    gamePlay_.classList.add("hide");
    housePickCircle_.classList.add("circle-dark");
    housePickCircle_.classList.remove("circle-"+computerSelection);
    housePickCircle_.innerHTML = ""
    userPickCircle_.classList.remove("circle-"+userSelection)
    housePickCircle_.classList.remove("spinning-div")
    rulesPage_.classList.add("hide")
    userSelection = null;
    computerSelection = null;
}



function secondScreen(userChoice){
    turnStart_.classList.add("hide");
    gamePlay_.classList.remove("hide");
    userSelection = userChoice;
    switch(userChoice){
        case("scissors"):
        userPickCircle_.classList.add("circle-scissors")
        userPickImage_.src = "http://127.0.0.1:5500/images/icon-scissors.svg"
        game("scissors")
        break;
        case("rock"):
        userPickCircle_.classList.add("circle-rock")
        userPickImage_.src = "http://127.0.0.1:5500/images/icon-rock.svg"
        game("rock")
        break;
        case("paper"):
        userPickCircle_.classList.add("circle-paper")
        userPickImage_.src = "http://127.0.0.1:5500/images/icon-paper.svg"
        game("paper")
        break;
    }
    }
    
    function game(userChoice){
        computerSelection = availableOptions[Math.floor(Math.random() *3)];
        setTimeout(animation, 2000);
        function animation(){
        var innerCircle = document.createElement("div");
        innerCircle.setAttribute("class", "inner-circle");
        innerCircle.setAttribute("id", "ref")
        housePickCircle_.classList.add("circle-"+computerSelection);
        housePickCircle_.classList.remove("circle-dark");
        housePickCircle_.appendChild(innerCircle);
        housePickCircle_.classList.add("spinning-div")
        
        if(housePickCircle_.children.ref.id == "ref"){
            var img_ = document.querySelector("#ref");
            var element = document.createElement("img")
            element.setAttribute("src", "./images/icon-"+computerSelection+".svg" )
            element.setAttribute("class","game_play-housepick");
            element.setAttribute("alt", "1")
            img_.appendChild(element);

        }
    
        const gameVariables = userChoice+computerSelection;
    switch(gameVariables){
        case("rockrock"):
        case("scissorsscissors"):
        case("paperpaper"):
        showResult("draw")
        break;
        case("rockscissors"):
        case("scissorspaper"):
        case("paperrock"):
        showResult("win")
        break;
        case("rockpaper"):
        case("scissorsrock"):
        case("paperscissors"):
        showResult("loose")
        break;
    }}
}

function showResult(result){
    setTimeout( ()=>{
    result_.classList.remove("hide")
    if(result == "win"){
        resultText_.innerHTML = "you win"
        score ++;
    }
    else if(result == "loose"){
        resultText_.innerHTML = "you loose"
        if(score>0)score--;
    }else resultText_.innerHTML = "draw"
        score_.innerHTML = score
}, 1500)
}

function displayRulesPage(){
    rulesPage_.classList.remove("hide")
}


document.addEventListener("DOMContentLoaded", displayInitalScreen);