let resultado = '';

for(let i=0; i<10; i++)
{
    if(i!=9)
    {
        resultado += ((i+1) + " - ");
    } else{
        resultado += ((i+1));
    }
}

console.log(resultado);