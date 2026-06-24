const dataNascimento = document.querySelector('#dataNascimento');

const calculaIdade = (dn) => {
    let dtNascimento = new Date(dn.textContent.split(': ')[1].split('/').reverse().join('-'));
    let idade = new Date().getFullYear() - dtNascimento.getFullYear();
    if(dn.textContent.split(': ')[1].split('/').reverse().join('-') > new Date().toISOString().split('T')[0]) {
        idade--;
    }
    return idade;
}
console.log(`Idade calculada: ${calculaIdade()} anos`);