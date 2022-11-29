const contomongo=require("./db");
const express = require('express')
contomongo();
const app = express()
const port = 3001
app.use(express.json())
app.get('/', (req, res) => {
  res.send("Hello World")
//   res.send('Fuck You')
})
app.use('/login',require('./routes/login'));
app.use('/notes',require('./routes/notes'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})