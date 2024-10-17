function verificar(str) {
    let strLimpa = str.replace(/\s+/g, '').toLowerCase();
    
    let strInvertida = strLimpa.split('').reverse().join('');
    return strLimpa === strInvertida;
}

// Exemplo de uso
console.log(verificar("arara"));   
console.log(verificar("teste")); 
