const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const btns = document.querySelectorAll('button[id^=btn');

//generates computer choice at random with options 0-2
// 0 is rock, 1 is paper, 2 is scissors
const randomNumber = () => Math.floor(Math.random()*3);

//adds entity's choice to their choice display
function addChoice(queryselector, value){
    if(value == 0){
        queryselector.innerText = "Rock";
    } else if (value == 1){
        queryselector.innerText = "Paper";
    } else {
        queryselector.innerText = "Scissors";
    }
}
//game function
function game(userValue){
    let pcValue = randomNumber();

    //puts userInput and computerChoice into UI
    addChoice(userChoice, userValue);
    addChoice(computerChoice, pcValue);

    ////determines winner or draw result and adds it into UI
    if (userValue>pcValue){
        result.innerText= "You won!";
    } else if(pcValue<userValue){
        result.innerText= "Computer won!";
    } else{
        result.innerText= "Draw.";
    }

}

//starts game the moment a user clicks on a button
btns.forEach(btn =>{
    btn.addEventListener('click', e => {
        //captures user input
        let userValue = btn.value;
        //calls the game to start given clicked value
        game(userValue);

        //clears game after 1 second
        setTimeout(clearGame, 1000);
    });
})



function clearGame(){
    computerChoice.innerText="";
    userChoice.innerText="";
    result.innerText="";
    console.log("cleared");
}