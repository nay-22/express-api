const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (request, response) => {
    response.send({'message': 'Express REST API'})
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})