import React, { useState, useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import NavBar from './components/navbar/navbar';
import NoteList from './components/noteCard/noteCard';
import { fetchNotes } from './services/NoteService';
import AddNoteForm from './components/addNote/addNote';
import './App.css';

function App() {


  const [notes, setNotes] = useState([]);



  console.log("before render")

  useEffect(async () => {
    try {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.log(error);
    }

  }, []);

  const handleAddNote = newNote => {
    // Add newNote to the state or send it to the backend


    setNotes([...notes, newNote]);
  
    


  };
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AddNoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} />

    </div>
  );
}

export default App;
