const hands = ["rock", "paper", "scissors"];
const player = [
    {name: "Nick", hand: getHand()},
    {name: "Fang", hand: getHand()}
]
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

function playRound(player1, player2) {
    if (player1.hand == "rock" && player2.hand == "rock") {
        console.log("Player 1 threw '" + player1.hand + "' and Player 2 threw '" + player2.hand + ".' It's a tie.");
    } else if (player1.hand == "rock" && player2.hand == "scissors") {
        console.log("Player 1 threw '" + player1.hand + "' and Player 2 threw '" + player2.hand + ".' Player 1 wins.");
    } else if (player1.hand == "rock" && player2.hand == "paper") {
        console.log("Player 1 threw '" + player1.hand + "' and Player 2 threw '" + player2.hand + ".' Player 2 wins.");
    } else if (player1.hand == "paper" && player2.hand == "paper") {
        console.log("Player 1 threw '" + player1.hand + "' and Player 2 threw '" + player2.hand + ".' It's a tie.")
    } else if (player1.hand == "paper" && player2.hand == "rock") {
        console.log("Player 1 threw '" + player1.hand + "' and Player 2 threw '" + player2.hand + ".' Player 1 wins.")
    } else if (player1.hand == "paper" && player2.hand == "scissors") {
    console.log("Player 1 threw '" + player1.hand + "' and Player 2 threw '" + player2.hand + ".' Player 2 wins.")
    } else if (player1.hand == "scissors" && player2.hand == "scissors") {
        console.log("Player 1 threw '" + player1.hand + "' and Player 2 threw '" + player2.hand + ".' It's a tie.")
    } else if (player1.hand == "scissors" && player2.hand == "paper") {
    console.log("Player 1 threw '" + player1.hand + "' and Player 2 threw '" + player2.hand + ".' Player 1 wins.")
    } else if (player1.hand == "scissors" && player2.hand == "rock") {
        console.log("Player 1 threw '" + player1.hand + "' and Player 2 threw '" + player2.hand + ".' Player 2 wins.")
    }
}

playRound(player[0], player[1])
