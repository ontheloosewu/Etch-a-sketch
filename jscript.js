function createGridOfDivs(){
    const mainContainer = document.getElementById('container');

    for(let i = 0; i < 16; i++){
        const rowContainer = document.createElement('div');
        rowContainer.classList.toggle('row');
        for(let j = 0; j < 16; j++){
            const aDiv = document.createElement('div');
            aDiv.classList.toggle('square');
            aDiv.style.display = 'flex';
            aDiv.style.flex = '1';
            rowContainer.appendChild(aDiv);
        }
        mainContainer.appendChild(rowContainer);
    }
}

createGridOfDivs();