const mongoose = require('mongoose');
const express = require('express');
// to turn on the server
const app = express();

const port = 3000
//  to requier the routers
const authRouter = require('./authRouter');
const artcailrouter = require('./artcailrouter');
const uploadRouter = require('./uploadRouter');

app.use(express.json())



// local router do hello world in html page
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//  to use ur routers
app.use('/api', artcailrouter);
app.use('/api', uploadRouter)
app.use('/api', authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

mongoose.connect('mongodb://localhost:27017/express')