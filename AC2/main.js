var nums = 0;

function add(event) {
    event.preventDefault();
    const text = document.getElementById('titleInput').value;
    
    const list = document.getElementById('cards');
    const newDiv = document.createElement('div');
    newDiv.classList = ['card text-center'];
    newDiv.id = nums++;
    newDiv.style.width = '18rem';
    
    const newImg = document.createElement('img');
    newImg.classList = ['card-img-top']
    newImg.src = "https://picsum.photos/600/400";

    const newDivChild = document.createElement('div');
    newDivChild.classList = ['card-body'];
    
    const newTitle = document.createElement('h5');
    newTitle.classList = ['card-title'];
    newTitle.innerHTML = text;
    newDivChild.appendChild(newTitle);

    const newButton = document.createElement('button');
    newButton.classList = ['btn btn-danger'];
    newButton.innerHTML = "Apagar";
    newButton.type = 'button';
    newButton.setAttribute("onclick", `remove(${newDiv.id})`);
    newDivChild.appendChild(newButton);
    
    newDiv.appendChild(newImg);
    newDiv.appendChild(newDivChild);
    list.appendChild(newDiv);

    document.getElementById('titleInput').value = '';
}

function remove(id) {
    const card = document.getElementById(id);
    card.remove();
}

function removeAll() {
    const list = document.getElementById("cards");
    list.innerHTML = '';
}