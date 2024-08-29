var arr = Array(9).fill(null);
var currentPlayer = 'X'

var scoreX = window.localStorage.getItem('scoreX') ?? 0;
var score0 = window.localStorage.getItem('score0') ?? 0;

document.getElementById('X').innerText = window.localStorage.getItem("scoreX") ?? 0
document.getElementById('0').innerText = window.localStorage.getItem('score0') ?? 0


function checkWinner(){
    if(
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8])
    ){
        // document.write(`Winner is ${currentPlayer}`);
        const elem = document.getElementsByClassName("row");
        for(var i = 0; i<elem.length; i++){
            elem[i].style.display = "none";
        }
        document.getElementById("grid").innerText = `${currentPlayer} won 🎉`
        updateScore(currentPlayer);
        document.getElementById('X').innerText = scoreX
        document.getElementById('0').innerText = score0
        return;
    }

    if(!arr.some(el => el === null)){
        document.getElementById("grid").innerText = `It's a draw!`
    }
}

function handleClick(el){
    const id = el.id;
    el.innerText = currentPlayer
    arr[id] = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? '0' : 'X';
}

function resetGame(){
    location.reload();
}

function updateScore(currentPlayer){
    
    if(currentPlayer === 'X'){
        scoreX++;
    }
    else   
        score0++;
    window.localStorage.setItem("scoreX", scoreX);
    window.localStorage.setItem("score0", score0);
}

function resetScore(){
    window.localStorage.clear();
    location.reload();
}