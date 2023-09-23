import React, { useState } from 'react';
import { Box, TextField, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function FullWidthTextField({ onAddNote }) {
  const [expanded, setExpanded] = useState(false);
  const [noteContent, setNoteContent] = useState('');

  const handleFocus = () => {
    setExpanded(true);
  };

  const handleAdd = () => {
    if (noteContent.trim() !== '') {
      const newNote = {
        title: '', // You can set a default title if needed
        content: noteContent,
        creationDate: new Date().toLocaleDateString(), // Set the current date
      };

      // Call the callback function to add the new note to the list in the parent component (HomePage)
      onAddNote(newNote);

      // Clear the noteContent state
      setNoteContent('');

      // Close the text field
      setExpanded(false);
    }
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      {expanded ? (
        <div
          style={{
            border: '1px solid #ccc',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
            borderRadius: '5px',
            padding: '10px',
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
          }}
        >
          <IconButton
            onClick={handleClose}
            style={{ alignSelf: 'flex-end' }}
            color="error"
          >
            <CloseIcon />
          </IconButton>
          <TextField
            fullWidth
            label="Note Content"
            id="noteContent"
            multiline
            rows={4}
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add
          </Button>
        </div>
      ) : (
        <TextField fullWidth label="Take a Note" id="fullWidth" onFocus={handleFocus} />
      )}
    </Box>
  );
}

export default FullWidthTextField;
