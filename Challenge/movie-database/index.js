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


app.get('/search',(req,res)=>{
     if(req.query.s !== undefined && req.query.s !== "")
     { res.send({status:200, message:"ok", data:req.query.s}) } 
     
     else { res.send({status:500, error:true, message:"you have to provide a search"}) }
})

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

app.get('/movies/create' , (req, res) => {
    res.send("okay");
});

app.get('/movies/read' , (req, res) => {
    res.send({status:200, data: movies});
});

app.get('/movies/read/by-date' , (req, res) => {
res.send({status:200, data: movies});
});


app.get('/movies/update' , (req, res) => {
    res.send("nope");
});

app.get('/movies/delete' , (req, res) => {
    res.send("ciao");
});

app.listen(3000, () => console.log("Listening to port 3000"));