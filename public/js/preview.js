function getInput(level) {
    console.log(level);
    selectedItem = document.getElementById(level).value;
    previewArea = document.getElementById('preview');
    pTag = document.createElement('p');
    pTag.setAttribute('id', level + 'Selection');
    selectedItemText = document.createTextNode(selectedItem);
    pTag.appendChild(selectedItemText);
    previewArea.appendChild(pTag);
}