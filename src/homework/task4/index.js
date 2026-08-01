function getAttributes() {
    let link = document.getElementById("link");

    console.log("Значення атрибута href:", link.getAttribute("href"));
    console.log("Значення атрибута hreflang:", link.getAttribute("hreflang"));
    console.log("Значення атрибута rel:", link.getAttribute("rel"));
    console.log("Значення атрибута target:", link.getAttribute("target"));
    console.log("Значення атрибута type:", link.getAttribute("type"));
}