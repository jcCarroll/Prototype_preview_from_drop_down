var inputArea = 0;
var inputList = 0;
var inputItem = 0;
var inputThing = 0;

function createExp(level, location) {
    expCounter(location);
    getInput(level);
}

function getInput(level) {
    selectedItem = document.getElementById(level).value;
    previewArea = document.getElementById('preview');
    aTag = document.createElement('a');
    aTag.setAttribute('href', '#');
    aTag.setAttribute('value', selectedItem)
    aTag.setAttribute('onclick', 'test()');
    aTag.setAttribute('id', inputArea + "." + inputList + "." + inputItem + "." + inputThing);
    aTag.setAttribute('class', level + 'Selection')
    selectedItemText = document.createTextNode(selectedItem);
    aTag.appendChild(selectedItemText);
    previewArea.appendChild(aTag);
    br = document.createElement('br');
    previewArea.appendChild(br);
}

function expCounter(location) {
    if (location == 'inputArea') {
        inputArea += 1;
    } else if (location == 'inputList') {
        inputList += 1;
    } else if (location == 'inputItem') {
        inputItem += 1;
    } else if (location == 'inputThing') {
        inputThing += 1;
    }
}