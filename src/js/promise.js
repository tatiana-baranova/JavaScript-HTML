// Callback

let jsBetterThanPhp = false;
let nodeJSIsGreat = true;


function isJsWorthCallback(success, error){
    if(jsBetterThanPhp && nodeJSIsGreat){
        success({
            isWorth: true,
            name: "JavaScript"
        })
    } else
        error("JavaScript is not worth it");
}

isJsWorthCallback((message) => {
    console.log("Success: " + message.name);

}, (error) => {
    console.log("Error: " + error);
    
})