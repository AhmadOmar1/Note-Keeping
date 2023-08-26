const mongoose = require('mongoose');

const dbName = 'Notes';
const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    creationDate: {type: Date, default: new Date()}
},{
    versionKey: false
});

const Note = mongoose.model(dbName, noteSchema);

module.exports = { Note };