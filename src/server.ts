import express from "express";

const app = express();

const port = 3000

app.get('/homepage-get', (req, res) => res.send('Hello, world'))
app.post('/homepage-post', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
