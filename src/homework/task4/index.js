function getAttributes() {
    let link = document.getElementById("link");

    console.log("href:", link.getAttribute("href"));
    console.log("hreflang:", link.getAttribute("hreflang"));
    console.log("rel:", link.getAttribute("rel"));
    console.log("target:", link.getAttribute("target"));
    console.log("type:", link.getAttribute("type"));
}