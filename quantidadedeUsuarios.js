fetchData('leitura', data => {
    const ctx = document.getElementById('graficoLeitura').getContext('2d');

    // Criando o gráfico comparativo
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Alunos', 'Professores', 'Pais'],
            datasets: [
                {
                    label: 'Colégio Morelli',
                    data: Object.values(data.leitura),
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
                {
                    label: 'Mundo',
                    data: Object.values(data.mundo),
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Hábito de Leitura: Colégio Morelli vs Mundo',
                },
            },
        },
    });
});
