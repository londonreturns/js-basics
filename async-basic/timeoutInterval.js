h = document.querySelectorAll("h1");
setTimeout(() =>{
    h[0].innerHTML = "Hello World";
}, 2000);

let count = 0;

function UpdateCount(){
    count++;
    h[1].innerHTML = `Counter: ${count}`;
}

setInterval(UpdateCount, 2000);