let userInput = prompt("Enter the fruit of your choice");

function getResult(fruitName){
    return new Promise((resolve, reject) => {
        if (fruitName != "watermelon"){
            setTimeout(() => {
                resolve();
            }, 1000);
        }else{
            setTimeout(() => {
                reject("Sorry we are out of watermelon");
            }, 2000);
        }
    })
}

async function initialize(){
    try{
        await getResult(userInput);
        result.innerHTML = `Here is your ${userInput}`;
    }catch (error){
        result.innerHTML = error;
    }
}
initialize()