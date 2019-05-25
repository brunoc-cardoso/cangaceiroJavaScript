'use strict';

var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];
console.log(campos); // Verificando o conteúdo do array

let tbody = document.querySelector('table tbody');

document.querySelector('form').addEventListener('submit', function(event) {
    // cancelando a submissão do formulário
    event.preventDefault();

    let tr = document.createElement('tr');

    campos.forEach(function(campo) {
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    tbody.appendChild(tr); // Adiciona a tr 

    // limpa os campos e da o focus
    campos[0].value = '';
    campos[1].value = 0;
    campos[2].value = 1;
    campos[0].focus();
});

