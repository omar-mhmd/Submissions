const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const url = process.env.MONGOLAB_URI;
mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://omar-mhmd:marmar123@cluster0-e70xn.mongodb.net/test?retryWrites=true&w=majority", {
useMongoClient:true
}
);

MONGOLAB_URI="mongodb+srv://omar-mhmd:marmar123@cluster0-e70xn.mongodb.net/test?retryWrites=true&w=majority"

heroku:
MONGOLAB_URI="mongodb+srv://omar-mhmd:marmar123@cluster0-e70xn.mongodb.net/test?retryWrites=true&w=majority"

const moviesSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: Number
    });

    const movies1 = mongoose.model('movies', moviesSchema);

app.get('/', (req, res) => {
    res.send('Ok');
});

app.get('/test', (req, res) => {
    res.send('{status:200, message:"ok"}');
})

app.get('/time', function (req, res) {
    var time = new Date();
    res.send({
        status: 200,
        message: time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    })
})

app.get('/hello/:ID', (req, res) => {
    res.send(`{status:200, message:Hello, ${req.params.ID}}`);
});


app.get('/search', (req, res) => {
    if (req.query.s !== undefined && req.query.s !== "") { res.send({ status: 200, message: "ok", data: req.query.s }) }

    else { res.send({ status: 500, error: true, message: "you have to provide a search" }) }
})

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]



app.post('/movies/add', (req, res) => {  // I would have used app.post as a verb

    const myData =  new movies(req.body);
    myData.save()
    var name = req.query.title
    var date = req.query.year
    var score = req.query.rating
    // movies.push({ title: name, year: date, rating: score })

    if (name == "" || date == "") {
        return (res.send({ status: 403, error: true, message: 'you cannot create a movie without providing a title and a year' }))
    }
    else if (date.length !== 4) {
        return (res.send({ status: 403, error: true, message: 'you cannot create a movie without providing a title and a year' }))
    }
    else if (isNaN(date)) {
        return (res.send({ status: 403, error: true, message: 'you cannot create a movie without providing a title and a year' }))
    }
    else if (!score || score == '' || isNaN(score)) {
        movies.push({ title: name, year: date, rating: 4 })
        res.send({ status: 200, data: movies });
    }

    else { res.send({ status: 200, data: movies }); }
});

app.get('/movies/read', (req, res) => {  
    res.send({ status: 200, data: movies });
});

app.get('/movies/read/by-date', (req, res) => {
    res.send({
        status: 200, data: movies.sort(function (a, b) {
            return (a.year - b.year)
        })
    });
});

app.get('/movies/read/by-rating', (req, res) => {
    res.send({
        status: 200, data: movies.sort(function (a, b) {
            return (b.rating - a.rating)
        })
    });

});

app.get('/movies/read/by-title', (req, res) => {
    res.send({ status: 200, data: movies.sort((a, b) => a.title.localeCompare(b.title)) });
});

app.get('/movies/read/id/:id', (req, res) => {
    const ID = req.params.id
    if (ID > 0 && ID <= movies.length) {
        res.send({ status: 200, data: movies[ID - 1] })
    }
    else {
        res.send({ status: 404, error: true, message: 'update/2?title=fhfthe movie ' + ID + ' does not exist' })
    }
})

app.put('/movies/update/:ID',(req,res) => {  //I would have used app.put as a verb
    let newID = req.params.ID
    let newTitle = req.query.title
    let newYear = req.query.year
    let newRating = req.query.rating

    function update(a, b) {
        if(a != undefined) {
            movies[newID-1][b] = a
        }
    }

    if(newID > 0 && newID <= movies.length ) {
        update(newTitle, 'title')
        update(newYear, 'year')
        update(newRating, 'rating')
        res.send({status:200, message: movies})
    }
    else {
        res.send({status:404, error:true, message:'the movie <ID> does not exist'})
    }
})




app.delete('/movies/delete/:id', (req, res) => {    //I would have used app.delete as a verb
    const ID = req.params.id
    for (i = 0; i <= movies.length; i++) {
        if (i == ID) {
            movies.splice(ID - 1, 1)
            res.send({ status: 200, data: movies })
        }
    }
    res.send({ status: 404, error: true, message: 'the movie' + ID + 'does not exist' })
    
    

});


app.listen(3000, () => console.log("Listening to port 3000"));