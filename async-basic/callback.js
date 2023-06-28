let myDetails = [
    { name: "Ramesh", role: "Software Engineer" },
    { name: "Umesh", role: "Software Developer" },
    { name: "Mina", role: "Project Manager" }
]

let getDetails = () => {
    let result = "";
    setTimeout(() => {
        myDetails.forEach((data) => {
            result += `<li>${data.name}</li>`;
       }) 
       document.body.innerHTML = result;
    }, 1000);
}

function addNewDetails(details, callback){
    setTimeout(() => {
        myDetails.push(details);
        callback()
    }, 2000);
}

addNewDetails({name: "Himesh", role: "System Analyst"}, getDetails);