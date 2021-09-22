let choices=['rock', 'paper', 'scissors'];

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
            console.log('Tie')
        } else if (playerChoice == "paper")
        {
            console.log('You win!')
            return playerScore++
        } else{
            console.log('You lose!')
            return computerScore++
        }
    } else if (computerChoice == "paper")
    {
        if (playerChoice == "rock")
        {
            console.log('You lose!')
            return computerScore++
        } else if (playerChoice == "paper")
        {
            console.log('Tie')
        } else {
            console.log('You win!')
            return playerScore++
        }
    } else
    {
        if (playerChoice == "rock")
        {
            console.log('You Win!')
            return playerScore++
        } else if (playerChoice == "paper")
        {
            console.log('You lose!')
            return computerScore++
        } else {
            console.log('Tie!')
        }
    }
    //      
}

playerPlay = () => 
{
    input=prompt('Make your choice: (rock, paper, scissors)')
    playerChoice = input.toLowerCase()
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

game = () =>
{
    playerScore = 0;
    computerScore = 0;

    for (let i=0; i<5; i++)
    {
        console.log('Round ', i+1)
        playerSelection = playerPlay()
        console.log('playerScore: ', playerScore)
        console.log('computerScore: ', computerScore)
    }
}

game()






