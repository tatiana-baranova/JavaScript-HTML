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

window.onclick = function(event){
    let heading = this.document.querySelector('h1.heading');

    if(event.target === heading){
        heading.style.color = 'red';
        console.log('Click', event.target);
    }
    
}

let userInput = document.querySelector('#user-input');
userInput.oninput = function(){
    console.log(userInput.value);
}



// Event Listener//

let block = document.querySelector('div.block');

function handlerBlock(){
    block.innerHTML = 'You clicked the block!';
}

block.addEventListener('mouseover', handlerBlock);
block.addEventListener('mouseleave', function(){
    block.innerHTML = 'Hello';
});

