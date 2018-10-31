//capture your choice within variable
//pass your choice to play()

// Variables!
let choices = ['rock', 'paper', 'scissors']



// Functions!
function play(playerChoice) {
    computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log("Player choice: ", playerChoice)
    console.log("Computer Choice: ", computerChoice)
    if (playerChoice == 'rock') {
        if (computerChoice == 'rock') {
            console.log('Tie')
        }
        else if (computerChoice == 'paper') {
            console.log('Lose')
        }
        else if (computerChoice == 'scissors') {
            console.log('Win')
        }
    }
    if (playerChoice == 'paper') {
        if (computerChoice == 'rock') {
            console.log('Win')
        }
        else if (computerChoice == 'paper') {
            console.log('Tie')
        }
        else if (computerChoice == 'scissors') {
            console.log('Lose')
        }
    }
    if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            console.log('Lose')
        }
        else if (computerChoice == 'paper') {
            console.log('Win')
        }
        else if (computerChoice == 'scissors') {
            console.log('Tie')
        }
    }

}
    //randomly assign computerChoice - Math.random()
    //(optional) draw computerChoice to the screen
    //compare computerChoice vs playerChoice to determine result
    //draw result to the screen


