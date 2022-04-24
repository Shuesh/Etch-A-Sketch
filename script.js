
function initializeGrid(rows, columns){
    const container = document.createElement('div');
    container.setAttribute('style', 'display: flex; flex-direction: column; margin: 0; width: 100%; height: 100%; border: 2px solid green;');
    //style editing here

    for (let i = 0; i < rows; i++){
        let containerRow = document.createElement('div');
        containerRow.style.cssText = `display: flex; margin: 0; width: 100%; height: 100%; border: 2px solid blue;`;
        for (let j = 0; j < columns; j++){
            let containerCol = document.createElement('div');
            containerCol.style.cssText = `margin: 0; border: 2px solid red; height: 100%; width: 100%;`;
            containerRow.appendChild(containerCol);
        }
        container.appendChild(containerRow);
    }
    document.body.appendChild(container);
}

initializeGrid(50, 50);