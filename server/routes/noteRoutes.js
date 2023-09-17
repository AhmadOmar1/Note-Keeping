const express = require('express');
const noteRepository = require('../repos/noteRepository');
const router = express.Router();

router.post('/notes', async (req, res) => {
    try {
        const { title, content } = req.body;
        const now = new Date();
        const newNote = await noteRepository.createNote(title, content, now);
        res.json(newNote);
        
    } catch (error) {
        res.status(500).json({ error: 'Error creating a note' + error.message });
    }
});

router.get('/notes', async (req, res) => {
    try {
        const notes = await noteRepository.getAllNotes();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Error getting the notes' });
    }
});


router.delete('/notes/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        await noteRepository.deleteNote(noteId);
        res.json(`note is deleted ${noteId}`);
    } catch (error) {
        res.status(500).json({ error: 'Error deleting the notes' });
    }
});



router.get('/notes/:id', async (req, res) => {
    try {
        const noteId = req.params.id;

        console.log(noteId);
        const note = await noteRepository.getNoteById(noteId);
        console.log(note);
        if (!note) {
            res.status(404).json({ error: 'Note not found' });
        }

        res.json(note);
    } catch (error) {
        res.status(404).json(`error while retrive the note ${error.message}`)
    }
});



router.put('/notes/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        const note = req.body;
        const updatedNote = await noteRepository.updateNoteById(noteId, note);
        res.json('note updatted successfully');
    } catch (error) {
        res.status(500).json({ error: 'Error updating the note' });
    }
});



module.exports = router;
