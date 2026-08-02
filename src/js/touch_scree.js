let tap = document.querySelector('#tap');

// window.addEventListener('touchstart', function (e){
//     tap.style.background = "white";
// });
window.addEventListener('touchmove', function (e){
    tap.style.left =e.targetTouches[0].pageX + "px";
    tap.style.top =e.targetTouches[0].pageY + "px";
    tap.style.background = "rgba(31, 230, 230, 0.94)";
});
window.addEventListener('touchend', function (e){
    tap.style.background = "rgba(6, 41, 41, 0.94)";
});