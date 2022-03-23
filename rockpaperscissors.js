const hands = ["rock", "paper", "scissors"];
const player = [
    {name: "Nick", hand: getHand(), score: 0},
    {name: "Fang", hand: getHand(), score: 0},
    {name: "China", hand: getHand(), score: 0},
    {name: "Elizabeth", hand: getHand(), score: 0}
]

let nick = player[0];
let fang = player[1];
let china = player[2];
let elizabeth = player [3];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}
function playRound(player1, player2) {
    player1.hand = getHand();
    player2.hand = getHand();
    if (player1.hand == "rock" && player2.hand == "rock") {
        console.log(player1.name + " threw '" + player1.hand + "' and " + player2.name + " threw '" + player2.hand + ".' This round is a tie. The score is now " + player1.name + ": " + player1.score + " " + player2.name + ": " + player2.score);
        return null;
    } else if (player1.hand == "rock" && player2.hand == "scissors") {
        player1.score++;
        console.log(player1.name + " threw '" + player1.hand + "' and " + player2.name + " threw '" + player2.hand + ".' " + player1.name + " wins the round! The score is now " + player1.name + ": " + player1.score + " " + player2.name + ": " + player2.score);
        return player1.score;
    } else if (player1.hand == "rock" && player2.hand == "paper") {
        player2.score++;
        console.log(player1.name + " threw '" + player1.hand + "' and " + player2.name + " threw '" + player2.hand + ".' " + player2.name+ " wins the round! The score is now " + player1.name + ": " + player1.score + " " + player2.name + ": " + player2.score);
        return player2.score;
    } else if (player1.hand == "paper" && player2.hand == "paper") {
        console.log(player1.name + " threw '" + player1.hand + "' and " + player2.name + " threw '" + player2.hand + ".' This round is a tie. The score is now " + player1.name + ": " + player1.score + " " + player2.name + ": " + player2.score);
        return null;
    } else if (player1.hand == "paper" && player2.hand == "rock") {
        player1.score++;
        console.log(player1.name + " threw '" + player1.hand + "' and " + player2.name + " threw '" + player2.hand + ".' " + player1.name + " wins the round! The score is now " + player1.name + ": " + player1.score + " " + player2.name + ": " + player2.score);
        return player1.score;
    } else if (player1.hand == "paper" && player2.hand == "scissors") {
        player2.score++;
        console.log(player1.name + " threw '" + player1.hand + "' and " + player2.name + " threw '" + player2.hand + ".' " + player2.name + " wins the round! The score is now " + player1.name + ": " + player1.score + " " + player2.name + ": " + player2.score);
        return player2.score;
    } else if (player1.hand == "scissors" && player2.hand == "scissors") {
        console.log(player1.name + " threw '" + player1.hand + "' and " + player2.name + " threw '" + player2.hand + ".' This round is a tie. The score is now " + player1.name + ": " + player1.score + " " + player2.name + ": " + player2.score);
        return null;
    } else if (player1.hand == "scissors" && player2.hand == "paper") {
        player1.score++;
        console.log(player1.name + " threw '" + player1.hand + "' and " + player2.name + " threw '" + player2.hand + ".' " + player1.name + " wins the round! The score is now " + player1.name + ": " + player1.score + " " + player2.name + ": " + player2.score);
        return player1.score;
    } else if (player1.hand == "scissors" && player2.hand == "rock") {
        player2.score++;
        console.log(player1.name + " threw '" + player1.hand + "' and " + player2.name + " threw '" + player2.hand + ".' " + player2.name + " wins the round! The score is now " + player1.name + ": " + player1.score + " " + player2.name + ": " + player2.score);
        return player2.score;
    }
}
function playGame(player1, player2, playUntil) {
    while (player1.score < playUntil && player2.score < playUntil) {
        playRound(player1, player2);
    }
    if (player1.score == playUntil) {
        console.log("\n" + player1.name + " wins the match, " + player1.score + " to " + player2.score + "!\n")
    } else {
        console.log("\n" + player2.name + " wins the match, " + player2.score + " to " + player1.score + "!\n")
    }
}

playGame(nick, china, 5);
