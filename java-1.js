var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("userscore");
var computerScore_span = document.getElementById("computerscore")
var ScoreBoard_div = document.getElementById(".ScoreBoard");
var result_p = document.getElementById("result_p");
var rock_div = document.getElementById("Rock");
var paper_div = document.getElementById("Paper");
var scissor_div = document.getElementById("Scissor");
var count = 0

function getComputerChoice(_computerChoice) {
    const choice =["Rock","Paper","Scissor"];
    const randomNumber =Math.floor(Math.random() * 3);
    return choice[randomNumber];
}


function game(userChoice) { 
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
             lose(userChoice, computerChoice);
             break;
        case "ScissorScissor":
        case "RockRock":
        case "PaperPaper":
            draw(userChoice, computerChoice);
            break;
    }
}
function win(_userChoice, _computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${_userChoice} beats ${_computerChoice}.You Win!!!`
}
function lose(_userChoice, _computerChoice)
{
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =`${_userChoice} loses to ${_computerChoice}.You Lost...!`
}
function draw(_userChoice, _computerChoice)
{
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "It is a draw!"
}

function gameOver(){
    winner = (userScore > computerScore ? "User Wins" : "Computer Wins")
    result_p.innerHTML = "Game Over! <br> "+winner //`${_userChoice} beats ${_computerChoice}.You Win!!!`
}

function main() {
    var count = 0
    
    rock_div.addEventListener('click',function () {
        count++;
        console.log(count)
        if (count <10)
            game("Rock");
        else
            gameOver();
    })
    paper_div.addEventListener('click',function () {
        count++;
        console.log(count)
        if (count <10)
            game("Paper");
        else
        gameOver();
    })
    scissor_div.addEventListener('click',function () {
        count++;
        console.log(count)
        if (count <10)
            game("Scissor");
        else
            gameOver();
    })
    
    
}

main();