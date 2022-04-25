
function initializeGrid(rows, columns){
    const container = document.createElement('div');
    container.setAttribute('style', 'display: flex; flex-direction: column; margin: 0; width: 100%; height: 100%;');
    //style editing here

    for (let i = 0; i < rows; i++){
        let containerRow = document.createElement('div');
        containerRow.style.cssText = `display: flex; margin: 0; width: 100%; height: 100%;`;
        for (let j = 0; j < columns; j++){
            let containerCol = document.createElement('div');
            containerCol.style.cssText = `margin: 0; height: 100%; width: 100%;`;
            containerCol.className = "grid-cell";
            containerCol.id = `cell${i*columns + j}`;
            containerRow.appendChild(containerCol);
        }
        container.appendChild(containerRow);
    }
    document.body.appendChild(container);

    color();
}



const button = document.querySelector('button');
button.addEventListener('click', () => {
    let size = prompt('How big of a square grid would you like? (max of 100)');
    while (size > 100){
        size = prompt('Invalid entry. Please enter an integer between 1 and 100');
    }
    let container = document.querySelector("body > div");
    container.parentNode.removeChild(container);
    initializeGrid(size, size);
});


initializeGrid(50, 50);


function color(){
    let cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => cell.addEventListener('mouseover', e => {
        document.getElementById(e.target.id).setAttribute("style", "margin: 0px; height: 100%; width: 100%; background-color: black;");
    }));
}