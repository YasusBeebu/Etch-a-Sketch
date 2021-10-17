const drawContainer = findElement("#drawContainer");
// shortem querrySelector
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
//Drawing field 
function drawField(num) {
    for (let i = num; i > 0; i--) {
        let pixel = createNode('div');
        for (let y = num * 2; y > 0; y--) {
            pixel.append(createNode("div"))
        }
        drawContainer.append(pixel);
    }
}
//----------------------------------------------------------


drawField(64)