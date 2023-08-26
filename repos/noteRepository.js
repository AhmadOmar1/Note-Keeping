const {Note}  = require('../models/note');


async function createNote(title,content,createDate){
    const note = new Note({
        title,
        content,
        createDate
    });
    return await note.save();
}
async function getAllNotes(){
    return await Note.find(); 
}

async function deleteNote(id){
    return await  Note.findByIdAndDelete(id);
}


async function getNoteById(id){
    return await Note.findById(id);
}


async function updateNoteById(id,note){
    return await Note.findByIdAndUpdate(id, note, { new: true });
}
module.exports = {
    createNote,
    getAllNotes,
    deleteNote,
    getNoteById,
    updateNoteById
}