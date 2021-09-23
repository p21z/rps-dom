let choices=['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let roundcount = 0;

computerPlay = () => 
{
    computerChoice = choices[Math.floor(Math.random()*choices.length)]
    console.log("Computer choice: ", computerChoice)
    return computerChoice
}

playRound  = (computerChoice, playerChoice) =>
{
    if (computerChoice == "rock")
    {
        if (playerChoice == "rock")
        {
            result = "Tie"
        } else if (playerChoice == "paper")
        {
            result = "YOu Win!"
            return playerScore++
        } else{
            result = "You Lose!"
            return computerScore++
        }
    } else if (computerChoice == "paper")
    {
        if (playerChoice == "rock")
        {
            result = " You Lose!"
            return computerScore++
        } else if (playerChoice == "paper")
        {
            result = "Tie"
            console.log('Tie')
        } else {
            result = "YOu Win!"
            return playerScore++
        }
    } else
    {
        if (playerChoice == "rock")
        {
            result = "YOu Win!"
            return playerScore++
        } else if (playerChoice == "paper")
        {
            result = " You Lose!"
            return computerScore++
        } else {
            result = "Tie"
        }
    }
    //      
}

playerPlay = (e) => 
{
    // input=prompt('Make your choice: (rock, paper, scissors)')
    playerChoice = e.toLowerCase()
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")
    {
        console.log('Player choice: ', playerChoice);
        computerSelection = computerPlay();
        playRound(computerSelection, playerChoice);
    } else
    {
        console.log('Invalid input')
        playerPlay()
    }
}

display = () =>
{
    playerScoreView = document.querySelector('#playerScoreView');
    playerScoreView.innerHTML = playerScore;
    
    compScoreView = document.querySelector('#compScoreView');
    compScoreView.innerHTML = computerScore;

    resultView = document.querySelector('.result');
    resultView.innerHTML = result.toUpperCase();

}

game = (e) =>
{
    roundcount++;
    console.log('Round ',roundcount)
    playerSelection =  e.target.getAttribute('data-attribute');
    playerPlay(playerSelection)
    console.log('playerScore: ', playerScore)
    console.log('computerScore: ', computerScore)
    display()

}


const btn = document.querySelectorAll('button');

btn.forEach(element => {
    element.addEventListener('click', game);
});


// game()






