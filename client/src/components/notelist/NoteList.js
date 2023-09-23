import React, { useState, useEffect } from 'react';
import NoteCard from '../notecard/NoteCard.js';
import './NoteList.css';
import { fetchNotes } from '../../services/NoteService.js';
import AlertDialog from '../alert/AlertDialog.js';
import { Alert } from '@mui/material';

const NoteList = ({search}) => {

  const dummyNotes = [
    {
      _id:1,
      title:'test1',
      content:'Hi this is the content for test 1 note',
      creationDate:'10-17-2024'
    },
    {
      _id:2,
      title:'test2',
      content:'Hi this is the content for test 2 note',
      creationDate:'10-17-2024'
    },
    {
      _id:3,
      title:'test3',
      content:'Hi this is the content for test 3 note',
      creationDate:'10-17-2024'
    },
    {
      _id:4,
      title:'test4',
      content:'Hi this is the content for test 4 note',
      creationDate:'10-17-2024'
    },
    {
      _id:5,
      title:'test5',
      content:'Hi this is the content for test 5 note',
      creationDate:'10-17-2024'
    },
    {
      _id:6,
      title:'test6',
      content:'Hi this is the content for test 6 note',
      creationDate:'10-17-2024'
    },

  ];
  const [notes, setNotes] = useState(dummyNotes);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState(null);



  const handleDeleteClicked = (id) => {
    setDeleteNoteId(id);
    setOpenAlertDialog(true);
    
  };

  const confirmDelete = () => {
    if (deleteNoteId) {
      const newNotes = notes.filter((note) => note._id !== deleteNoteId);
      setNotes(newNotes);
      setDeleteNoteId(null);
    }
  };

  useEffect(() => {
    filternotes();
    // fetchNotes().then(notes => {
    //   setNotes(notes);
    // }).catch(err => console.error("Error fetching notes:", err));
  }, [search])

  const handleAddNote = (newNote) => {
    // Create a copy of the current notes and add the new note to it
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
};

  const filternotes = () => {
       const newNotes = dummyNotes.filter(note =>
         ( note.content.toLowerCase().includes(search.toLowerCase()) ||  note.title.toLowerCase().includes(search.toLowerCase())) );
        setNotes(newNotes);
    
   

  }

  return (
    <div className='node-list'>
      {notes.map((note) => {
        // const creationDate = new Date(note.creationDate);

        // const day = creationDate.getDate();
        // const month = creationDate.getMonth() + 1;
        // const year = creationDate.getFullYear();

        // const formattedDate = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;

        return (
          <NoteCard
            key={note._id}
            id={note._id}
            title={note.title}
            content={note.content}
            creationDate={note.creationDate}
            onDelete={() => handleDeleteClicked(note._id)}

          />
        );
      })}
        <AlertDialog confirmDelete={confirmDelete} isOpen={openAlertDialog} setOpenAlertDialog={setOpenAlertDialog} />
    

    </div>
  );
}
export default NoteList;
