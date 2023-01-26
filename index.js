const express = require('express');

const app = express();

app.get('/', (request, response) => {
return response.json({
    evento: 'Semana De Treino',
    aluno: 'Ricardo Prado'
})
});


app.listen(3333);
