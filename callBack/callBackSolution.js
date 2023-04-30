function waitingForSomeServerToAct(myCallback) {
    let dataNeeded;
    setTimeout(() => {
        console.log("BackEnd Information Have Just Been Received");
        dataNeeded = "Cydeo";
       myCallback(dataNeeded)
    }, 5000);
    return dataNeeded;
}

function functionThatNeedsBackEndData(info) {
    console.log("I need to use BackEnd Data "+info);
}

waitingForSomeServerToAct(functionThatNeedsBackEndData);