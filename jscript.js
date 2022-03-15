const mainContainer = document.getElementById('container');

function createGridOfDivs(userNum){
    for(let i = 0; i < userNum; i++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.toggle('row');
        for(let j = 0; j < userNum; j++){
            const aDiv = document.createElement('div');
            aDiv.classList.toggle('square');
            aDiv.style.display = 'flex';
            aDiv.style.flex = '1';
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

function addListeners(){
    const squares = document.querySelectorAll('div.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hovered');
        });
    });
}

createGridOfDivs(16);
addListeners();

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
    addListeners();
});