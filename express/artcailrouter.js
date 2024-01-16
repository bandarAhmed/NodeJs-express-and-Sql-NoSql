const express = require('express');
const router = express.Router();

router.use((req, res, next) => 
{
  console.log('Time', Date.now())
  next()
})

router.get('/artucel', (req, res) => {
    res.send('artucel gaps test')
});
// get data from server
router.get('/artucel/:id', (req, res) => {
    res.send(`artucel gaps test ${ req.params.id}`)
});
//  sand date to server and creat doucmenet or any thing
router.post('/artucel', (req, res) => {
    console.log(req.body)
    res.send('artucel gaps test')
});
// update all things
router.put('/artucel/:id', (req, res) => {
    console.log(req.body)
    res.send('artucel ')
});
//  delete
router.delete('/artucel/:id', (req, res) => {
    res.send('artucel')
});

module.exports = router;
