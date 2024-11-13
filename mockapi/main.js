let url = "https://67348abda042ab85d11a9b06.mockapi.io/Animal"
// let url = "db.json"

function read(id)
{
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#title').innerHTML = data[id].name
        })
        .catch(err => (
            console.log("Erro: " + err)
        ));
}

function save(name, avatar)
{
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'avatar': avatar
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => (
        console.log("Erro: " + err)
    ));
}

