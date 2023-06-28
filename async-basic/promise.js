let mydetails = [
    { name: "Ramesh", role: "Software Engineer" },
    { name: "Umesh", role: "Software Developer" },
    { name: "Mina", role: "Project Manager" }
]


let getDetails = () => {
    let result = ``;
    setTimeout(() => {
        mydetails.forEach((data) => {
            result += `<li>${data.name}</li>`;
        });
        document.body.innerHTML = result;
    }, 1000);
};

function addNewDetails(detail) {
    let loading = '<p>Loading...</p>';
    document.body.innerHTML = loading;
    return new Promise((resolve, reject) => {  //pending
        setTimeout(() => {
            mydetails.push(detail)
            let error = true;
            if (error) {
                resolve()  //fulfilled
            }
            else {
                reject("Error: Something went wrong") //rejected
            }
        }, 2000)
    })
}

addNewDetails({ name: "Himesh", role: "System Analyst" }).then(getDetails).catch(err => document.body.innerHTML = err);