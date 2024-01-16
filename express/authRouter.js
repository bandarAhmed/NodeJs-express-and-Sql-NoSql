const express = require('express');
const User = require('./models/user');
// to know the page this is router page not main page of express
const router = express.Router();



router.post('/login', async (req, res, next) =>{ 
    const {email ,password} = req.body;
    const user = await User.findOne({email});
    if(!user || user.password != password){
        return res.status(401).json({message: 'invaled'})
    }
    res.status(200).json({success: true,
        date: {
            id: user.id,
            name: user.name
        }
    })

});


router.post('/register', async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User({
        name, email,password
    })
    try {
        await user.save()
    } catch (e) {
        return res.status(500).json({message: 'somtings want rong!'})
    }
    res.status(200).json({ success: true })
});


module.exports = router;

