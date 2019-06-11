const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Ok');
});

app.get('/test', (req, res) => {
    res.send('{status:200, message:"ok"}');
})

app.get('/time', (req, res) => {
    res.send('{status:200, message:14:12 pm}');
})

app.listen(3000, () => console.log("Listening to port 3000"));