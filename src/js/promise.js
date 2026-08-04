// Callback

let jsBetterThanPhp = true;
let nodeJSIsGreat = true;


// function isJsWorthCallback(success, error){
//     if(jsBetterThanPhp && nodeJSIsGreat){
//         success({
//             isWorth: true,
//             name: "JavaScript"
//         })
//     } else
//         error("JavaScript is not worth it");
// }

// isJsWorthCallback((message) => {
//     console.log("Success: " + message.name);

// }, (error) => {
//     console.log("Error: " + error);
    
// })

function isJsWorthPromise() {
    return new Promise((resolve, reject) => {
        if(jsBetterThanPhp && nodeJSIsGreat){
            resolve({
                isWorth: true,
                name: "JavaScript"
            });
        } else {
            reject("JavaScript is not worth it");
        }
    });
}

isJsWorthPromise()
    .then((message) => {
        console.log("Success: " + message.name);
    })
    .then(() => {
        console.log("Message");
    })
    .catch((error) => {
    console.log("Error: " + error);
    })
    .finally(() => {
        console.log("All is down");
        
    })