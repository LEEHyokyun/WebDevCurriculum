const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    res.render('jwt.html');
});

router.post('/add', (req, res) => {
    //console.log(req.body);
    let {ID, PW} = req.body;

    const token = jwt.sign(
        {
            userID: ID,
            userPW: PW
        }, 'secret', 
        {
            expiresIn: '30s'
        },
        (err, token) => {
            console.log(token);
        }
    )
    res.redirect('/jwt');
})

module.exports = router;