let nome = "Fabio Rodrigo Colombini";

nome = nome.trim().split(" ");

let primeiro_nome = nome[0].toLowerCase();
let ultimo_nome = nome[nome.length - 1].toLowerCase();

console.log(primeiro_nome+"."+ultimo_nome+"@facens.br");