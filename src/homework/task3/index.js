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