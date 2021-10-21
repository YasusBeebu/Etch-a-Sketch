// Shorten querrySelector
function findElement(selector, all = false) {
    if (all) {
        return document.querySelectorAll(selector);
    }
    return document.querySelector(selector);
};

// Create a Node and add a class to it
function createNode(element = 'div', cssCLass = 'row') {
    const div = document.createElement(element);
    div.classList.add(cssCLass);
    return div;
};

// Drawing field with divs in drawContainer.
function drawGrid(num) {
    for (let i = num; i > 0; i--) {
        let row = createNode('div');
        for (let y = num * 3; y > 0; y--) { //Amount cells in rows, x3 coz drawContainer is a Rectangle not a Square
            let div = createNode('div');
            div.classList = 'rowCell';
            row.append(div);

        };
        findElement('#drawContainer').append(row);
    };
};
// Draw new grid in the drawContainer and add mouseover events with a change to the bg color
function newGrid(size = 16) {
    findElement("#drawContainer").innerText = '';
    drawGrid(size);
    changeBgcolor('black')
};

function changeBgcolor(bgColor = "black", random = false) {
    const grid = findElement('.rowCell', 1); // find gridCells and add paint event
    const drawContainer = findElement('#drawContainer');

    grid.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = bgColor;
        });
    });
}