
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React, { useState, useEffect } from 'react';
import NoteCard from '../noteCard/NoteCard';
import './NoteList.css';
import AlertDialog from '../alert/AlertDialog.js';
import { fetchNotes, deleteNote } from '../../services/NoteService.js'; // Import the fetchNotes function

const NoteList = ({ notes, onDelete }) => {

  return (
    <div className="node-list">
      {

        notes.map((note) => {
          const creationDate = new Date(note.creationDate);
          const day = creationDate.getDate().toString().padStart(2, '0');
          const month = (creationDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so add 1
          const year = creationDate.getFullYear();

          const formattedDate = `${day}/${month}/${year}`;
          return (
            <NoteCard
              key={note._id}
              id={note._id}
              title={note.title}
              content={note.content}
              creationDate={formattedDate}
              onDelete={() => onDelete(note._id)}
            />
          )
        })


      }
    </div>
  );
};

export default NoteList;
