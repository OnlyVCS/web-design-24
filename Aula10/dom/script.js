function trocaImagem(){
    document.querySelector('#image').src = './media/images/dog.jpeg';
}

function mudaTitulo(){
    document.querySelector("#titulo").innerHTML = "MEU NOVO TITULO ATUALIZADO 2024";
}

function mudaPar(){
    document.querySelector('.paragrafo').style = "color: red";
}

function tocaAudio(){
    document.querySelector('#audio').play();
}

function trocaClasseBotao(){
    let btn = document.querySelectorAll('.alterar');
    btn.forEach((x) => {
        x.classList.toggle('btn');
    })
}