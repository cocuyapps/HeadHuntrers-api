const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

//router.post('/login', );

//router.delete('/:id', )

module.exports = router;