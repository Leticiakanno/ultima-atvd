const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Dados simulados de leitura
const data = {
    escola: "Colégio Morelli",
    leitura: {
        alunos: 120, // Alunos que leem regularmente no Colégio Morelli
        professores: 15,
        pais: 50,
    },
    mundo: {
        alunos: 5000000, // Média global de leitores regulares
        professores: 700000,
        pais: 2000000,
    },
};

// Endpoint para dados de leitura
app.get('/api/leitura', (req, res) => res.json(data));

// Inicializando o servidor
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
