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

// let elements = document.getElementsByTagName("h1");

// for (let i = 0; i < elements.length; i ++){
//     console.log(elements[i].innerHTML);
// }

// let allClasses = document.getElementsByClassName("text");
// console.log(allClasses.length);

// let username = document.getElementsByName("username")[0];
// console.log(username);


let element = document.querySelector("ul.list > li > div.some-info > span");
let parentLi = element.closest("li");

// parentLi.innerHTML = "<p>Information</p>";
element.innerText = "Some new text";
// console.log(parentLi.innerHTML);

let username = document.querySelector("input[type='text']");


if (username !== null) {
    username.value = "Anna";

    username.setAttribute("type", "color");

    if(username.hasAttribute("date"))
        console.log(username.getAttribute("date"));

    username.removeAttribute("date");
    username.removeAttribute("name");

}






