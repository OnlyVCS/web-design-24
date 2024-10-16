let texto = "vai tomar no cu bellotto";
let qtd = 0;

function isvogal(vogal)
{
    switch(vogal)
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        qtd++;
        break
        default:
            break;
    }
}

for(let i=0; i<texto.length; i++)
{
    isvogal(texto[i]);
}

console.log(qtd);