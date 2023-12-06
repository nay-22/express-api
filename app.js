const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send({ 'message': 'Express REST API by Nayan' });
});

app.post('/send', (request, response) => {
    const requestData = request.body;
    console.log(requestData);
    response.status(200).json({
        message: 'Hello World',
        success : 'Data recieved successfully',
        data: requestData
    });
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
