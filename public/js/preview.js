var inputArea = 0;
var inputList = 0;
var inputItem = 0;
var inputThing = 0;

function createExp(level, location) {
    expCounter(location);
    getInput(level);
}

function getInput(level) {
    var currentID = inputArea + "." + inputList + "." + inputItem + "." + inputThing;
    var selectedItem = document.getElementById(level).value;
    var previewArea = document.getElementById('preview');
    var aTag = document.createElement('a');
    aTag.setAttribute('href', '#');
    aTag.setAttribute('value', selectedItem);
    aTag.setAttribute('onclick', 'removeOne("' + currentID + '")');
    aTag.setAttribute('id', currentID);
    aTag.setAttribute('class', level + 'Selection');
    var selectedItemText = document.createTextNode(selectedItem);
    aTag.appendChild(selectedItemText);
    previewArea.appendChild(aTag);
    var br = document.createElement('br');
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

function removeOne(id) {
    var removeExp = document.getElementById(id);
    var removeBtn = document.createElement('input');
    removeBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('id', 'removeItem');
    removeBtn.setAttribute('onclick', 'remove(' + id + ')');
    removeBtn.setAttribute('value', 'Remove');
    removeExp.appendChild(removeBtn);
}

function remove(id) {
    var takeAway = document.getElementById(id);
    takeAway.removeChild();
}