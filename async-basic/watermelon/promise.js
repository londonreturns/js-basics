let userInput = prompt("Enter the fruit name of your choice?");
let result = document.getElementById("result");

function getResult(fruitName){
    return new Promise((resolve, reject) => {
        if (fruitName != "watermelon"){
            setTimeout(() => {
                resolve(`Here is your ${fruitName}`);
            }, 1000);
        }else{
            setTimeout(() => {
                resolve(`Sorry we are out of watermelons`);
            }, 2000);
        }
    })
}

getResult(userInput).then((value) => (result.innerHTML = value)).catch((err) => (result.innerHTML = err));