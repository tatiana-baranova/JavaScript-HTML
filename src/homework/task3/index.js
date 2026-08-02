let paragraph = document.getElementById('info');
let boldWords = paragraph.querySelectorAll('b');

paragraph.addEventListener('mouseenter', () => {
    boldWords.forEach(function(word){
        word.style.color = 'red';
    });
});
paragraph.addEventListener('mouseleave', () => {
    boldWords.forEach(function(word){
        word.style.color = 'black';
    });
});

let textarea = document.querySelector('.full-text');
textarea.onkeydown = function(event){
    console.log('onkeydown:', event.key);
}

textarea.onkeyup = function(event){
    console.log('onkeyup:', event.key);
}

textarea.onkeypress = function(event){
    console.log('onkeypress:', event.key);
}