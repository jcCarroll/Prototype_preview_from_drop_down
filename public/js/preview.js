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
    if (area == "thing") {
        var takeAway = document.getElementById(id);
        takeAway.parentNode.removeChild(takeAway);
        var takeAwayBR = document.getElementById('br' + id);
        takeAwayBR.parentNode.removeChild(takeAwayBR);
    } else {
        var takeAwayAll = document.getElementById('preview').querySelectorAll('[id^="' + splitID + '"]');
        var takeAwayAllLength = takeAwayAll.length;
        for (var i = 0; i < takeAwayAllLength; i++) {
            takeAwayAll[i].parentNode.removeChild(takeAwayAll[i]);
        }
        var takeAwayAllBR = document.getElementById('preview').querySelectorAll('[id^="br' + splitID + '"]');
        var takeAwayAllBRLength = takeAwayAll.length;
        for (var i = 0; i < takeAwayAllBRLength; i++) {
            takeAwayAllBR[i].parentNode.removeChild(takeAwayAllBR[i]);
        }
    }
}