// Função para buscar dados da API
function fetchData(endpoint, callback) {
    fetch(`http://localhost:3000/api/${endpoint}`)
        .then(response => response.json())
        .then(callback)
        .catch(error => console.error('Erro ao buscar dados:', error));
}
