import React, { useState, useEffect } from 'react';
import NoteCard from '../noteCard/NoteCard.js';
import './NoteList.css';
import { fetchNotes } from '../../services/NoteService.js';
import AlertDialog from '../alert/AlertDialog.js';

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [alertOpen, setAlertOpen] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState(null);



  const handleNoteDelete = (id) => {
    setDeleteNoteId(id);
    setAlertOpen(true); 
  };

  const confirmDelete = () => {
    if (deleteNoteId) {
      const newNotes = notes.filter((note) => note._id !== deleteNoteId);
      setNotes(newNotes);
      setDeleteNoteId(null); 
      setAlertOpen(false);
    }
  };

  useEffect(() => {
    fetchNotes().then(notes => {
      setNotes(notes);
    }).catch(err => console.error("Error fetching notes:", err));
  }, [])


  

  return (
    <div className='node-list'>
      {notes.map((note) => {
        const creationDate = new Date(note.creationDate);

        const day = creationDate.getDate();
        const month = creationDate.getMonth() + 1;
        const year = creationDate.getFullYear();

        const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;

        return (
          <NoteCard
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            creationDate={formattedDate}
            onDelete={() => handleNoteDelete(note._id)}

          />
        );
      })}
        {alertOpen && (
        <AlertDialog isOpen={alertOpen} onDelete={confirmDelete} />
      )}


    </div>
  );
}
export default NoteList;
