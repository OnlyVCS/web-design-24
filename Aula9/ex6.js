let num=500;

do
{
    if(num-1 > 0)
    {
        num -= 1;
        console.log(num*2);
    }
    else {
        console.log("Só aceito números positivos maiores que zero");
        return '';
    }
} while(true);