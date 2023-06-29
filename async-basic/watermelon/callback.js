let userInput = prompt("Enter the fruit name of your choice?");
let result = document.getElementById("result");
function getSuccessResult(){
    result.innerHTML = `Here is your input ${userInput}`;
}

function getFailureResult(){
    result.innerHTML = `Sorry!!! We are out of watermelons`;
}

function compareFruitName(fruitName, callback1, callback2){
    if (fruitName == "watermelon"){
        setTimeout(() => {
            callback1();
        }, 2000);
    }else{
        setTimeout(() => {
            callback2();
        }, 2000);
    }
}
compareFruitName(userInput, getFailureResult, getSuccessResult);