import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/navbar.js';
import './HomePage.css';
import FullWidthTextField from '../../components/fullWidthTextField/FullWidthTextField';
import NoteList from '../../components/notelist/NoteList';
import { addNote, deleteNote, fetchNotes } from '../../services/NoteService';
import AlertDialog from '../../components/alert/AlertDialog.js';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';


function HomePage() {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [deleteNoteId, setDeleteNoteId] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    fetchRealNotes();
  }, []);

  const handleSearchChange = (data) => {
    setSearch(data.target.value);
  };


  const fetchRealNotes = () => {
    fetchNotes()
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  };

  const handleAddNote = async (newNote) => {
    const temId = 'test' + Math.random() * 100;
    const updatedNotes = [{ _id: temId, ...newNote }, ...notes];
    setNotes(updatedNotes);
    try {
      await addNote(newNote);
    } catch (error) {
      setNotes(notes => notes.filter(n => n._id !== temId));
    }
  };


  const handleDeleteClicked = (id) => {
    setDeleteNoteId(id);
    setOpenAlertDialog(true);
  };


  const confirmDelete = async () => {
    if (deleteNoteId) {
      try {
        const msg = await deleteNote(deleteNoteId);
        setNotes(notes => notes.filter(note => note._id !== deleteNoteId));
        setSnackbarOpen(true);
      } catch {
        console.log("Error cannot delete note");
      }
    }
  };



  const filterdNotes = search?.trim() ? notes.filter(note => note.title.includes(search) || note.content.includes(search)) : notes;

  return (
    <div className="home-page">
      <NavBar handleSearchChange={handleSearchChange} />
      <div className="container">
        <FullWidthTextField onAddNote={handleAddNote} />
        <NoteList notes={filterdNotes} onDelete={handleDeleteClicked} />

        <AlertDialog
          confirmDelete={confirmDelete}
          isOpen={openAlertDialog}
          setOpenAlertDialog={setOpenAlertDialog}
        />

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleSnackbarClose}
            severity="info"
          >
            Note deleted successfully!
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
}

export default HomePage;
