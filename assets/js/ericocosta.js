const dataNascimento = document.querySelector('#dataNascimento');
const idadeFora = document.querySelector('#idade');

const calculaIdade = (dn) => {
    let dtNascimento = new Date(dn.textContent.split(': ')[1].split('/').reverse().join('-'));
    let idade = new Date().getFullYear() - dtNascimento.getFullYear();
    if(dtNascimento.getMonth() > new Date().getMonth()){
        idade--;
    }
    if(dtNascimento.getMonth() === new Date().getMonth() && dtNascimento.getDate() > new Date().getDate()){
        idade--;
    }
    return idade;
}
idadeFora.innerHTML = `${calculaIdade(dataNascimento)} anos`;
console.log(`Idade calculada: ${calculaIdade(dataNascimento)} anos`);
