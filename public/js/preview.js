function getInput(level) {
    selectedItem = document.getElementById(level).value;
    previewArea = document.getElementById('preview');
    aTag = document.createElement('a');
    aTag.setAttribute('href', '#');
    aTag.setAttribute('value', selectedItem)
    aTag.setAttribute('onclick', 'test()');
    aTag.setAttribute('id', '1.0.0.0');
    aTag.setAttribute('class', level + 'Selection')
    selectedItemText = document.createTextNode(selectedItem);
    aTag.appendChild(selectedItemText);
    previewArea.appendChild(aTag);
    br = document.createElement('br');
    previewArea.appendChild(br);
}

function expCounter(location) {
    area = document.getElementById(location);
    console.log(location);
}