
// Função para alterar o status do jogo entre alugado e disponível
function alterarStatus(gameId) {
    // Seleciona o item do jogo com base no ID passado

    const gameItem = document.getElementById(`game-${gameId}`);
    // Seleciona o botão de alugar ou devolver dentro do item do jogo

    const button = gameItem.querySelector('.dashboard__item__button');
    
    // Verifica o estado atual do botão para determinar a ação
    if (button.textContent === 'Alugar') {

        // Se o botão estiver como 'Alugar', altera para 'Devolver'
        button.textContent = 'Devolver';

        // Adiciona uma classe indicando que o jogo está alugado
        button.classList.add('dashboard__item__button--return');

        // Altera a classe da imagem para indicar visualmente que o jogo está alugado
        gameItem.querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');

        // Exibe um alerta informando que o jogo foi alugado
        alert(`Você confirma o aluguel do jogo ${gameItem.querySelector('.dashboard__item__name').textContent} ?`);
        
    } else {
        // Se o botão estiver como 'Devolver', altera para 'Alugar'
        button.textContent = 'Alugar';

        // Remove a classe que indica que o jogo está alugado
        button.classList.remove('dashboard__item__button--return');
        
        // Remove a classe da imagem para retornar ao estado original
        gameItem.querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');

        // Exibe um alerta informando que o jogo foi devolvido
        alert(`Você confirma a devolução do jogo ${gameItem.querySelector('.dashboard__item__name').textContent} ?`);
    }
}
