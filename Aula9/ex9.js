function validar(email) {
    let atIndex = email.indexOf('@');
    let dotIndex = email.lastIndexOf('.');

    if (atIndex > 0 && dotIndex > atIndex + 1 && email.indexOf('@', atIndex + 1) === -1) {
        return true;
    } else {
        return false;
    }
}

console.log(validar("teste@gmail.com"));
console.log(validar("teste@gmail"));
