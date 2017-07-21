function getArea() {
    area = document.getElementById('area').value;
    previewArea = document.getElementById('preview')
    console.log(area);
    areaText = document.createText(area);
    previewArea.appendChild(area);
}

function getList() {
    list = document.getElementById('list').value;
    console.log(list);
}

function getItem() {
    item = document.getElementById('item').value;
    console.log(item);
}

function getThing() {
    thing = document.getElementById('thing').value;
    console.log(thing);
}

// function exposureAreaSelection() {
//     var exp = document.getElementById("area");
//     // var label = document.createElement('label');
//     var expInput = document.createElement("input");
//     var br = document.createElement('br');
//     label.innerHTML = "Exposure Area: ";
//     expInput.setAttribute("type", "text");
//     expInput.setAttribute('id', 'expArea');
//     expInput.setAttribute('name', 'expArea');
//     label.setAttribute("class", "expForm");
//     // exp.appendChild(label);
//     exp.appendChild(br);
//     exp.appendChild(expInput);
//     exp.appendChild(br);
//     return false;
// }