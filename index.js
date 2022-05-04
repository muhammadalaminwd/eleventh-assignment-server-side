const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2k9ys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("eleventhAssignment").collection("product");
  // perform actions on the collection object

  console.log('Mongo is connected');
  client.close();
});



app.get('/', (req, res) => {
    res.send('Assalamu Alaikum guys!');
});

app.listen(port, () => {
    console.log('Are you listening to me?', port);
})