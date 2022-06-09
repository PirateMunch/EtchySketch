const container = document.getElementById("container");

//create with for function 16divs. 
for (let i = 0; i < 255; i++) {
    var cell = document.createElement('div');
    container.appendChild(cell);
    cell.className = 'cell';
}

console.log(document.getElementsByTagName("div").length)