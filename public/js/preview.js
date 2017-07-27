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
    aTag.setAttribute('onclick', 'removeBtn("' + currentID + '","' + level + '")');
    aTag.setAttribute('id', currentID);
    aTag.setAttribute('class', level);
    var selectedItemText = document.createTextNode(selectedItem);
    aTag.appendChild(selectedItemText);
    previewArea.appendChild(aTag);
    var br = document.createElement('br');
    br.setAttribute('id', 'br' + currentID)
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

function removeBtn(id, area) {
    var removeExp = document.getElementById(id);
    var removeBtn = document.createElement('input');
    removeBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('id', 'removeItem');
    removeBtn.setAttribute('onclick', 'remove("' + id + '","' + area + '")');
    removeBtn.setAttribute('value', 'Remove');
    removeExp.appendChild(removeBtn);
}

function remove(id, area) {
    if (area == 'area') {
        splitID = id.substring(0, 1)
    } else if (area == "list") {
        splitID = id.substring(0, 3)
    } else if (area == "item") {
        splitID = id.substring(0, 5)
    }
    var takeAway = document.getElementById('preview').querySelectorAll('[id^="' + splitID + '"]');
    var takeAwayLength = takeAway.length;
    for (var i = 0; i < takeAwayLength; i++) {
        takeAway[i].parentNode.removeChild(takeAway[i]);
    }
    var takeAwayBR = document.getElementById('preview').querySelectorAll('[id^="br' + splitID + '"]');
    var takeAwayBRLength = takeAway.length;
    for (var i = 0; i < takeAwayBRLength; i++) {
        takeAwayBR[i].parentNode.removeChild(takeAwayBR[i]);
    }
}