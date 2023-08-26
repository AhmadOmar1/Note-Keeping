import './noteCard.css'
import React from 'react';

const NoteCard = ( { note }) => {
    const formattedDate = new Date(note.creationDate).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric'
      });
  return (
    <div className='Card'>
      <h3 className='title'>{note.title}</h3>
      <p className='content'>{note.content}</p>
      <p>Created at: <span>{formattedDate}</span></p> 
    </div>
  );
};

const NoteList = ({ notes }) => {
    return (
      <div className='NoteList'>
        {notes.map(note => (
          <NoteCard key={note.id} note={note}/>
        ))}
      </div>
    );
  };
  
  export default NoteList;

