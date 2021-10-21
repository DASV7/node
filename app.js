const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

//json web token

//meddlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoutes = require('./routes/posts');
app.use('/api/posts', postsRoutes);

const usersRoutes = require('./routes/users');
app.use('/api/users', usersRoutes);

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
var port = process.env.PORT || 3000;
app.listen(port);