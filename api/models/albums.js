const mongoose = require('mongoose');

var SongSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    artist: String,
    title: String,
    albumArtUrl: String,
    audioUrl: String,
});

var AlbumSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    artist: String,
    url: String,
    image: String,
    thumbnail_image: String,
    songs: [SongSchema],
    likes: Number,
    genre: String,
    description: String
});

module.exports = mongoose.model('albums', AlbumSchema);