function gerarLista() {
    const numeroMaximo = document.getElementById('numeroMaximo').value;
    const listaNumeros = document.getElementById('listaNumeros');
    listaNumeros.innerHTML = ''; // Limpar a lista antes de adicionar novos números

    for (let i = 1; i <= numeroMaximo; i++) {
        const item = document.createElement('li');
        item.textContent = i;
        listaNumeros.appendChild(item);
    }
}
