const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const Album = require('../models/albums');

// /albums/?genre&offset&limit
router.get('/', (req,res) => {
    const offset = 0 || parseInt(req.query.offset);
    const limit = 0 || parseInt(req.query.limit); // A limit value of 0 is equivalent to setting no limit.
    const genre = req.query.genre;
    if (genre) {
        const regex = new RegExp(genre,'i');
        Album.find({genre: regex}).sort({likes: -1}).skip(offset).limit(limit).exec()
            .then(docs => {
                res.status(200).send(docs);
            }).catch(err =>{
                res.status(500).send({error: err});
            });
    } else {
        Album.find().sort({likes: -1}).skip(offset).limit(limit).exec()
        .then(docs => {
            res.status(200).send(docs);
        }).catch(err =>{
            res.status(500).send({error: err});
        });
    }
});

router.get('/:id', (req, res, next) => {
    Album.findById(req.params.id)
    .exec()
    .then(album => {
        if (!album) {
            return res.status(404).json({
                message: 'Album not found'
            });
        }
        res.status(200).json(album);
    })
    .catch(err => {
        res.status(500).json({
            error: EvalError
        });
    });
});

router.get('/genres', (req,res) => {
    Album.find().distinct('genre').exec()
        .then(docs => {
            const genres = [];
            docs.forEach(doc => {
                genres.push(doc);
            });
            res.status(200).send(genres);
        })
        .catch(err => {
            res.status(500).send({error: err});
        });
});

router.post('/', checkAuth, (req, res, next) => {
    const {title,artist,url,image,thumbnail_image,songs,genre,likes} = req.body;
    const album = new Album({
        _id: new mongoose.Types.ObjectId(),
        title,
        artist,
        url,
        thumbnail_image,
        image,
        songs,
        genre,
        likes
    });
    album.save()
    .then(result => {
        res.status(201).send({message: 'createdAlbum:' + result});
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({error: err});
    });
});

router.put('/:id', checkAuth, (req,res) => {
    const {likes} = req.body;
    const id = req.params.id;
    console.log(req.body);
    Album.findByIdAndUpdate(id,{$set: { likes }}, (err,doc) => {
        if(err){
            res.status(500).send({error: err});
        }
        res.status(200).send(`Updated succesful: ${doc.artist} - ${doc.title}`);
    });
});

router.delete('/:id', checkAuth, (req, res, next) => {
    Album.deleteOne({ _id: req.params.id })
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Album deleted'
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;