const express = require('express')
const UserRouters = require('./src/user/routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Hello world <3")
})

app.use('/api/users',UserRouters);

const PORT = process.env.PORT || 3000;
app.listen(PORT,() => console.log(`app listening on port ${port}`))