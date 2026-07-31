function clickLink(){
    // alert('You clicked the link?');
    document.querySelector('a.link').style.color = 'red';
}

function clickText(selector){
    document.querySelector(selector).style.backgroundColor = 'blue';
    document.querySelector(selector).style.color = 'white';
}