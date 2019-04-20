const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const User = require('../models/user');



router.post('/signup', (req, res, next) => {
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if(user.length >= 1) {
            return res.status(409).json({
                message: 'Email exists'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        _id: mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash
                    });
                    user
                    .save()
                    .then(result => {
                        res.status(201).json({
                            message: 'User created'
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: 'The email registered is not valid'
                        });
                    });
                }
            });
        }
    })
});

router.post('/login', (req, res, next) => {
    User.find({ email: req.body.email })
    .exec()
    .then(user => {
        if (user.length < 1) {
            return res.status(401).json({ //unauthorized. Don't wanna tell hackers if the email exists or not, might be password
                message: 'Auth failed'
            });     
        }
        bcrypt.compare(req.body.password, user[0].password, (error, result) => {
            if (error) {
                return res.status(401).json({ 
                    message: 'Auth failed'
                });  
            } 
            if (result) {
                const token = jwt.sign(
                    {
                        email: user[0].email,
                        userId: user[0]._id
                    }, 
                    'secret',
                    {
                        expiresIn: "1h"
                    }
                );
                return res.status(200).json({
                    message: 'Auth successful',
                    token: token
                });
            }
            res.status(401).json({ 
                message: 'Auth failed'
            });
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:id', checkAuth, (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
    .exec()
    .then(respose => {
        res.status(200).json({
            message: 'User deleted'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
})

module.exports = router;