const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Assalamu Alaikum guys!');
});

app.listen(port, () => {
    console.log('Are you listening to me?', port);
})