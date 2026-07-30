// console.log(window.innerWidth);
// window.open("https://itproger.com");
// window.open("https://itproger.com", "Hello", "width=600, height=800");



// console.log(navigator.language)

// if(navigator.onLine){
//     console.log("Yes");
// }

// navigator.geolocation.getCurrentPosition(function(position){
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);
// });

// console.log(location.host);


// for (let i = 0; i < document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i]);
// }
// let content = document.getElementById("content");
let elements = document.getElementsByTagName("h1");
// console.log(content);

for (let i = 0; i < elements.length; i ++){
    console.log(elements[i].innerHTML);
}