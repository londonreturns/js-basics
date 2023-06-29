let mydetails = [
    { name: "Ramesh", role: "Software Engineer" },
    { name: "Umesh", role: "Software Developer" },
    { name: "Mina", role: "Project Manager" }
]

let getDetails = () => {
    let result = ''
    setTimeout(() => {
        mydetails.forEach((data) => {
            result += `<li>${data.name}</li>`
        })
        document.body.innerHTML = result
    }, 1000)
}

function addNewDetails(detail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            mydetails.push(detail)
            let error = false
            if (error) {
                resolve()
            }
            else {
                reject("Error: Something went wrong")
            }
        }, 2000)
    })
}

async function start(){
    try{
        await addNewDetails({name : "Himesh", role : "DBA"})
        getDetails()
    }catch (error){
        document.body.innerHTML = error;
    }
}

start();