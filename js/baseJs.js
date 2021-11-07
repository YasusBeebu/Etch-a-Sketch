// Shorten querrySelector single/nodelist
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
        for (let y = num * 3; y > 0; y--) { //Amount cells in rows, x3 coz drawContainer is a Rectangle not Square
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

// Instead of removing tons of events from elements, we simply draw transparent div to block drawing.
function allowDraw(allow = true) {
    const antiDrawCont = findElement('#antiDraw');

    if (!allow) {
        antiDrawCont.style.zIndex = 10;
        return;
    } else antiDrawCont.style.zIndex = -10;
};

// Add event to change the color of grid cells element
function changeBgcolor(bgColor = "black", random = false) {
    const grid = findElement('.rowCell', 1); // find gridCells

    grid.forEach(element => {
        element.addEventListener('mouseover', function main() {
            if (random) {
                let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                element.style.backgroundColor = randomColor;
            } else element.style.backgroundColor = bgColor;

        });
    });
};