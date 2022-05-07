const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2k9ys.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const productCollection = client.db('eleventh-assignment').collection('product');
        app.get('/product', async(req, res) => {
            const query = {};
            const cursor = productCollection.find(query);
            const products = await cursor.toArray();
            res.send(products);
        });

        app.get('/product/:id' , async (req , res )=>{
            const id = req.params.id;
            const query = {_id:ObjectId(id)};
            const service = await productCollection.findOne(query);
            res.send(service);
        });

    }
    finally{
        // await client.close();
    }
}
run().catch(console.dir);

/* client.connect(err => {
  const collection = client.db("eleventhAssignment").collection("product");
  // perform actions on the collection object

  console.log('Mongo is connected');
  client.close();
});
 */


app.get('/', (req, res) => {
    res.send('Assalamu Alaikum guys!');
});

app.listen(port, () => {
    console.log('Are you listening to me?', port);
})