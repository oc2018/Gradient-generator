let colour1 = document.getElementById('selector-1');
let colour2 = document.getElementById('selector-2');
let container = document.getElementById('container');
let picker = document.getElementById('picker');




colour1.addEventListener('input', generate);  
colour2.addEventListener('input',generate);
picker.addEventListener('input',generate);

function   generate(){  
    let value1 = colour1.value;
    let value2 = colour2.value;
    let picker1 = picker.value;  

    container.style.backgroundImage= `linear-gradient(${value1} ${picker1}%, ${value2})`;

    document.getElementById('gradient').innerHTML=` linear-gradient(${value1} ${picker1}%, ${value2})`
    }

generate();