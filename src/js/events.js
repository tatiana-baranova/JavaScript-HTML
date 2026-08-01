function clickLink(){
    // alert('You clicked the link?');
    document.querySelector('a.link').style.color = 'red';
}

function clickText(selector){
    document.querySelector(selector).style.backgroundColor = 'blue';
    document.querySelector(selector).style.color = 'white';
}

let inputField = document.querySelector('input.input-field');

function focusEvent(){
    inputField.style.backgroundColor = 'silver';
    inputField.style.padding = '10px';
}

function focusEnd(){
    inputField.style.backgroundColor = 'white';
    inputField.style.padding = '0px';
}