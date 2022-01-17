const emailInput = document.getElementById('emailInput');
const senhaInput = document.getElementById('senhaInput');
const butttonC = document.getElementById('buttonClick');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function validate() {
  butttonC.addEventListener('click', () => {
    if (emailInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
}
validate();

// REQUISITO 18 referências:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled
// http://www.w3bai.com/pt/tags/att_checked.html
// disable é um atributo booleano, e se ele estiver definido, os 'controles' serão desabilitados (nosso caso, o botão);
// checked é um atributo booleano, e qdo usado, especifica q um elemento <input> deve ser pré-selecionado;
const checkBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

submitBtn.disabled = true; // botão desabilitado

checkBox.addEventListener('click', () => {
  if (checkBox.checked === false) { // checkbox não está pré-selecionado (checked = false).
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false; // senão, o botão está habilitado.
  }
});

// Requisito 20 referências:
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://www.w3schools.com/jsref/prop_text_value.asp
// o evento keyup é acinonado quando uma tecla é liberada (no caso abaixo, sempre q digitar no campo textarea).
// a propriedade .value contém o valor do campor de texto.
// a propriedade .innerText (DOM) especifica o conteúdo de texto de um nó.
textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});
