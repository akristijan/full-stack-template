const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName="sample_training",
    collection

MongoClient.connect(dbConnectionString)
    .then( client => {
        app.listen(process.env.PORT || PORT,)
        console.log("Connected to DB and server is running on port 8000")
        db = client.db(dbName)
        collection = db.collection('companies')
    })
    .catch(error => console.error(error))


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors)

app.get('/', async (request, response) => {
    try {
        response.render('index.ejs')
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})
