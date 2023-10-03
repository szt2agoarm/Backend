const url = "https://jsonplaceholder.typicode.com/users/"

const MyUser = {
    name : "Teszt Elek",
    username : "tesztelek",
    email: "eleg_teszt@xyz.com"
}

function writeOut(responseJSON) {
    document.getElementById("code").innerText = JSON.stringify(responseJSON)
}

function getAllUsers() {
    fetch(url) // HTTP kérés indítása
        .then(response => response.json()) // JSON átalakítás
        .then(responseJSON => {
            console.table(responseJSON)
            writeOut(responseJSON)
        }
           )
}
function getUser(id) {
    fetch(url + id) // HTTP kérés indítása
    .then(response => response.json()) // JSON átalakítás
    .then(responseJSON => {
        console.dir(responseJSON)
        writeOut(responseJSON)
    })

}

function addUser(user) {
    fetch(url, {
        method : "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)
    })
    .then(response => response.json()) // JSON átalakítás
    .then(responseJSON => {
        console.log(responseJSON)
        writeOut(responseJSON)
    })
}
