function displayMessage(name) {
    console.log(`Hello, ${name}!`);
}

function getUserInput(callback) {
    console.log("Fetching username...");

    setTimeout(() => {
        let username = "Alice"; 
        callback(username);   
    }, 1000); 
}

getUserInput(displayMessage);
