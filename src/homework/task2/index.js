function showWindowSize(){
    let width = window.innerWidth;
    let height = window.innerHeight;

    document.querySelector('#windowSize').textContent = 'Width: '+ width + 'px. Height: ' + height + 'px.';

}

showWindowSize();

window.addEventListener('resize', showWindowSize);