const axios = require("axios");
let express = require('express');
let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/v1/getfromaxios', async (req, res) => {
    let url = 'http://localhost:3005/api/v1/getProduct';
    let fetch = await axios.get(url).catch((err) => console.log(err));
    console.log(fetch)
    return res.send(fetch.data);
})
app.post("/api/v1/postFromaxios", async (req, res) => {
    let url = 'http://localhost:3005/api/v1/addProduct';
    let data = req.body;
    let add = await axios.post(url, data).catch((err) => console.log(err))
    console.log(add)
    return res.send(add.data)
})




app.listen(3004, () => {
    console.log("Connected To server")
})