var inputArea = 0;
var inputList = 0;
var inputItem = 0;
var inputThing = 0;
// Onclick function to create element and get new address for element
function createExp(level, location) {
    expCounter(location);
    getInput(level);
}
// Takes input from drop down and creates element 
function getInput(level) {
    var currentID = inputArea + "." + inputList + "." + inputItem + "." + inputThing;
    var selectedItem = document.getElementById(level).value;
    var previewArea = document.getElementById('preview');
    var aTag = document.createElement('a');
    aTag.setAttribute('href', '#');
    aTag.setAttribute('value', selectedItem);
    aTag.setAttribute('onclick', 'buttons("' + currentID + '","' + level + '")');
    aTag.setAttribute('id', currentID);
    aTag.setAttribute('class', level);
    var selectedItemText = document.createTextNode(selectedItem);
    aTag.appendChild(selectedItemText);
    previewArea.appendChild(aTag);
    // <br> to help with tree building
    var br = document.createElement('br');
    br.setAttribute('id', 'br' + currentID)
    previewArea.appendChild(br);
}
// Creates new address based on level of new element being created
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
// Checks to see if edit buttons exist before creating new edit buttons
function buttons(id, area) {
    var remove = document.getElementById('removeItem');
    var edit = document.getElementById('editItem');
    var input = document.getElementById('inputBox');
    var submit = document.getElementById('editSubmit');
    if (remove || edit || input || submit) {
        alert('You must complete current edit/remove first');
    } else {
        cancelBtn(id);
        editBtn(id);
        removeBtn(id, area);
    }
}
// Creates edit button
function editBtn(id) {
    var editExp = document.getElementById(id);
    var editBtn = document.createElement('input');
    editBtn.setAttribute('type', 'button');
    editBtn.setAttribute('id', 'editItem');
    editBtn.setAttribute('onclick', 'edit("' + id + '")');
    editBtn.setAttribute('value', 'Edit');
    editExp.parentNode.insertBefore(editBtn, editExp.nextSibling);
}
// Creates input box and submit button when edit button is clicked and removes edit and remove buttons
function edit(id) {
    var removeEditBtn = document.getElementById('editItem');
    removeEditBtn.remove(removeEditBtn);

    var removeRemoveBtn = document.getElementById('removeItem');
    removeRemoveBtn.remove(removeRemoveBtn);

    var editInputBox = document.getElementById(id);
    var editSubmit = document.createElement('input');
    editSubmit.setAttribute('type', 'button');
    editSubmit.setAttribute('id', 'editSubmitBtn');
    editSubmit.setAttribute('value', 'Submit Change');
    editSubmit.setAttribute('onclick', 'editSubmit("' + id + '")')
    editInputBox.parentNode.insertBefore(editSubmit, editInputBox.nextSibling);

    var editExp = document.getElementById(id);
    var editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.setAttribute('id', 'inputBox');
    editExp.parentNode.insertBefore(editInput, editExp.nextSibling);
}
// Changes text of list item and removes input box, submit, and cancel
function editSubmit(id) {
    var newName = document.getElementById('inputBox').value;
    document.getElementById(id).innerHTML = newName;

    var removeSubmit = document.getElementById('editSubmitBtn');
    removeSubmit.parentNode.removeChild(removeSubmit);

    var removeInput = document.getElementById('inputBox');
    removeInput.parentNode.removeChild(removeInput);
}
// Creates button to remove item in preview when list item is clicked
function removeBtn(id, area) {
    var removeExp = document.getElementById(id);
    var removeBtn = document.createElement('input');
    removeBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('id', 'removeItem');
    removeBtn.setAttribute('onclick', 'remove("' + id + '","' + area + '")');
    removeBtn.setAttribute('value', 'Remove');
    removeExp.parentNode.insertBefore(removeBtn, removeExp.nextSibling);
}
// Removes item based on level in list and removes edit, remove, and cancel buttons
function remove(id, area) {
    var removeEdit = document.getElementById('editItem')
    removeEdit.parentNode.removeChild(removeEdit)

    var removeRemove = document.getElementById('removeItem')
    removeRemove.parentNode.removeChild(removeRemove)

    var removeCancel = document.getElementById('cancelItem')
    removeCancel.parentNode.removeChild(removeCancel)

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
// Creates cancle button when list preview item is clicked
function cancelBtn(id) {
    var cancel = document.getElementById(id);
    var cancelBtn = document.createElement('input');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('value', 'Cancel');
    cancelBtn.setAttribute('id', 'cancelItem')
    cancelBtn.setAttribute('onclick', 'cancel("' + id + '")');
    cancel.parentNode.insertBefore(cancelBtn, cancel.nextSibling);
}
// Removes all edit items when cancel button is clicked
function cancel(id) {
    var remove = document.getElementById('removeItem');
    var edit = document.getElementById('editItem');
    var input = document.getElementById('inputBox');
    var submit = document.getElementById('editSubmit');
}