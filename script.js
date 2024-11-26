const data = [
    {
        x: ['Ficção', 'Não-Ficção', 'Fantasia', 'Romance', 'Biografias'],
        y: [45, 30, 12, 8, 5], // Percentagens de livros lidos no mundo em 2024
        type: 'bar',
        marker: {
            color: ['#ff4500', '#ff6a33', '#ff8f66', '#ffb399', '#ffd6cc']
        }
    }
];

const layout = {
    title: {
        text: 'Distribuição Global de Leitura por Categoria (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categoria de Livro',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', data, layout);

const dataMorelli = [
    {
        x: ['Ficção', 'Não-Ficção', 'Fantasia', 'Romance', 'Infantojuvenil'],
        y: [40, 20, 25, 10, 5], // Percentagens de livros lidos no Colégio Morelli em 2024
        type: 'bar',
        marker: {
            color: ['#ff4500', '#ff6a33', '#ff8f66', '#ffb399', '#ffd6cc']
        }
    }
];

const layoutMorelli = {
    title: {
