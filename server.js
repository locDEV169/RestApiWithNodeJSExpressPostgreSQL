process.env.NODE_ENV != 'production' ? require('dotenv').config() : null;
const express = require('express')
const UserRouters = require('./src/user/routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/",(req,res) => {
    res.send("Hello world <3")
})

app.use('/api/users',UserRouters);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT,() => {
    const port = server.address().port;
    console.log(`app listening on port ${port}`)
})