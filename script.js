const botaoNao = document.getElementById('nao');

botaoNao.addEventListener('click', () => {
    // Remove o botão da tela
    botaoNao.style.display = 'none';

    // Adiciona o botão em uma posição aleatória na tela
    botaoNao.style.position = 'absolute';
    botaoNao.style.top = `${Math.random() * window.innerHeight}px`;
    botaoNao.style.left = `${Math.random() * window.innerWidth}px`;

    // Torna o botão visível novamente
    botaoNao.style.display = 'block';
});
