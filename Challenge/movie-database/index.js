const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Ok');
});

app.get('/test', (req, res) => {
    res.send('{status:200, message:"ok"}');
})

app.get('/time', function(req, res){
    var time = new Date();
     res.send({status: 200,
         message: time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
     })
 })

app.get('/hello/:ID', (req, res) => {
    res.send(`{status:200, message:Hello, ${req.params.ID}}`);
});

app.get('/search', (req, res) => {
    const m = req.query.m
    if(m === req.query.m){
        res.send(`{status:200, message:"ok", data: ${req.query.s}}`);
}

else {
    res.send(`{status:500, error:true, message:you have to provide a search}`)
}
});
app.listen(3000, () => console.log("Listening to port 3000"));