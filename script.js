let randomNumber = Math.floor(Math.random() * 20) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const result = document.getElementById('result');

    if (userGuess === randomNumber) {
        result.textContent = "Victory!";
        result.style.body.backgroundColor = "yellow";
    } else if (userGuess > randomNumber) {
        result.textContent = "Your number is higher than the random number";
        result.style.backgroundColor = "";
    } else {
        result.textContent = "Your number is lower than the random number";
        result.style.backgroundColor = "";
    }
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById('userGuess').value = '';
    const result = document.getElementById('result');
    result.textContent = '';
    result.style.backgroundColor = "red";
}
