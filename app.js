
function redirectCadastro() {
    window.location.href = ""; // Redireciona para a página de cadastro
}


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const memoriesGrid = document.querySelector('.memories-grid');

    const memories = [
        { title: "Paris, França", description: "Visita à Torre Eiffel", date: "2023-01-15", image: "img/paris.jpg" },
        { title: "Roma, Itália", description: "Explorando o Coliseu", date: "2023-05-20", image: "img/roma.jpg" },
        { title: "Londres, Reino Unido", description: "Passeio pelo Palácio de Buckingham", date: "2023-09-10", image: "img/londres.jpg" },
        { title: "Nova York, EUA", description: "Caminhada pelo Central Park", date: "2023-11-28", image: "img/novayork.jpg" }
    ];
    
    // Função para renderizar as memórias de viagens
    function renderMemories() {
        memoriesGrid.innerHTML = ''; // Limpa o conteúdo anterior
    
        memories.forEach(memory => {
            const memoryElement = document.createElement('div');
            memoryElement.classList.add('memory');
            memoryElement.innerHTML = `
                <h2>${memory.title}</h2>
                ${memory.image ? `<img width="100%" src="${memory.image}" alt="${memory.title}">` : ''}
                <p>${memory.description}</p>
                <p><strong>Data:</strong> ${memory.date}</p>
            `;
            memoriesGrid.appendChild(memoryElement);
        });
    }

    // Adiciona evento de clique para o botão 'Abrir Menu'
    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });

    // Renderiza as memórias de viagens ao carregar a página
    renderMemories();
});