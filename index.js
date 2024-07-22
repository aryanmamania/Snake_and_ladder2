{/* 


const n = 10;
let rollingSound = new Audio('assets/dice-142528.mp3');
let snakebitingsound = new Audio('assets/Snake Strike - QuickSounds.com.mp3');
let ladderClimb = new Audio('assets/Crowd Reactions Small Group Yeah  Happy - QuickSounds.com.mp3');
let winnerSound = new Audio('assets/mixkit-conference-audience-clapping-strongly-476.wav');

const matrixArray = [];
const ladderMap = {
    2: ["I question everything!", 23],
    6: ["I am regular and punctual!", 45],
    20: ["I solved an allemp query", 59],
    57: ["I work on the feedback given!", 96],
    52: ["I completed my 6 tasks on time!", 72],
    71: ["I participated in sessions!", 92]
};
const snakeMap = {
    43: ["I came late to work!", 17],
    50: [" I didnt sent my DSR/DPT today", 5],
    56: ["My email has typos and errors!", 8],
    73: ["I did not cc Daily Interns Reporting!", 15],
    84: ["I missed my deadline!", 58],
    87: ["Bad quality of work!", 49],
    98: ["Ma'am gave me a punishment to visualize the WBS on Grafana or leave since I didn't create the test cases on time", 40]
};
const winnerMap= { 100: ["Congratulations", 100] };

const LADDER_CLASS = "ladder";
const SNAKE_CLASS = "snake";
const Winner_CLASS = "winner";

let currentPlayer = 1;
const playerPositions = [1, 1]; // Player 1 starts at position 1, Player 2 starts at position 1

function createMatrix() {
    let block = n * n + 1;
    for (let column = 1; column <= n; column++) {
        let rows = [];
        if (column % 2 === 0) {
            block = block - n;
            let value = block;
            for (let row = 1; row <= n; row++) {
                rows.push(value);
                value++;
            }
        } else {
            for (let row = 1; row <= n; row++) {
                block = block - 1;
                rows.push(block);
            }
        }
        matrixArray.push(rows);
    }
    createBoard(matrixArray);
}

function createBoard(matrixArray) {
    const board = document.querySelector(".main-board");
    let str = ""; 
    matrixArray.map((row) => {
        str += `<div class="row">`;
        row.map((block) => {
            str += `
                    <div class="block ${ladderMap[block] ? LADDER_CLASS : ""} ${
                        snakeMap[block] ? SNAKE_CLASS : ""
                    } ${winnerMap[block] ? Winner_CLASS: ""} " data-value=${block}>
                    </div>
                `;
        });
        str += `</div>`;
    });
    board.innerHTML = str;
    updatePlayerPositions();
}

function roll() {
    const dice = document.querySelector("#dice-id");
    rollingSound.play();
    dice.classList.add("rolling");

    setTimeout(() => {
        dice.classList.remove("rolling");
        const diceValue = Math.ceil(Math.random() * 6);
        document.querySelector("#dice-id").setAttribute("src", `assets/dice${diceValue}.png`);
        changeCurrentPosition(diceValue);
    }, 1000);
}

function changeCurrentPosition(diceValue) {
    const currentPlayerPosition = playerPositions[currentPlayer - 1];
    let newPosition = currentPlayerPosition + diceValue;

    if (ladderMap[newPosition]) {
        ladderClimb.play();
        Swal.fire({
            title: "Progress!",
            html: `${ladderMap[newPosition][0].replace(/\n/g, "<br> <br>")} <br> <br> <b> I've moved up to: ${ladderMap[newPosition][1]} </b>`,
            confirmButtonText: "OK",
        });
        newPosition = ladderMap[newPosition][1];
    } else if (snakeMap[newPosition]) {
        snakebitingsound.play();
        Swal.fire({
            title: "Regress!",
            html: `${snakeMap[newPosition][0].replace(/\n/g, "<br> <br>")}<br> <br> <b> I've gone down to: ${snakeMap[newPosition][1]} </b>`,
            confirmButtonText: "OK",
        });
        newPosition = snakeMap[newPosition][1];
    }

    if (newPosition <= n * n) {
        playerPositions[currentPlayer - 1] = newPosition;
        updatePlayerPositions();
    }

    if (isGameComplete(newPosition)) {
        Swal.fire({
            title: "Congratulations!",
            text: `🚀 Player ${currentPlayer} has successfully completed the game! 🏆🌟`,
            icon: "success",
            confirmButtonText: "Play Again",
            imageUrl: "assets/cong.webp",
            imageAlt: "Image",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });
    } else {
        togglePlayer();
    }
}

function updatePlayerPositions() {
    document.querySelectorAll('.block').forEach(block => {
        block.classList.remove('active', 'player1', 'player2');
    });
    document.querySelector(`[data-value="${playerPositions[0]}"]`).classList.add('active', 'player1');
    document.querySelector(`[data-value="${playerPositions[1]}"]`).classList.add('active', 'player2');
}

function togglePlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById('turn-indicator').textContent = `Player ${currentPlayer}'s Turn`;
}

function isGameComplete(position) {
    return position === n * n;
}

document.getElementById("quitButton").addEventListener("click", quitGame);

function quitGame() {
    window.close();
}





const n = 10;
let rollingSound = new Audio('assets/dice-142528.mp3');
let snakebitingsound = new Audio('assets/Snake Strike - QuickSounds.com.mp3');
let ladderClimb = new Audio('assets/Crowd Reactions Small Group Yeah  Happy - QuickSounds.com.mp3');
let winnerSound = new Audio('assets/mixkit-conference-audience-clapping-strongly-476.wav');

const matrixArray = [];
const ladderMap = {
    2: ["I question everything!", 23],
    6: ["I am regular and punctual!", 45],
    20: ["I solved an allemp query", 59],
    57: ["I work on the feedback given!", 96],
    52: ["I completed my 6 tasks on time!", 72],
    71: ["I participated in sessions!", 92]
};
const snakeMap = {
    43: ["I came late to work!", 17],
    50: [" I didnt sent my DSR/DPT today", 5],
    56: ["My email has typos and errors!", 8],
    73: ["I did not cc Daily Interns Reporting!", 15],
    84: ["I missed my deadline!", 58],
    87: ["Bad quality of work!", 49],
    98: ["Ma'am gave me a punishment to visualize the WBS on Grafana or leave since I didn't create the test cases on time", 40]
};
const winnerMap= { 100: ["Congratulations", 100] };

const LADDER_CLASS = "ladder";
const SNAKE_CLASS = "snake";
const Winner_CLASS = "winner";

let currentPlayer = 1;
const playerPositions = [1, 1]; // Player 1 starts at position 1, Player 2 starts at position 1

function createMatrix() {
    let block = n * n + 1;
    for (let column = 1; column <= n; column++) {
        let rows = [];
        if (column % 2 === 0) {
            block = block - n;
            let value = block;
            for (let row = 1; row <= n; row++) {
                rows.push(value);
                value++;
            }
        } else {
            for (let row = 1; row <= n; row++) {
                block = block - 1;
                rows.push(block);
            }
        }
        matrixArray.push(rows);
    }
    createBoard(matrixArray);
}

function createBoard(matrixArray) {
    const board = document.querySelector(".main-board");
    let str = ""; 
    matrixArray.map((row) => {
        str += `<div class="row">`;
        row.map((block) => {
            str += `
                    <div class="block ${ladderMap[block] ? LADDER_CLASS : ""} ${
                        snakeMap[block] ? SNAKE_CLASS : ""
                    } ${winnerMap[block] ? Winner_CLASS: ""} " data-value=${block}>
                    </div>
                `;
        });
        str += `</div>`;
    });
    board.innerHTML = str;
    updatePlayerPositions();
}

function roll() {
    const dice = document.querySelector("#dice-id");
    rollingSound.play();
    dice.classList.add("rolling");

    setTimeout(() => {
        dice.classList.remove("rolling");
        const diceValue = Math.ceil(Math.random() * 6);
        document.querySelector("#dice-id").setAttribute("src", `assets/dice${diceValue}.png`);
        changeCurrentPosition(diceValue);
    }, 1000);
}

function changeCurrentPosition(diceValue) {
    const currentPlayerPosition = playerPositions[currentPlayer - 1];
    let newPosition = currentPlayerPosition + diceValue;

    if (ladderMap[newPosition]) {
        ladderClimb.play();
        Swal.fire({
            title: "Progress!",
            html: `${ladderMap[newPosition][0].replace(/\n/g, "<br> <br>")} <br> <br> <b> I've moved up to: ${ladderMap[newPosition][1]} </b>`,
            confirmButtonText: "OK",
        });
        newPosition = ladderMap[newPosition][1];
    } else if (snakeMap[newPosition]) {
        snakebitingsound.play();
        Swal.fire({
            title: "Regress!",
            html: `${snakeMap[newPosition][0].replace(/\n/g, "<br> <br>")}<br> <br> <b> I've gone down to: ${snakeMap[newPosition][1]} </b>`,
            confirmButtonText: "OK",
        });
        newPosition = snakeMap[newPosition][1];
    }

    if (newPosition <= n * n) {
        playerPositions[currentPlayer - 1] = newPosition;
        updatePlayerPositions();
    }

    if (isGameComplete(newPosition)) {
        Swal.fire({
            title: "Congratulations!",
            text: `🚀 Player ${currentPlayer} has successfully completed the game! 🏆🌟`,
            icon: "success",
            confirmButtonText: "Play Again",
            imageUrl: "assets/cong.webp",
            imageAlt: "Image",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });
    } else if (diceValue !== 6) {
        togglePlayer();
    }
}

function updatePlayerPositions() {
    document.querySelectorAll('.block').forEach(block => {
        block.classList.remove('active', 'player1', 'player2');
    });
    document.querySelector(`[data-value="${playerPositions[0]}"]`).classList.add('active', 'player1');
    document.querySelector(`[data-value="${playerPositions[1]}"]`).classList.add('active', 'player2');
}

function togglePlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    document.getElementById('turn-indicator').textContent = `Player ${currentPlayer}'s Turn`;
}

function isGameComplete(position) {
    return position === n * n;
}

document.getElementById("quitButton").addEventListener("click", quitGame);

function quitGame() {
    window.close();
}














const n = 10;
let rollingSound = new Audio('assets/dice-142528.mp3');
let snakebitingsound = new Audio('assets/Snake Strike - QuickSounds.com.mp3');
let ladderClimb = new Audio('assets/Crowd Reactions Small Group Yeah  Happy - QuickSounds.com.mp3');
let winnerSound = new Audio('assets/mixkit-conference-audience-clapping-strongly-476.wav');

const matrixArray = [];
const ladderMap = {
    2: ["I question everything!", 23],
    6: ["I am regular and punctual!", 45],
    20: ["I solved an allemp query", 59],
    57: ["I work on the feedback given!", 96],
    52: ["I completed my 6 tasks on time!", 72],
    71: ["I participated in sessions!", 92]
};
const snakeMap = {
    43: ["I came late to work!", 17],
    50: [" I didnt sent my DSR/DPT today", 5],
    56: ["My email has typos and errors!", 8],
    73: ["I did not cc Daily Interns Reporting!", 15],
    84: ["I missed my deadline!", 58],
    87: ["Bad quality of work!", 49],
    98: ["Ma'am gave me a punishment to visualize the WBS on Grafana or leave since I didn't create the test cases on time", 40]
};
const winnerMap= { 100: ["Congratulations", 100] };

const LADDER_CLASS = "ladder";
const SNAKE_CLASS = "snake";
const Winner_CLASS = "winner";

let currentPlayer = 1;
let playerCount = 1;
let playerNames = [];
const playerPositions = [1, 1, 1, 1]; // Players start at position 1

function showPlayerSelection() {
    document.querySelector('.board-container').style.display = 'none';
    document.getElementById('player-setup').style.display = 'block';
}






function setupPlayers() {
    playerCount = parseInt(document.getElementById('num-players').value);
    const playerNamesDiv = document.getElementById('player-names');
    playerNamesDiv.innerHTML = '';
    
    for (let i = 1; i <= playerCount; i++) {
        playerNamesDiv.innerHTML += `<div>Player ${i} Name: <input type="text" id="player${i}-name"></div>`;
    }
    
    document.getElementById('start-game').style.display = 'block';
}

function startGame() {
    playerNames = [];
    for (let i = 1; i <= playerCount; i++) {
        const playerName = document.getElementById(`player${i}-name`).value || `Player ${i}`;
        playerNames.push(playerName);
    }
    
    document.getElementById('turn-indicator').textContent = `${playerNames[0]}'s Turn`;
    document.getElementById('player-setup').style.display = 'none';
    document.querySelector('.board-container').style.display = 'flex';
    createMatrix();
}

function createMatrix() {
    let block = n * n + 1;
    for (let column = 1; column <= n; column++) {
        let rows = [];
        if (column % 2 === 0) {
            block = block - n;
            let value = block;
            for (let row = 1; row <= n; row++) {
                rows.push(value);
                value++;
            }
        } else {
            for (let row = 1; row <= n; row++) {
                block = block - 1;
                rows.push(block);
            }
        }
        matrixArray.push(rows);
    }
    createBoard(matrixArray);
}


function createBoard(matrixArray) {
    const board = document.querySelector(".main-board");
    let str = ""; 
    matrixArray.map((row) => {
        str += `<div class="row">`;
        row.map((block) => {
            str += `
                    <div class="block ${ladderMap[block] ? LADDER_CLASS : ""} ${
                        snakeMap[block] ? SNAKE_CLASS : ""
                    } ${winnerMap[block] ? Winner_CLASS: ""} " data-value=${block}>
                    </div>
                `;
        });
        str += `</div>`;
    });
    board.innerHTML = str;
    updatePlayerPositions();
}



function roll() {
    const dice = document.querySelector("#dice-id");
    rollingSound.play();
    dice.classList.add("rolling");

    setTimeout(() => {
        dice.classList.remove("rolling");
        const diceValue = Math.ceil(Math.random() * 6);
        document.querySelector("#dice-id").setAttribute("src", `assets/dice${diceValue}.png`);
        changeCurrentPosition(diceValue);
    }, 1000);
}

function changeCurrentPosition(diceValue) {
    const currentPlayerPosition = playerPositions[currentPlayer - 1];
    let newPosition = currentPlayerPosition + diceValue;

    if (ladderMap[newPosition]) {
        ladderClimb.play();
        Swal.fire({
            title: "Progress!",
            html: `${ladderMap[newPosition][0].replace(/\n/g, "<br> <br>")} <br> <br> <b> I've moved up to: ${ladderMap[newPosition][1]} </b>`,
            confirmButtonText: "OK",
        });
        newPosition = ladderMap[newPosition][1];
    } else if (snakeMap[newPosition]) {
        snakebitingsound.play();
        Swal.fire({
            title: "Regress!",
            html: `${snakeMap[newPosition][0].replace(/\n/g, "<br> <br>")}<br> <br> <b> I've gone down to: ${snakeMap[newPosition][1]} </b>`,
            confirmButtonText: "OK",
        });
        newPosition = snakeMap[newPosition][1];
    }

    if (newPosition <= n * n) {
        playerPositions[currentPlayer - 1] = newPosition;
        updatePlayerPositions();
    }

    if (isGameComplete(newPosition)) {
        Swal.fire({
            title: "Congratulations!",
            text: `🚀 ${playerNames[currentPlayer - 1]} has successfully completed the game! 🏆🌟`,
            icon: "success",
            confirmButtonText: "Play Again",
            imageUrl: "assets/cong.webp",
            imageAlt: "Image",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });
    } else if (diceValue !== 6) {
        togglePlayer();
    }
}

function updatePlayerPositions() {
    document.querySelectorAll('.block').forEach(block => {
        block.classList.remove('active', 'player1', 'player2', 'player3', 'player4');
    });
    for (let i = 0; i < playerCount; i++) {
        document.querySelector(`[data-value="${playerPositions[i]}"]`).classList.add('active', `player${i + 1}`);
    }
}








function changeActiveClass(newPosition) {
    const activeBlock = document.querySelector(".active");
    const block = document.querySelector(`[data-value="${newPosition}"]`);
    const activePawn = document.querySelector(`.player${currentPlayer}`);

    if (activeBlock && block && activePawn) {
        // Calculate the position of the blocks
        const rectFrom = activeBlock.getBoundingClientRect();
        const rectTo = block.getBoundingClientRect();

        // Calculate movement distance
        const moveX = rectTo.left - rectFrom.left;
        const moveY = rectTo.top - rectFrom.top;

        // Set the position of the pawn
        activePawn.style.transform = `translate(${moveX}px, ${moveY}px)`;

        // Update the active class on the blocks
        activeBlock.classList.remove("active");
        block.classList.add("active");

        // Move the pawn to the new position
        setTimeout(() => {
            activePawn.style.transform = 'translate(0, 0)'; // Reset transform
        }, 500); // Match the duration with CSS transition
    }
}





function togglePlayer() {
    currentPlayer = (currentPlayer % playerCount) + 1;
    document.getElementById('turn-indicator').textContent = `${playerNames[currentPlayer - 1]}'s Turn`;
}

function isGameComplete(position) {
    return position === n * n;
}

document.getElementById("quitButton").addEventListener("click", quitGame);

function quitGame() {
    window.close();
}
    */}

    const n = 10;
let rollingSound = new Audio('assets/dice-142528.mp3');
let snakebitingsound = new Audio('assets/Snake Strike - QuickSounds.com.mp3');
let ladderClimb = new Audio('assets/Crowd Reactions Small Group Yeah  Happy - QuickSounds.com.mp3');
let winnerSound = new Audio('assets/mixkit-conference-audience-clapping-strongly-476.wav');

const matrixArray = [];
const ladderMap = {
    2: ["I question everything!", 23],
    6: ["I am regular and punctual!", 45],
    20: ["I solved an allemp query", 59],
    57: ["I work on the feedback given!", 96],
    52: ["I completed my 6 tasks on time!", 72],
    71: ["I participated in sessions!", 92]
};
const snakeMap = {
    43: ["I came late to work!", 17],
    50: [" I didnt sent my DSR/DPT today", 5],
    56: ["My email has typos and errors!", 8],
    73: ["I did not cc Daily Interns Reporting!", 15],
    84: ["I missed my deadline!", 58],
    87: ["Bad quality of work!", 49],
    98: ["Ma'am gave me a punishment to visualize the WBS on Grafana or leave since I didn't create the test cases on time", 40]
};
const winnerMap= { 100: ["Congratulations", 100] };

const LADDER_CLASS = "ladder";
const SNAKE_CLASS = "snake";
const Winner_CLASS = "winner";

let currentPlayer = 1;
let playerCount = 1;
let playerNames = [];
const playerPositions = [1, 1, 1, 1]; // Players start at position 1

function showPlayerSelection() {
    document.querySelector('.board-container').style.display = 'none';
    document.getElementById('player-setup').style.display = 'block';
}

function setupPlayers() {
    playerCount = parseInt(document.getElementById('num-players').value);
    const playerNamesDiv = document.getElementById('player-names');
    playerNamesDiv.innerHTML = '';
    
    for (let i = 1; i <= playerCount; i++) {
        playerNamesDiv.innerHTML += `<div>Player ${i} Name: <input type="text" id="player${i}-name"></div>`;
    }
    
    document.getElementById('start-game').style.display = 'block';
}

function startGame() {


    playerNames = [];
    for (let i = 1; i <= playerCount; i++) {
        const playerName = document.getElementById(`player${i}-name`).value || `Player ${i}`;
        playerNames.push(playerName);
    }
    
    document.getElementById('turn-indicator').textContent = `${playerNames[0]}'s Turn`;
    document.getElementById('player-setup').style.display = 'none';
    document.querySelector('.board-container').style.display = 'flex';
    createMatrix();
}   

function createMatrix() {
    let block = n * n + 1;
    for (let column = 1; column <= n; column++) {
        let rows = [];
        if (column % 2 === 0) {
            block = block - n;
            let value = block;
            for (let row = 1; row <= n; row++) {
                rows.push(value);
                value++;
            }
        } else {
            for (let row = 1; row <= n; row++) {
                block = block - 1;
                rows.push(block);
            }
        }
        matrixArray.push(rows);
    }
    createBoard(matrixArray);
}

function createBoard(matrixArray) {
    const board = document.querySelector(".main-board");
    let str = ""; 
    matrixArray.map((row) => {
        str += `<div class="row">`;
        row.map((block) => {
            str += `
                    <div class="block ${ladderMap[block] ? LADDER_CLASS : ""} ${
                        snakeMap[block] ? SNAKE_CLASS : ""
                    } ${winnerMap[block] ? Winner_CLASS: ""} " data-value=${block}>
                    </div>
                `;
        });
        str += `</div>`;
    });
    board.innerHTML = str;
    updatePlayerPositions();
}

function roll() {
    const dice = document.querySelector("#dice-id");
    rollingSound.play();
    dice.classList.add("rolling");

    setTimeout(() => {
        dice.classList.remove("rolling");
        const diceValue = Math.ceil(Math.random() * 6);
        document.querySelector("#dice-id").setAttribute("src", `assets/dice${diceValue}.png`);
        changeCurrentPosition(diceValue);
    }, 1000);
}

function changeCurrentPosition(diceValue) {
    const currentPlayerPosition = playerPositions[currentPlayer - 1];
    let newPosition = currentPlayerPosition + diceValue;

    if (ladderMap[newPosition]) {
        ladderClimb.play();
        Swal.fire({
            title: "Progress!",
            html: `${ladderMap[newPosition][0].replace(/\n/g, "<br> <br>")} <br> <br> <b> I've moved up to: ${ladderMap[newPosition][1]} </b>`,
            confirmButtonText: "OK",
        });
        newPosition = ladderMap[newPosition][1];
    } else if (snakeMap[newPosition]) {
        snakebitingsound.play();
        Swal.fire({
            title: "Regress!",
            html: `${snakeMap[newPosition][0].replace(/\n/g, "<br> <br>")}<br> <br> <b> I've gone down to: ${snakeMap[newPosition][1]} </b>`,
            confirmButtonText: "OK",
        });
        newPosition = snakeMap[newPosition][1];
    }

    if (newPosition <= n * n) {
        playerPositions[currentPlayer - 1] = newPosition;
        updatePlayerPositions();
    }

    if (isGameComplete(newPosition)) {
        Swal.fire({
            title: "Congratulations!",
            text: `🚀 ${playerNames[currentPlayer - 1]} has successfully completed the game! 🏆🌟`,
            icon: "success",
            confirmButtonText: "Play Again",
            imageUrl: "assets/cong.webp",
            imageAlt: "Image",
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
        });
    } else if (diceValue !== 6) {
        togglePlayer();
    }
}

function updatePlayerPositions() {
    document.querySelectorAll('.block').forEach(block => {
        block.classList.remove('active', 'player1', 'player2', 'player3', 'player4');
    });
    for (let i = 0; i < playerCount; i++) {
        document.querySelector(`[data-value="${playerPositions[i]}"]`).classList.add('active', `player${i + 1}`);
    }
}

function togglePlayer() {
    currentPlayer = (currentPlayer % playerCount) + 1;
    document.getElementById('turn-indicator').textContent = `${playerNames[currentPlayer - 1]}'s Turn`;
}

function isGameComplete(position) {
    return position === n * n;
}

document.getElementById("quitButton").addEventListener("click", quitGame);

function quitGame() {
    window.close();
}

