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


initializeGrid(20, 20);


function color(){
    let cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => cell.addEventListener('mouseover', e => {
        let active = document.getElementById(e.target.id);
        let styles = active.getAttribute('style');
        if (!styles.includes('hsl')){
            active.setAttribute("style", `margin: 0px; height: 100%; width: 100%; background-color: hsl(${Math.floor(Math.random() * 361)}, ${Math.floor(Math.random() * 51) + 50}%, 90%);`);
        }
        else {
            const pattern = /\d+/g;
            const attributeNums = styles.match(pattern);
            let length = attributeNums.length;
            const hsl1 = attributeNums[length - 3];
            const hsl2 = attributeNums[length - 2];
            const hsl3 = attributeNums[length - 1];
            active.setAttribute("style", `margin: 0px; height: 100%; width: 100%; background-color: hsl(${hsl1}, ${hsl2}%, ${hsl3 - 10}%);`);
        }
    }));
}