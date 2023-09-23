import React, { useState } from 'react';
import NavBar from '../../components/navbar/navbar.js'
import './HomePage.css';
import FullWidthTextField from '../../components/fullWidthTextField/FullWidthTextField';
import NoteList from '../../components/notelist/NoteList';

function HomePage() {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]); 

  const handleSearchChange = (data) => {
    setSearch(data.target.value);
  };

  const handleAddNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
  };

  return (
    <div className="home-page">
      <NavBar handleSearchChange={handleSearchChange} />
      <div className='container'>
        <FullWidthTextField onAddNote={handleAddNote} />
        <NoteList notes={notes} search={search} />
      </div>
    </div>
  );
}

export default HomePage;
