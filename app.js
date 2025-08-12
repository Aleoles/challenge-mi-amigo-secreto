let listaDeAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const listaHTML = document.getElementById('listaAmigos');

    if (nombre === '') {
        alert('Por favor, escribe un nombre.');
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        input.value = '';
        return;
    }

    listaDeAmigos.push(nombre);

    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    listaHTML.appendChild(nuevoElemento);

    input.value = '';
    input.focus();
}

function sortearAmigo() {
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = '';

    if (listaDeAmigos.length === 0) {
        alert('Primero debes añadir al menos un nombre.');
        return;
    }

    const numeroAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreElegido = listaDeAmigos[numeroAleatorio];

    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${nombreElegido}`;
    resultadoHTML.appendChild(li);
}