const emailInput = document.getElementById('emailInput');
const senhaInput = document.getElementById('senhaInput');
const butttonC = document.getElementById('buttonClick');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function validate () {
  butttonC.addEventListener('click', () => {
    if (emailInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
validate();

const checkBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

submitBtn.disabled = true;

checkBox.addEventListener('click', () => {
  if (checkBox.checked === false) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});

// REQUISITO 18 referência:https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled 

textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});
