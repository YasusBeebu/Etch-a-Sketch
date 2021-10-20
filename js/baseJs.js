// Shorten querrySelector
function findElement(selector, all = false) {
    if (all) {
        return document.querySelectorAll(selector);
    }
    return document.querySelector(selector);
}
// Create a Node and add a class to it
function createNode(element = "div", cssCLass = "pixel") {
    const div = document.createElement(element);
    div.classList.add('pixel');
    return div;
};
// Drawing field with divs
function drawGrid(num) {
    for (let i = num; i > 0; i--) {
        let pixel = createNode('div');
        for (let y = num * 2; y > 0; y--) {
            pixel.append(createNode("div"))
        }
        findElement("#drawContainer").append(pixel);
    }
}

function defaultGrid() {
    drawContainer.innerText = "";
    drawGrid(16);
}

function zIndex(nodelist, hide = 0) {
    nodelist.forEach(element => {
        element.style.zIndex = hide;
    });
}

//----------------------------------------------------------
