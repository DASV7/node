const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

//meddlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);
//routes
app.get('/', (req, res) => {
    res.send('simon quiere baba');
})

//database Connect
const user = 'dasvv';
const password = 'dasv';
const dbName = 'pruebas';
const uri = `mongodb+srv://${user}:${password}@cluster0.gbdva.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useUnifiedTopology: true })
    .then(() => console.log("base de datos conectada"))
    .catch(e => console.log(e))


//server
app.listen(3000);