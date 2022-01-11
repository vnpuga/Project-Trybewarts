const emailInput = document.getElementById('emailInput');
const senhaInput = document.getElementById('senhaInput');
const butttonC = document.getElementById('buttonClick');

function validate () {
    butttonC.addEventListener('click', () => {
    if (emailInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
       alert ('Olá, Tryber!');
    } else {
        alert ('Email ou senha inválidos.');
    }
});
}
validate();

