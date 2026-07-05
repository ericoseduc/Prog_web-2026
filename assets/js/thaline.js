const dataNascimento =document.querySelector('dataNascimento');
const idadeFora =document.querySelector('idadeFora');

const calcularIdade = (dn) => {
    let dtNascimento = new Date(dn.textContent.split(': ')[1].split('/').reverse().join('-'));
    let idade = new Date ().getFullYear() - dtnascimento.getFullYear();
    if dtNascimento.getMonth() > new Date().getMonth() || (dtNascimento.getMonth() === new Date().getMonth() && dtNascimento.getDate() > new Date().getDate()) {
        idade--;
    }
    return idade;
}