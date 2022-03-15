const mainContainer = document.getElementById('container');
let currGridSize = 16;
let colorMode = 'black';

function createGridOfDivs(userNum){
    currGridSize = userNum;
    for(let i = 0; i < userNum; i++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.toggle('row');
        for(let j = 0; j < userNum; j++){
            const aDiv = document.createElement('div');
            aDiv.classList.toggle('square');
            aDiv.style.display = 'flex';
            aDiv.style.flex = '1';
            aDiv.addEventListener('mouseover', changeColorMode);
            rowContainer.appendChild(aDiv);
        }
        mainContainer.appendChild(rowContainer);
    }
}

function clearCurrentGrid(){
    const rowContainers = document.getElementsByClassName('row');
    while(rowContainers.length > 0){
        rowContainers[0].remove();
    }
}

function randomBackgroundColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColorMode(){
    if(colorMode === 'rgb'){
        this.style.backgroundColor = randomBackgroundColor();
    }
    else {
        this.style.backgroundColor = colorMode;
    }
}

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener(('click'), () => {
    let inputNum = prompt('Enter your preferred grid size between 1 and 100.');
    do {
        if(inputNum <= 100 && inputNum >= 1){
            break;
        }
        else {
            inputNum = prompt('Invalid number, enter your preferred grid size between 1 and 100.');
        }
    }
    while (!isNaN(inputNum));
    clearCurrentGrid();
    createGridOfDivs(inputNum);
});

const blackBtn = document.getElementById('blackMode');
blackBtn.addEventListener('click', () => colorMode = 'black');

const rgbBtn = document.getElementById('rgbMode');
rgbBtn.addEventListener('click', () => colorMode = 'rgb');

const clrBtn = document.getElementById('clear');
clrBtn.addEventListener('click', () => {
    clearCurrentGrid();
    createGridOfDivs(currGridSize);
});

createGridOfDivs(16);