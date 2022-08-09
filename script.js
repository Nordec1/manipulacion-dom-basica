const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const textCopy = document.querySelector('#textCopy');

form.addEventListener('submit', sumarInputValues);
textCopy.addEventListener('copy', showMessageWhenCopy);


function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;
};

function showMessageWhenCopy() {
    alert('Copiaste el texto wachin sos gei oite');
};