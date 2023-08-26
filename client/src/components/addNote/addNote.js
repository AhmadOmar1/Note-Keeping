import './addNote.css'
import React, { useState } from 'react';
import { addNote } from '../../services/NoteService';

const AddNoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleContentChange = event => {
    setContent(event.target.value);
  };

  const handleSubmit =async event => {
    event.preventDefault();
    const newNote = {
      title: title,
      content: content,
      createdAt: new Date().toISOString() // Set the creation date
    };
    try {
      const addedNote = await addNote(newNote);
      onAddNote(addedNote);
      setTitle('');
      setContent('');
    } catch (error) {
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className='AddNoteForm'>
      <h2>Add a New Note</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Content</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
        </div>
        <button type='submit'>Add Note</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
